import React from 'react'
import { Link } from 'react-router-dom';             // import the link for lnking the path of compenents
import './front.css';                                // import the css file
import myBackgroundImage from '../../images/background.webp';  // import the background image

// Make the function of front pages 
const Front = () => {
    const myStyle = {
        backgroundImage: `url(${myBackgroundImage})`,
        backgroundSize: 'cover',
        height: '100vh',

    };
    return (
        <div className='navbar'>
            <div className='navbarcontainer'>
                <img src='ipllogo.png' alt='' className='trophyimage' />
                <img src='poll.svg' alt='' className='poll' />
                <img src='choice.svg' alt='' className='choicepoll' />

            </div>
            <div style={myStyle} className='backgroundimage'>
                <div className='overplay'>
                    <h2 className='maintitle'>Indian Premier League</h2>
                    <p className='heading'>Indian Premier League are Biggest League in the World. And Every Domstic Player are get change to show their Talent in te League.
                        IPL is the most-watched Cricket league in the world. This is the official website of IPL that provides all the details of the tournament.</p>
                    <Link to='/teams'>
                        <button className='teamsbutton'>Teams</button>
                    </Link>
                </div>

                <div className='conatinerimg'>
                    <div className='image'>
                        <img src='samcurren.png' alt='' className='samimage'></img>
                    </div>
                    <div className='content'>
                        <h1>GET THE OFFICIAL IPL APP</h1>
                        <p>Get the latest scores on the go. Find the latest content, including match highlights, press conferences and recap all at your fingertips by downloading the official IPL app.</p>
                        <p>Available on both App store and Playstore.</p>
                        <p>Download Here For Free...</p>
                        <div className='applogo'>
                            <a href='https://play.google.com/store/apps/details?id=com.pulselive.bcci.android'>
                                <img src='playstore.png' alt='' className='playstore' />
                            </a>
                            <a href='https://apps.apple.com/in/app/ipl/id509837419'>
                                <img src='appstore.png' alt='' className='appstore' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='sponsorconatiner'>
                    <h3 className='titlesponsor'>TITLE SPONSOR</h3>
                    <a href='https://www.tata.com/'>
                        <img src='tata.png' alt='' className='tatalogo' />
                    </a>
                    <div className='sponsorship'>
                        <a href='https://www.dream11.com/'>
                            <img src='dream11.png' alt='' className='sponsorclass' />
                        </a>

                        <a href='https://upstox.com/'>
                            <img src='upstox.png' alt='' className='sponsorclass' />
                        </a>

                        <a href='https://www.visitsaudi.com/en'>
                            <img src='sudi.png' alt='' className='sponsorclass' />
                        </a>

                        <a href='https://cred.club/'>
                            <img src='cred.png' alt='' className='sponsorclass' />
                        </a>
                    </div>

                    <div className='sponsorship'>
                        <a href='https://www.rupay.co.in/'>
                            <img src='rupe.png' alt='' className='sponsorclass' />
                        </a>

                        <a href='https://www.herbalife.co.in/'>
                            <img src='harbal.png' alt='' className='sponsorclass' />
                        </a>

                        <a href='https://www.ceat.com/'>
                            <img src='ceat.webp' alt='' className='sponsorclass' />
                        </a>

                        <a href='https://paytm.com/'>
                            <img src='paytm.webp' alt='' className='sponsorclass' />
                        </a>
                    </div>

                    <h2 className='titlelive'>Live on </h2>
                    <div className='livesponsor'>
                        <a href='https://www.hotstar.com/in/home?ref=%2Fin'>
                            <img src='starsports.png' alt='' className='livestar' />
                        </a>

                        <a href='https://www.jiocinema.com/'>
                            <img src='jio.png' alt='' className='livestar' />
                        </a>
                    </div>
                </div>

            </div>
        </div>



    )
}

export default Front;
