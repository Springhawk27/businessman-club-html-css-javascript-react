import React from 'react';
import './Club.css'

const Club = (props) => {

    const { club } = props;



    // let totalQuantity = 0;

    // let total = 0;
    let name = [];
    let total = 0;
    for (const person of club) {
        console.log(person.name)
        total = total + person.worth;
        name.push(person.name);
        name.push(", \n");

        // let name1 = person.name;
        // if (!person.quantity) {
        //     person.quantity = 1;
        // }
        // total = total + person.price * person.quantity;
        // totalQuantity = totalQuantity + person.quantity;
    }


    return (
        <div className="club">
            <h4>Club Member Information</h4>
            <h5>Member Added: {props.club.length}</h5>
            <h5>Total Worth: ${total.toFixed(2)} billion</h5>

            <h5>Member Name: </h5>
            <h5 className="member-name">{name}</h5>

            {/* <h5>Items Ordered: {totalQuantity}</h5> */}
            {/* <h4>Total: {total.toFixed(2)}</h4> */}
            {/* <p>Grand Total: {grandTotal.toFixed(2)}</p> */}
        </div>
    );
};

export default Club;