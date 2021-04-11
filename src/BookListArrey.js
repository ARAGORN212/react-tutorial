import React from 'react';

const Books = [
    {
        id: 1,
        imgUrl: "/static/image/book_noun.jpg",
        author: "morizaki",
        title: "how can be toll",
    },
    {
        id: 2,
        imgUrl: "/static/image/book_noun.jpg",
        title: "how can be khortoq",
        author: "mojizaki",
    }
]

const BookofList = () => Books.map((item, i) => {
    return (
        <div key={item.id}>
            <img src={item.imgUrl} alt="book-cover" />
            <h2 key={i}>{item.title}</h2>
            <p>{item.author}</p>
        </div>
    )
}
)

// function BookofList() {
//     return (
//         <>
//             {info}
//         </>
//     );
// }

export default BookofList;