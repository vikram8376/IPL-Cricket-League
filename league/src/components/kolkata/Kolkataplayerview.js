import React from 'react'
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import './kolkataplayerview.css';

const Kolkataplayerview = () => {
    const [playerData, setPlayerData] = useState(null);
    const { _id } = useParams();
    const navigate = useNavigate();

  

    const getPlayerData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/teams/kKR7/players/${_id}`);
            if (response.status === 200) {
                setPlayerData(response.data);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        getPlayerData();
    }, []);

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this player data?")) {
            try {
                const response = await axios.delete(`http://localhost:5000/teams/kKR7/players/${_id}`);
                if (response.status === 200) {
                    toast.success(response.data);
                    navigate('/Kolkataplayers');
                }
            } catch (error) {
                toast.error(error.message);
            }
        }
    };

    if (!playerData) {
        return <div>Loading player data...</div>;
    }

    const { name, age, position, city } = playerData;
    return (
        <>
           <div className='Kolkatanavbarplayer'>
                    <img src='/R4.png' alt='' className='Kollogoimg'></img>
            </div>


            <div className='card'>
                <div className="card-header">
                    <p>Player Details</p>
                    <div className="viewContainer">
                        <strong>ID:</strong>
                        <span>{_id}</span>
                        <br />
                        <br />
                        <strong>Name:</strong>
                        <span>{name}</span>
                        <br />
                        <br />
                        <strong>Age:</strong>
                        <span>{age}</span>
                        <br />
                        <br />
                        <strong>Position:</strong>
                        <span>{position}</span>
                        <br />
                        <br />
                        <strong>City:</strong>
                        <span>{city}</span>
                        <br />
                        <br />
                    </div>
                    <div className="buttonsContainer">
                        <button className="DelhiEdit" onClick={() => navigate(`/Kolkataaddplayer/${_id}`)}>Edit</button>
                        <button className="DelhiDelete" onClick={handleDelete}>Delete</button>
                        <Link to='/Kolkataplayers'>
                            <button className="DelhiBack">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Kolkataplayerview;
