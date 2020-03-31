import React from 'react';
import * as BooksAPI from '../BooksAPI';

class Card extends React.Component {

    state = {
        shelf: this.props.bookData.shelf ?? ''
    };

    componentDidMount () {
        BooksAPI.get(this.props.bookData.id).then(
            result => {
                this.setState({
                    shelf: result.shelf
                })
            }
        );
    };

    handleChange = (e) => {
        this.props.handleUpdate(this.props.bookData, e.target.value);
        BooksAPI.update(this.props.bookData, e.target.value);
    };

    render () {
        const { bookData } = this.props;
        return (
            <div className="card">
                <div className="card-img">
                    <img src={bookData.hasOwnProperty("imageLinks") ? bookData.imageLinks.thumbnail : "https://via.placeholder.com/250x350"} alt="" />
                </div>
                <div className="card-content">
                    <div className="card-content__left">
                        <h2>{bookData.title}</h2>
                        <h3>{Array.isArray(bookData.authors) ? bookData.authors.join(', ') : bookData.authors}</h3>
                    </div>
                    <div className="card-content__right">
                        <select value={this.state.shelf} onChange={this.handleChange}>
                            <option value="none">None</option>
                            <option value="read">Read</option>
                            <option value="wantToRead">Want to read</option>
                            <option value="currentlyReading">Currently Reading</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;