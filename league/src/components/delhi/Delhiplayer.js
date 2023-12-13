import React from 'react';
import { useState, useEffect } from "react";
import './delhiplayer.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Delhiplayer() {
    const [data, setdata] = useState([]);

    useEffect(() => {
        getPlayers();
    }, []);

    const getPlayers = async () => {
        const response = await axios.get('http://localhost:5000/teams/DC9/players')
        if (response.status === 200) {
            setdata(response.data)
        }
    };


    const handleDelete = async (_id) => {
        if (window.confirm("Are you sure you want to delete this player data?")) {
            try {
                const response = await axios.delete(`http://localhost:5000/teams/DC9/players/${_id}`);
                if (response.status === 200) {
                    console.log(response.data);
                    getPlayers();
                }
            } catch (error) {
                console.error(error.message);
            }
        }
    };

    const navigate = useNavigate();

    const handleEdit = (_id) => {
        navigate(`/Delhiaddplayer/${_id}`);
    };

    const handleView = (_id) => {
        navigate(`/Delhiviewplayer/${_id}`);
    };

    return (
        <>
            <div className='Delhinavbarplayer'>
                    <img src='/R4.png' alt='' className='Delhilogoimg'></img>
            </div>

            <Link to='/Delhiaddplayer'>
                <button className="addbutton" type="submit">Add Player</button>
            </Link>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Roll</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.position}</td>
                                        <td>{item.city}</td>
                                        <td>
                                            <div className="Delhiplayersbuttons">

                                                <button className="DelhiEdit" onClick={() => handleEdit(item._id)}>Edit</button>

                                                <button className="DelhiDelete" onClick={() => handleDelete(item._id)} type="button">Delete</button>

                                                <button className="PlayerView" onClick={() => handleView(item._id)}>View</button>

                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </>
    );

};


export default Delhiplayer;
