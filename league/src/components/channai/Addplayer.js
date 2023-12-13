import React, { useEffect } from 'react'
import { useState, } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './addplayer.css';


// initial state object with empty values for the player's name, age, position, and city.
const intialState = {
    name: "",
    age: "",
    position: "",
    city: "",
}

const Addplayer = () => {
    // setState is a function used to update the state variable.
    const [state, setState] = useState(intialState);
    //  destructuring to extract the values of name, age, position, and city from the state object
    const { name, age, position, city } = state;
    // navigate is a function that allows programmatic navigation to different routes.
    const navigate = useNavigate();
    // _id represents the ID parameter extracted from the URL.
    const { _id } = useParams();

    // hook is used to fetch the player's information when the component mounts or when the _id parameter changes.
    // it calls the getSingleplayer function to fetch the player's information.
    useEffect(() => {
        if (_id) {
            getSingleplayer(_id);
        }
    }, [_id]);

    // function is responsible for fetching a single player's information based on the provided _id.
    const getSingleplayer = async (_id) => {
        try {
            const response = await axios.get(`http://localhost:5000/teams/CSK1/players/${_id}`);
            if (response.status === 200) {
                setState({ ...response.data });
            }
        } catch (error) {
            console.error(error.message);
        }
    };


    // It extracts the name and value properties from the event target
    // It maintains the previous state using the spread syntax (...state) and updates only the changed property using [name]: value.
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({
            ...state, [name]: value,
        });
    };

    //  function is responsible for adding a new player to the database.
    // It makes an asynchronous HTTP POST request to the specified URL using axios library.
    const Adduser = async (data) => {
        const response = await axios.post('http://localhost:5000/teams/CSK1/players', data);
        if (response === 200) {
            console.log(response.data)
        }
    };

    // This function is called when the form is submitted.
    // If _id exists, it means the component is in edit mode, and it makes an HTTP PUT request to update the player's information.
    // If _id does not exist, it means the component is in add mode, and it makes an HTTP POST request to add a new player.
    const submitHandle = async (e) => {
        e.preventDefault();
        try {
            if (_id) {
                const response = await axios.put(
                    `http://localhost:5000/teams/CSK1/players/${_id}`,
                    state
                );
                if (response.status === 200) {
                    console.log(response.data);
                }
            } else {
                const response = await axios.post('http://localhost:5000/teams/CSK1/players', state);
                if (response.status === 200) {
                    console.log(response.data);
                }
            }
        } catch (error) {
            console.log(error.message);
        }
        // After submitting the form, it sets a timeout of 500 milliseconds and then navigates to the "/players" route using navigate('/players').
        setTimeout(() => navigate('/players'), 500);
    };



    return (
        <div className='Cskformstyle'>
            <h2>{_id ? 'Edit Player' : 'Add a Player'}</h2>
            <form className='Cskform' onSubmit={submitHandle}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Your name"
                    value={name}
                    onChange={handleInputChange} />

                <input
                    type="number"
                    name="age"
                    placeholder="Enter Your Age"
                    value={age}
                    onChange={handleInputChange} />

                <input
                    type="text"
                    name="position"
                    placeholder="Enter Your Postion"
                    value={position}
                    onChange={handleInputChange} />

                <input
                    type="text"
                    name="city"
                    placeholder="Enter Your City"
                    value={city}
                    onChange={handleInputChange} />

                <button className="Cskaddplayer" type="submit" >{_id ? 'Update Player' : 'Add Player'}</button>
            </form>
        </div>
    )
}

export default Addplayer;
