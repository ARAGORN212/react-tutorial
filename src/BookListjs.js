import React from 'react';

// const title = 'bloody orange';
// const author = 'morizaki';
// const imageUrl = '/static/image/book_noun.jpg';

// const Book = () => {
//     return (
//         <>
//             <img src={imageUrl} alt='book-cover' />
//             <h1> {title} </h1>
//             <h3> {author} </h3>
//         </>
//     );
// }

// with props
const Book = (props) => {
    // const Book = ({imageUrl, title, author}) => {
    // const {imageUrl,title,author} = props
    return (
        <>
            <img src={props.imageUrl} alt='book-cover' />
            <h1> {props.title} </h1>
            <h3> {props.author} </h3>
        </>
    );
}

// props with pass the data
// aval az ye jaye DG miayd bad ba props pass midi be inja 

// <Book img={firstBook.imageUrl} title={fistBook.title} author={firstBook.author} />

// const Book = (props) => {
//     return (
//         <>
//             <img src={props.imageUrl} alt='book-cover' />
//             <h1> {props.title} </h1>
//             <h3> {props.author} </h3>
//         </>
//     );
// }




export default Book;