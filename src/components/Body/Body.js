import React, { useEffect, useState } from 'react';
import Businessman from '../Businessman/Businessman';
import Club from '../Club/Club';
import './Body.css'

// body component 
const Body = () => {

    // useState of businessman and club
    const [businessman, setBusinessman] = useState([]);
    const [club, setClub] = useState([]);


    // useEffect of businessman state
    useEffect(() => {
        fetch('./businessman.json')
            .then(res => res.json())
            .then(data => {
                setBusinessman(data);

            })
    }, [])

    // adding data to club
    const handleAddToClub = (person) => {
        const newClub = [...club, person];
        setClub(newClub);
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
                <Club club={club}></Club>
            </div>

        </div>
    );
};

export default Body;