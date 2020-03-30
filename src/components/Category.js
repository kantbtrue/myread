import React from 'react';
import Card from './Card';

class Category extends React.Component {
    state = {
        data: []
    };

    componentDidMount () {
        const { bookData, shelf } = this.props;
        this.setState({
            data: bookData.filter(book => book.shelf === shelf )
        });
    }

    render () {
        return (
            <section className="section">
                <h2>{this.props.shelfTitle}</h2>
                <div className="separator"></div>
                <div className="card-wrap">
                    {this.state.data.map(book => {
                        return (
                            <Card key={book.id} bookData={book} />
                        );
                    })}
                </div>                
            </section>
        );
    }
}

export default Category;