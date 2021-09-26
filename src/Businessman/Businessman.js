import React from 'react';
import './Businessman.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Businessman = (props) => {
    const { name, worth, age, founder, residence, country, img } = props.person;


    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />


    return (
        <div className="businessman">
            <div className="img-div">
                <img src={img} alt="" />
            </div>
            <div className="person-info">
                <h4 className="person-name">{name}</h4>
                <p>Age: {age}</p>
                <p>Residence: {residence}</p>
                <p>Founder of: {founder}</p>
                <p>Net Worth: ${worth} billion</p>
                <p>Country: {country}</p>
                <button
                    onClick={() => props.handleAddToClub(props.person)}
                    className="button-main">{cartIcon} Add to Club</button>

            </div>
        </div >
    );
};

export default Businessman;