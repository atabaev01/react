import React from 'react';

const Todoitem = (props) => {
    return (
        <li className="list-group-item">{props.children}</li>
    );
};

export default Todoitem;