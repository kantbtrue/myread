import React from 'react';
import Card from './Card';

const Category = (props) => {
    const { booksData, shelfTitle, handleUpdate } = props;
    return (
        <section className="section">
            <h2>{shelfTitle}</h2>
            <div className="separator"></div>
            <div className="card-wrap">
                {booksData.map(book => {
                    return (
                        <Card key={book.id} bookData={book} handleUpdate={handleUpdate}/>
                    );
                })}
            </div>                
        </section>
    );
}

export default Category;