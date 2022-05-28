import React from 'react';

function Ordered({ children }) {
    <ol>
        {children}
    </ol>
}

function Unordered({ children }) {
    <ul>
        {children}
    </ul>
}

function List({ items, ordered }) {
    const listItems = items.map((item) => <li>{item}</li>);
    return ordered ? <Ordered>{listItems}</Ordered> : <Unordered>{listItems}</Unordered>
}

export default List