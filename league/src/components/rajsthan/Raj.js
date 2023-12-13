import React from 'react'
import './raj.css';
import RajBackgroundImage from '../../images/raj2.webp';
import { Link } from 'react-router-dom';

const Raj = () => {

  const myStyle = {
    backgroundImage: `url(${RajBackgroundImage})`,
   
  };

  return (
    <>
      <nav className='Rajnav'>
        <div>
          <img src="/R4.png" alt="" className="Rajlogoimg" />
        </div>
        <ul>
          <li>
            <Link to="/">
              <a href="#">Home</a>
            </Link>
          </li>

          <li>
            <Link to="/Rajplayers">
              <a href="#">Players</a>
            </Link>
          </li>

          <li>
            <Link to="/Rajwinning">
              <a href="#">Winning</a>
            </Link>
          </li>

          <li>
            <Link to="/Rajpurplecaps">
              <a href="#">Purple Caps</a>
            </Link>
          </li>

          <li>
            <Link to="/Rajorangecaps">
              <a href="#">Orange Caps</a>
            </Link>
          </li>
        </ul>
      </nav>


      <div className='Rajfleximg'>
        <div className='Rajbackgroundimg' style={myStyle}>
        </div>
      </div>
      <h2 className='RajStidumtitle'>Rajsthan Studiums</h2>
      <div className='Rajimageconatiner'>
        <div className='Rajfirstwinner'>

          <div className='firstdiv'>
            <img src='cskground.jpg' alt='' className='Rajfirstipl'></img>
            <p className='Rajimgname'>ChinnaSwami</p>
          </div>
          <div>
            <img src='cskground2.jpg' alt='' className='Rajfirstipl'></img>
            <p className='Rajimgname'>Chapuk</p>
          </div>
          <div>
            <img src='cskground3.jpg' alt='' className='Rajfirstipl'></img>
            <p className='Rajimgname'>Whankhede</p>
          </div>
          <div>
            <img src='ground4.jpg' alt='' className='Rajfirstipl'></img>
            <p className='Rajimgname'>Jaipur</p>
          </div>
        </div>
      </div>

      <div className='Rajmail'>
        <h2 className='Rajmaillistemtitle'>Sponosers</h2>
        <span className='RajmailDescription'> Sign up and we will send the best best deal with you</span>
        <div className='Rajsponsored'>
          <a href='https://www.dollarglobal.in/'>
            <img src='Rajdollor.jpeg' alt='' className='Rajspon'></img>
          </a>

          <a href='https://www.bkt-tires.com/'>
            <img src='rajbkt.jpg' alt='' className='Rajspon'></img>
          </a>

          <a href='https://www.luminousindia.com/'>
            <img src='rajluminous.jpg' alt='' className='Rajspon'></img>
          </a>

          <a href='https://www.jiocinema.com/'>
            <img src='jio.png' alt='' className='Rajspon'></img>
          </a>
        </div>
      </div>


    </>
  )
}

export default Raj;
