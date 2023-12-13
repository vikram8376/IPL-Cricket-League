import React from 'react';
import './mumbai.css';
import mumbaiBackgroundImage from '../../images/mum.webp';
import { Link } from 'react-router-dom';

const Mumbai = () => {

  const myStyle = {
    backgroundImage: `url(${mumbaiBackgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh',
  };

  return (
    <>
      <nav className='Mumbainav'>
        <div>
          <img src="/R4.png" alt="" className="Mumbailogoimg" />
        </div>
        <ul>
          <li>
            <Link to="/">
              <a href="#">Home</a>
            </Link>
          </li>

          <li>
            <Link to="/Mumbaiplayers">
              <a href="#">Players</a>
            </Link>
          </li>

          <li>
            <Link to="/Mumbaiwinning">
              <a href="#">Winning</a>
            </Link>
          </li>

          <li>
            <Link to="/Mumbaipurplecaps">
              <a href="#">Purple Caps</a>
            </Link>
          </li>

          <li>
            <Link to="/Mumbaiorangecaps">
              <a href="#">Orange Caps</a>
            </Link>
          </li>
        </ul>
      </nav>


      <div className='Mumbaifleximg'>

        <div className='Mumbaibackgroundimg' style={myStyle}>
        </div>
      </div>
      <h2 className='Mumbaititle'>Super kings Studiums</h2>
      <div className='Mumbaiimageconatiner'>
        <div className='Mumbaifirstwinner'>

          <div className='firstdiv'>
            <img src='cskground.jpg' alt='' className='Mumbaifirstipl'></img>
            <p className='Mumbaiimgname'>ChinnaSwami</p>
          </div>
          <div>
            <img src='cskground2.jpg' alt='' className='Mumbaifirstipl'></img>
            <p className='Mumbaiimgname'>Chapuk</p>
          </div>
          <div>
            <img src='cskground3.jpg' alt='' className='Mumbaifirstipl'></img>
            <p className='Mumbaiimgname'>Whankhede</p>
          </div>
          <div>
            <img src='ground4.jpg' alt='' className='Mumbaifirstipl'></img>
            <p className='Mumbaiimgname'>Lucknow</p>
          </div>
        </div>
      </div>

      <div className='Mumbaimail'>
        <h2 className='Mumbaimailtitle'>Sponosers</h2>
        <span className='MumbaimailDescription'> Sign up and we will send the best best deal with you</span>
        <div className='Mumbaisponsored'>
          <a href='https://www.samsung.com/'>
            <img src='spon1.webp' alt='' className='mumbaispon'></img>
          </a>

          <a href='https://www.dhl.com/'>
            <img src='spon2.png' alt='' className='mumbaispon'></img>
          </a>

          <a href='https://www.astralpipes.com/'>
            <img src='spon3.webp' alt='' className='mumbaispon'></img>
          </a>

          <a href='https://www.usha.com/'>
            <img src='spon4.jpg' alt='' className='mumbaispon'></img>
          </a>
        </div>
      </div>


    </>
  )
}

export default Mumbai;
