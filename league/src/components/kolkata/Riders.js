import React from 'react'
import KolBackgroundImage from '../../images/kol.webp';
import { Link } from 'react-router-dom';
import './kolkata.css';

const Riders = () => {

  const myStyle = {
    backgroundImage: `url(${KolBackgroundImage})`,
    backgroundSize: 'cover',
    height: '100vh',
  };

  return (
    <>
      <nav className='Kolkatanav'>
        <div>
          <img src="/R4.png" alt="" className="Kollogoimg" />
        </div>
        <ul>
          <li>
            <Link to="/">
              <a href="#">Home</a>
            </Link>
          </li>

          <li>
            <Link to="/Kolkataplayers">
              <a href="#">Players</a>
            </Link>
          </li>

          <li>
            <Link to="/Kolkatawinning">
              <a href="#">Winning</a>
            </Link>
          </li>

          <li>
            <Link to="/kolkatapurplecaps">
              <a href="#">Purple Caps</a>
            </Link>
          </li>

          <li>
            <Link to="/kolkataorangecaps">
              <a href="#">Orange Caps</a>
            </Link>
          </li>
        </ul>
      </nav>


      <div className='Kolkatafleximg'>


        <div className='Kolkatabackgroundimg' style={myStyle}>
        </div>
      </div>
      <h2 className='Kolkatatitle'>Knight Riders Studiums</h2>
      <div className='Kolimageconatiner'>
        <div className='Kolfirstwinner'>

          <div className='firstdiv'>
            <img src='cskground.jpg' alt='' className='Kolfirstipl'></img>
            <p className='Kolimgname'>ChinnaSwami</p>
          </div>
          <div>
            <img src='cskground2.jpg' alt='' className='Kolfirstipl'></img>
            <p className='Kolimgname'>Chapuk</p>
          </div>
          <div>
            <img src='cskground3.jpg' alt='' className='Kolfirstipl'></img>
            <p className='Kolimgname'>Whankhede</p>
          </div>
          <div>
            <img src='ground4.jpg' alt='' className='Kolfirstipl'></img>
            <p className='Kolimgname'>Lucknow</p>
          </div>
        </div>
      </div>

      <div className='Kolmail'>
        <h2 className='Kolmailtitle'>Sponosers</h2>
        <span className='KolDescription'> Sign up and we will send the best best deal with you</span>
        <div className='Kolsponsored'>
          <a href='https://myfab11.com/'>
            <img src='myfab11.jpg' alt='' className='Kolspon'></img>
          </a>

          <a href='https://www.luxinnerwear.com/'>
            <img src='luxkozi.jpg' alt='' className='Kolspon'></img>
          </a>

          <a href='https://www.acko.com/'>
            <img src='acko.png' alt='' className='Kolspon'></img>
          </a>
          
          <a href='https://groww.in/'>
            <img src='money.jpg' alt='' className='Kolspon'></img>
          </a>
        </div>
      </div>


    </>
  )
}

export default Riders
