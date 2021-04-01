import React from 'react';

const title = 'bloody orange';
const author = 'morizaki';
const imageUrl = '/static/image/book_noun.jpg';

const Book = () => {
    return (
        <>
            <img src={imageUrl} alt='book-cover' />
            <h1> {title} </h1>
            <h3> {author} </h3>
        </>
    );
}

export default Book;