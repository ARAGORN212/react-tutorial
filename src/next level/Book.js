import React from 'react';

import {books} from './books'

const Book = () => books.map((item, i) => {
    const clickHandler = () => { alert('hi'); }
    // const clickHandlerDelete = () => {}

    return (
        <div key={item.id}>
            <img src={item.imgUrl} onMouseOver={() => { console.log("image " + item.title) }} alt="book-cover" />
            <h2 key={i} onClick={() => console.log(item.title)}>{item.title}</h2>
            <p>{item.author}</p>
            <button type="button" onClick={clickHandler}> alert </button>
            {/* <button type="button" onClick={clickHandlerDelete}> more </button> */}
        </div>
    )
}
)

export default Book;