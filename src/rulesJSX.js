import React from 'react';
// import ReactDom from 'react-dom';


// good
// const Testing = () => {
//     return React.createElement('h1' , {}, 'hi man')
// }

// easy
function Testing() {
    return (
        <>
            <h1>
                hi Bro
            </h1>
        </>
    );
}

// clever
// const Testing = () => {
//     return React.createElement('h1', {},React.createElement('a' , {href:"https://google.com",target:"_blank"} , 'iran'))
// }

export default Testing;