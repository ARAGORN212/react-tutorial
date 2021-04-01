import React from 'react';

const Book = () => {
    return (
        <>
            <Image />
            <h1> book name </h1>
            <Title />
            <Author />
        </>
    );
}

const Image = () => <img src="/static/image/book_noun.jpg" alt="book-cover" />

const Title =()=> <h2>bloody orange</h2>

const Author =()=> <h3>morizaki</h3>;

function BookList() {
    return (
        <>
            <Book />
        </>
    );
}

export default BookList;