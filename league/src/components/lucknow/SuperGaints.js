import React from 'react';
import './lucknow.css';
import LuckBackgroundImage from '../../images/luck2.webp';
import { Link } from 'react-router-dom';

const SuperGaints = () => {

    const myStyle = {
        backgroundImage: `url(${LuckBackgroundImage})`,
        backgroundSize: 'cover',
        height: '100vh',
    };

    return (
        <>

            <nav className='Lucknav'>
                <div>
                    <img src="/R4.png" alt="" className="Lucklogoimg" />
                </div>
                <ul>
                    <li>
                        <Link to="/">
                            <a href="#">Home</a>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Luckplayers">
                            <a href="#">Players</a>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Luckwinning">
                            <a href="#">Winning</a>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Luckpurplecaps">
                            <a href="#">Purple Caps</a>
                        </Link>
                    </li>

                    <li>
                        <Link to="/Luckorangecaps">
                            <a href="#">Orange Caps</a>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className='Luckfleximg'>


                <div className='Luckbackgroundimg' style={myStyle}>
                </div>
            </div>
            <h2 className='Lucktitle'>Super kings Studiums</h2>
            <div className='Luckimageconatiner'>
                <div className='Luckfirstwinner'>

                    <div className='firstdiv'>
                        <img src='cskground.jpg' alt='' className='Luckfirstipl'></img>
                        <p className='Luckimgname'>ChinnaSwami</p>
                    </div>
                    <div>
                        <img src='cskground2.jpg' alt='' className='Luckfirstipl'></img>
                        <p className='Luckimgname'>Chapuk</p>
                    </div>
                    <div>
                        <img src='cskground3.jpg' alt='' className='Luckfirstipl'></img>
                        <p className='Luckimgname'>Whankhede</p>
                    </div>
                    <div>
                        <img src='ground4.jpg' alt='' className='Luckfirstipl'></img>
                        <p className='Luckimgname'>Lucknow</p>
                    </div>
                </div>
            </div>

            <div className='Luckmail'>
                <h2 className='Luckmailtitle'>Sponosers</h2>
                <span className='LuckmailDescription'> Sign up and we will send the best best deal with you</span>
                <div className='Lucksponsored'>
                    <a href='https://www.my11circle.com/'>
                        <img src='luck1.jpg' alt='' className='Luckspon'></img>
                    </a>

                    <a href='https://www.greenply.com/'>
                        <img src='luck2.jpg' alt='' className='Luckspon'></img>
                    </a>

                    <a href='https://www.tooyumm.com/'>
                        <img src='luck3.jpg' alt='' className='Luckspon'></img>
                    </a>

                    <a href='https://www.jiocinema.com/'>
                        <img src='jio.png' alt='' className='Luckspon'></img>
                    </a>

                </div>
            </div>


        </>
    )
}

export default SuperGaints;
