import React from 'react'
import './delhi.css';
import DelhiBackgroundImage from '../../images/delhi.webp';
import { Link } from 'react-router-dom';

const Delhi = () => {

  const myStyle = {
    backgroundImage: `url(${DelhiBackgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh',
  };

  return (
    <>
      <nav className='Delhinav'>
        <div>
          <img src="/R4.png" alt="" className="csklogoimg" />
        </div>
        <ul>
          <li>
            <Link to="/">
              <a href="#">Home</a>
            </Link>
          </li>

          <li>
            <Link to="/delhiplayers">
              <a href="#">Players</a>
            </Link>
          </li>

          <li>
            <Link to="/delhiwinning">
              <a href="#">Winning</a>
            </Link>
          </li>

          <li>
            <Link to="/delhipurplecaps">
              <a href="#">Purple Caps</a>
            </Link>
          </li>

          <li>
            <Link to="/delhiorangecaps">
              <a href="#">Orange Caps</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className='Delhifleximg'>

        <div className='Delhibackgroundimg' style={myStyle}>
        </div>
      </div>
      <h2 className='Delhistduimtitle'>Delhi Studiums</h2>
      <div className='Delhiimageconatiner'>
        <div className='firstwinner'>

          <div className='firstdiv'>
            <img src='cskground.jpg' alt='' className='Delhifirstipl'></img>
            <p className='Delhiimgname'>ChinnaSwami</p>
          </div>
          <div>
            <img src='cskground2.jpg' alt='' className='Delhifirstipl'></img>
            <p className='Delhiimgname'>Chapuk</p>
          </div>
          <div>
            <img src='cskground3.jpg' alt='' className='Delhifirstipl'></img>
            <p className='Delhiimgname'>Whankhede</p>
          </div>
          <div>
            <img src='ground4.jpg' alt='' className='Delhifirstipl'></img>
            <p className='Delhiimgname'>Arunjetli</p>
          </div>
        </div>
      </div>

      <div className='Delhimail'>
        <h2 className='DelhisponsorTitle'>Sponosers</h2>
        <span className='DelhimailDescription'> Sign up and we will send the best best deal with you</span>
        <div className='Delhisponsored'>
          <a href='https://www.greenpanel.com/'>
            <img src='delhi2green.jpg' alt='' className='Delhispon'></img>
          </a>

          <a href='https://www.pernod-ricard.com/'>
            <img src='delhi3royal.jpg' alt='' className='Delhispon'></img>
          </a>

          <a href='https://in.jbl.com/'>
            <img src='delhi4jbl.png' alt='' className='Delhispon'></img>
          </a>
          
          <a href='https://www.jsw.in/'>
            <img src='Delhijsw.jpg' alt='' className='Delhispon'></img>
          </a>

        </div>
      </div>


    </>
  )
}

export default Delhi;
