import React from 'react';
import * as BooksAPI from '../BooksAPI';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    state = {
        value: '',
        data: [],
        error: null
    }

    handleSearch = (val) => {
        if (this.state.value.length > 0) {
            BooksAPI.search(val).then(
                result => {
                    result ?
                        this.setState({data: result}) :
                        this.setState({data: []});
                }, 
                error => {
                    this.setState({
                        error
                    });
                }   
            );
        }
    }

    handleSearchTerm = (e) => {
        e.preventDefault();
        this.setState({
            value: e.target.value
        });
        this.handleSearch(e.target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.handleSearch(this.state.value);
    }

    render () {
        const { data, error } = this.state;
        return(           
            <section className="section-search">
                <Link to="/">Back to homepage</Link>
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter search term..." onChange={this.handleSearchTerm}/>
                </form>
                {error ? <div className="error">Error: {error.message}</div> :
                    <div className="search-result">
                        {
                            data.length > 0 &&
                                (<div className="card-wrap">
                                {data.map(book => <Card key={book.id} bookData={book} handleUpdate={this.props.handleUpdate} />)}
                                </div>)
                        }
                    </div>
                }
            </section>
        );
    }
}

export default Search;
