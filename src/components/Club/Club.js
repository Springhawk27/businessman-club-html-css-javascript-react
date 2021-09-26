import React from 'react';
import './Club.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


// club component
const Club = (props) => {

    const { club } = props;

    // setting font awesome icon
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    let total = 0;
    let name = [];
    let mlength = 0;


    // looping through on club te get and set name member length and total
    for (const person of club) {

        if (!name.includes(person.name) && mlength < 5) {
            name.push(person.name)
            name.push(", ")

            total = total + person.worth;

            mlength = mlength + 1;
        }

    }


    return (
        <div className="club">
            <h4 className="club-title">Club Member Information</h4>
            <h5 >Member Added: {mlength}</h5>
            <h5>Total Worth: ${total.toFixed(2)} billion</h5>

            <h5 className="club-title member">Member Name: </h5>
            <h5 className="member-name">{name}</h5>

            <button className="button-main">{cartIcon} By for Club</button>
        </div>
    );
};

export default Club;