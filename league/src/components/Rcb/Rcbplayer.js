import React from 'react';
import { useEffect, useState } from "react";
import './rcbplayer.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Rcbplayer() {
    const [data, setdata] = useState([]);
   
     useEffect(() => {
         getPlayers();
       }, []);
 
     const getPlayers = async () => {
         const response = await axios.get('http://localhost:5000/teams/RCB6/players')
         if (response.status === 200) {
             setdata(response.data)
         }
     };
 
 
     const handleDelete = async (_id) => {
         if (window.confirm("Are you sure you want to delete this player data?")) {
             try {
                 const response = await axios.delete(`http://localhost:5000/teams/RCB6/players/${_id}`);
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
       navigate(`/Rcbaaddplayer/${_id}`);
     };
 
     const handleView = (_id) => {
         navigate(`/Rcbviewplayer/${_id}`);
       };

    return (
        <>
            <div className='Rcbnavbarplayer'>
                    <img src='/R4.png' alt='' className='Rcblogoimg'></img>
            </div>

            <Link to='/Rcbaaddplayer'>
                <button className="addbutton" type="submit">Add Player</button>
            </Link>

            <div >
                <table >
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
                                            <div className="Rcbplayersbuttons">
                                                
                                                <button className="RcbEdit" onClick={() => handleEdit(item._id)}>Edit</button>
                                                
                                                <button className="RcbDelete" onClick={() => handleDelete(item._id)} type="button">Delete</button>

                                                <button className="RcbPlayerView" onClick={() => handleView(item._id)}>View</button>

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


export default Rcbplayer;
