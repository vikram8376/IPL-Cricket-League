import React from 'react';
import './hydrabad.css';
import SunBackgroundImage from '../../images/sun.webp';
import { Link } from 'react-router-dom';

const Hydrabad = () => {

  const myStyle = {
    backgroundImage: `url(${SunBackgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh',
  };
  return (
    <>
      <nav className='Hydrabadnav'>
        <div>
          <img src="/R4.png" alt="" className="Hydrabadlogoimg" />
        </div>
        <ul>
          <li>
            <Link to="/">
              <a href="#">Home</a>
            </Link>
          </li>

          <li>
            <Link to="/Sunrisesplayers">
              <a href="#">Players</a>
            </Link>
          </li>

          <li>
            <Link to="/Sunriseswinning">
              <a href="#">Winning</a>
            </Link>
          </li>

          <li>
            <Link to="/Sunrisespurplecaps">
              <a href="#">Purple Caps</a>
            </Link>
          </li>

          <li>
            <Link to="/Sunrisesorangecaps">
              <a href="#">Orange Caps</a>
            </Link>
          </li>
        </ul>
      </nav>


      <div className='Sunfleximg'>


        <div className='Sunbackgroundimg' style={myStyle}>
        </div>
      </div>
      <h2 className='Suntitle'>Sunrises Studiums</h2>
      <div className='Sunimageconatiner'>
        <div className='Sunfirstwinner'>

          <div className='firstdiv'>
            <img src='cskground.jpg' alt='' className='Sunfirstipl'></img>
            <p className='Sunimgname'>ChinnaSwami</p>
          </div>
          <div>
            <img src='cskground2.jpg' alt='' className='Sunfirstipl'></img>
            <p className='Sunimgname'>Chapuk</p>
          </div>
          <div>
            <img src='cskground3.jpg' alt='' className='Sunfirstipl'></img>
            <p className='Sunimgname'>Whankhede</p>
          </div>
          <div>
            <img src='ground4.jpg' alt='' className='Sunfirstipl'></img>
            <p className='Sunimgname'>Hydrabad</p>
          </div>
        </div>
      </div>

      <div className='Sunmail'>
        <h2 className='Sunmailemtitle'>Sponosers</h2>
        <span className='SunmailDescription'> Sign up and we will send the best best deal with you</span>
        <div className='Sunsponsored'>
          <a href='https://www.tcl.com/in/en'>
            <img src='tcl.jpg' alt='' className='Sunspon'></img>
          </a>

          <a href='https://www.cars24.com/'>
            <img src='car24.jpg' alt='' className='Sunspon'></img>
          </a>

          <a href='https://www.mineralfusion.com/'>
            <img src='mineral.jpg' alt='' className='Sunspon'></img>
          </a>

          <a href='https://www.dream11.com/'>
            <img src='dream.jpg' alt='' className='Sunspon'></img>
          </a>
        </div>
      </div>


    </>
  )
}

export default Hydrabad
