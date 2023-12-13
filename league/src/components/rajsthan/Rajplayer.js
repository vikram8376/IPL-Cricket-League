import React from 'react'
import { useEffect, useState } from "react";
import './rajplayer.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Rajplayer() {
     // Set the default value for the field name and description fields 
     const [data, setdata] = useState([]);
   
     useEffect(() => {
         getPlayers();
       }, []);
 
     const getPlayers = async () => {
         const response = await axios.get('http://localhost:5000/teams/RR5/players')
         if (response.status === 200) {
             setdata(response.data)
         }
     };
 
 
     const handleDelete = async (_id) => {
         if (window.confirm("Are you sure you want to delete this player data?")) {
             try {
                 const response = await axios.delete(`http://localhost:5000/teams/RR5/players/${_id}`);
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
       navigate(`/Rajaddplayer/${_id}`);
     };
 
     const handleView = (_id) => {
         navigate(`/Rajviewplayer/${_id}`);
       };


    return (
        <>
            <div className='navbarRajplayer'>
                    <img src='/R4.png' alt='' className='Rajlogoimg'></img>
            </div>

            <Link to='/Rajaddplayer'>
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
                                            <div className="Rajplayersbuttons">
                                                
                                                <button className="RajEdit" onClick={() => handleEdit(item._id)}>Edit</button>
                                                
                                                <button className="RajDelete" onClick={() => handleDelete(item._id)} type="button">Delete</button>

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


export default Rajplayer;
