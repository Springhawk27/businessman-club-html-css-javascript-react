import React, { useEffect, useState } from 'react';
import Businessman from '../Businessman/Businessman';
import Club from '../Club/Club';
import './Body.css'


const Body = () => {
    const [businessman, setBusinessman] = useState([]);
    const [club, setClub] = useState([]);


    useEffect(() => {
        // console.log("product API Called");
        fetch('./businessman.json')
            .then(res => res.json())
            .then(data => {
                setBusinessman(data);
                // console.log("product recieved");
                // setDisplayProducts(data);
            })
    }, [])

    const handleAddToClub = (person) => {
        // console.log('person');
        const newClub = [...club, person];
        setClub(newClub);
        //save to local storage for now
        // addToDb(person.key);
    }

    return (
        <div className="body-container">

            <div className="businessman-container">
                {
                    businessman.map(person => <Businessman
                        key={person.key}
                        person={person}
                        handleAddToClub={handleAddToClub}
                    ></Businessman>)
                }
            </div>

            <div className="club-container">
                {/* <h3> Member: {club.length}</h3> */}
                <Club club={club}></Club>
            </div>

        </div>
    );
};

export default Body;