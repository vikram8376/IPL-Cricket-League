import { useState, useEffect } from "react"; // import the useState and Useref from react
import React from "react";
import './players.css';              // import the css file 
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


// import the editform components



// Make the function Players
function Players() { 
    const [data, setdata] = useState([]);
    //The initial value of data is an empty array []
    //The setdata function is used to update the data state variable.

    useEffect(() => {
        getPlayers();
    }, []);
    // useEffect hook is called with an empty dependency array [] , which means it will run only once after the initial render.
    // useEffect, the getPlayers function is called to fetch the list of players.


    // function getPlayers that fetches the list of players from the server.
    // axios library to make an HTTP GET request to 
    // is stored in the data state variable using setdata(response.data)
    // It waits for the promise returned by axios.get() to resolve, which happens when the HTTP GET request is completed and the response is received.
    const getPlayers = async () => {
        const response = await axios.get('http://localhost:5000/teams/CSK1/players')
        if (response.status === 200) {
            setdata(response.data)
        }
    };

    // It takes an _id parameter, which represents the ID of the player to be deleted.
    // to delete the player with the specified _id.
    // and the getPlayers function is called again to update the player list.
    const handleDelete = async (_id) => {
        if (window.confirm("Are you sure you want to delete this player data?")) {
            try {
                const response = await axios.delete(`http://localhost:5000/teams/CSK1/players/${_id}`);
                if (response.status === 200) {
                    getPlayers();
                }
            } catch (error) {
                console.error(error.message);
            }
        }
    };
    // The navigate function is used to programmatically navigate to different pages in the application.
    const navigate = useNavigate();
    

    // This is a function handleEdit that is called when the user wants to edit a player.
    // It takes an _id parameter, which represents the ID of the player to be edited.
    // The navigate function is used to navigate to the /addplayer/${_id} route, 
    const handleEdit = (_id) => {
        navigate(`/addplayer/${_id}`);
    };



    // This is a function handleView that is called when the user wants to view the details of a player.
    // It takes an _id parameter, which represents the ID of the player to be viewed.
    // The navigate function is used to navigate to the /viewplayer/${_id} route, 
    const handleView = (_id) => {
        navigate(`/viewplayer/${_id}`);
    };


    return (
        <>
         
            <div className='navbarplayer'>
                <img src='/R4.png' alt='' className='Csklogoimg'></img>
            </div>

            <Link to='/addplayer'>
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
                                            <div className="playersbuttons">

                                                <button className="Edit" onClick={() => handleEdit(item._id)}>Edit</button>

                                                <button className="Delete" onClick={() => handleDelete(item._id)} type="button">Delete</button>

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


export default Players;