import React from 'react';
import './componentlist.css';
import Item from "./ComponentItem/componentitem"


const List = ({ list, onStarChange, onDeleteContact, onEditContact }) => {
    // console.log("List => ", list);
    const item = list.map(item => {
        return <Item
            key={item.id}
            name={item.name}
            address={item.address}
            avatar={item.avatar}
            phone={item.phone}
            gender={item.gender}
            email={item.email}
            favorite={item.favorite}
            onStarChange={() => onStarChange(item.id)}
            onDeleteContact={() => onDeleteContact(item.id)}
            onEditContact={() => onEditContact(item.id)}
        />;
    })


    return (
        <ul className="list-group pull-down" id="contact-list">
            {item.length !== 0 ? item : <h2>Contact List is Empty</h2>}
        </ul>
    );
}

export default List;