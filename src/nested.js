import React from 'react';
// import ReactDOM from 'react-dom';

const Person = () => <h3>hello people</h3>

const Message = () => {
    return (
        <li>
            <a href="/" > hello world </a>
        </li>
    );
}

function Greeting() {
    return (
        <>
            <Person />
            <ul>
                <Message />
            </ul>
        </>
    );
}

export default Greeting;