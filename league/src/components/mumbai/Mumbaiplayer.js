import React from 'react'
import './mumbaiplayer.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';


function Mumbaiplayer() {
    // Set the default value for the field name and description fields 
    const [data, setdata] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getPlayers();
    }, []);

    const getPlayers = async () => {
        const response = await axios.get('http://localhost:5000/teams/MI3/players')
        if (response.status === 200) {
            setdata(response.data)
        }
    };


    const handleDelete = async (_id) => {
        if (window.confirm("Are you sure you want to delete this player data?")) {
            try {
                const response = await axios.delete(`http://localhost:5000/teams/MI3/players/${_id}`);
                if (response.status === 200) {
                    toast.success(response.data);
                    getPlayers();
                }
        
            } catch (error) {
                toast.error(error.message);
            }
        }
    };



    const handleEdit = (_id) => {
        navigate(`/mumbaiaaddplayer/${_id}`);
    };

    const handleView = (_id) => {
        navigate(`/mumbaiviewplayer/${_id}`);
    };


    return (
        <>
            <div className='Mumbainavbarplayer'>
                    <img src='/R4.png' alt='' className='Mumbailogoimg'></img>
            </div>

            <Link to='/mumbaiaaddplayer'>
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
                                            <div className="Mumbaiplayersbuttons">

                                                <button className="MumbaiEdit" onClick={() => handleEdit(item._id)}>Edit</button>

                                                <button className="MumbaiDelete" onClick={() => handleDelete(item._id)} type="button">Delete</button>

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

export default Mumbaiplayer;
