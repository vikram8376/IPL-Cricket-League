import React from 'react'
import './punjab.css';
import PunjabBackgroundImage from '../../images/pun.webp';
import { Link } from 'react-router-dom';

const Punjab = () => {

  const myStyle = {
    backgroundImage: `url(${PunjabBackgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh',
  };

  return (
    <>
     
      <nav className='Punjabnav'>
        <div>
          <img src="/R4.png" alt="" className="Punjablogoimg" />
        </div>
        <ul>
          <li>
            <Link to="/">
              <a href="#">Home</a>
            </Link>
          </li>

          <li>
            <Link to="/Punjabplayers">
              <a href="#">Players</a>
            </Link>
          </li>

          <li>
            <Link to="/punjabwinning">
              <a href="#">Winning</a>
            </Link>
          </li>

          <li>
            <Link to="/punjabpurplecaps">
              <a href="#">Purple Caps</a>
            </Link>
          </li>

          <li>
            <Link to="/punjaborangecaps">
              <a href="#">Orange Caps</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className='Punjabfleximg'>


        <div className='Punjabbackgroundimg' style={myStyle}>
        </div>
      </div>
      <h2 className='Punjabtitle'>Punjab kings Studiums</h2>
      <div className='Punjabimageconatiner'>
        <div className='Punjabfirstwinner'>

          <div className='firstdiv'>
            <img src='cskground.jpg' alt='' className='Punjabfirstipl'></img>
            <p className='Punjabimgname'>ChinnaSwami</p>
          </div>
          <div>
            <img src='cskground2.jpg' alt='' className='Punjabfirstipl'></img>
            <p className='Punjabimgname'>Chapuk</p>
          </div>
          <div>
            <img src='cskground3.jpg' alt='' className='Punjabfirstipl'></img>
            <p className='Punjabimgname'>Whankhede</p>
          </div>
          <div>
            <img src='ground4.jpg' alt='' className='Punjabfirstipl'></img>
            <p className='Punjabimgname'>Punjab</p>
          </div>
        </div>
      </div>

      <div className='Punjabmail'>
        <h2 className='Punjabmailltitle'>Sponosers</h2>
        <span className='PunjabmailDescription'> Sign up and we will send the best best deal with you</span>
        <div className='Punjabsponsored'>
          <a href='https://ebixcash.com/'>
            <img src='pun1.png' alt='' className='punjabspon'></img>
          </a>

          <a href='https://www.lotusherbals.com/'>
            <img src='pun2.jpg' alt='' className='punjabspon'></img>
          </a>

          <a href='https://www.ebodycare.in/'>
            <img src='pun3.jpg' alt='' className='punjabspon'></img>
          </a>

          <a href='https://www.coca-cola.com/'>
            <img src='pun4.jpg' alt='' className='punjabspon'></img>
          </a>
        </div>
      </div>
    </>
  )
}

export default Punjab;
