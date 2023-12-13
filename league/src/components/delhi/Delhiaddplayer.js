import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import { useEffect } from 'react'
import { useState, } from 'react';
import axios from 'axios';
import './delhiaddplayer.css';

const intialState = {
    name: "",
    age: "",
    position: "",
    city: "",
}

const Delhiaddplayer = () => {
    const [state, setState] = useState(intialState);
    const { name, age, position, city } = state;

    const navigate = useNavigate();
    const { _id } = useParams();


    useEffect(() => {
        if (_id) {
            getSingleplayer(_id);
        }
    }, [_id]);


    const getSingleplayer = async (_id) => {
        try {
            const response = await axios.get(`http://localhost:5000/teams/DC9/players/${_id}`);
            if (response.status === 200) {
                setState({ ...response.data });
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({
            ...state, [name]: value,
        });
    };


    const Adduser = async (data) => {
        const response = await axios.post('http://localhost:5000/teams/DC9/players', data);
        if (response === 200) {
            toast.success(response.data)
        }
    };



    const submitHandle = async (e) => {
        e.preventDefault();
        try {
            if (_id) {
                const response = await axios.put(
                    `http://localhost:5000/teams/DC9/players/${_id}`,
                    state
                );
                if (response.status === 200) {
                    toast.success(response.data);
                }
            } else {
                const response = await axios.post('http://localhost:5000/teams/DC9/players', state);
                if (response.status === 200) {
                    toast.success(response.data);
                }
            }
        } catch (error) {
            toast.error(error.message);
        }
        setTimeout(() => navigate('/delhiplayers'), 500);
    };

  return (
    <div className='Delhiformstyle'>
    <h2>{_id ? 'Edit Player' : 'Add a Player'}</h2>
    <form className='Delhiform' onSubmit={submitHandle}>
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

        <button className="Delhiaddplayer" type="submit" >{_id ? 'Update Player' : 'Add Player'}</button>
    </form>
</div>
)
}

export default Delhiaddplayer;
