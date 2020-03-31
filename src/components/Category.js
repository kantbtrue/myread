import React from 'react';
import Card from './Card';

const Category = () => {
    const { booksData, shelfTitle } = this.props;
    return (
        <section className="section">
            <h2>{shelfTitle}</h2>
            <div className="separator"></div>
            <div className="card-wrap">
                {booksData.map(book => {
                    return (
                        <Card key={book.id} bookData={book} />
                    );
                })}
            </div>                
        </section>
    );
}

export default Category;