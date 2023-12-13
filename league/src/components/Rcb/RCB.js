import React from 'react'
import './rcb.css';
import { Link } from 'react-router-dom';
import RcbBackgroundImage from '../../images/rcb.webp';

const RCB = () => {

  const myStyle = {
    backgroundImage: `url(${RcbBackgroundImage})`,

  };

  return (
    <>
      <nav className='Rcbnav'>
        <div>
          <img src="/R4.png" alt="" className="Rcblogoimg" />
        </div>
        <ul>
          <li>
            <Link to="/">
              <a href="#">Home</a>
            </Link>
          </li>

          <li>
            <Link to="/Rcbplayers">
              <a href="#">Players</a>
            </Link>
          </li>

          <li>
            <Link to="/Rcbwinning">
              <a href="#">Winning</a>
            </Link>
          </li>

          <li>
            <Link to="/Rcbpurplecaps">
              <a href="#">Purple Caps</a>
            </Link>
          </li>

          <li>
            <Link to="/Rcborangecaps">
              <a href="#">Orange Caps</a>
            </Link>
          </li>
        </ul>
      </nav>


      <div className='Rcbfleximg'>
        <div className='Rcbbackgroundimg' style={myStyle}>
        </div>
      </div>
      <h2 className='Studiumtitle'>RCB Studiums</h2>
      <div className='Rcbimageconatiner'>
        <div className='Rcbfirstwinner'>

          <div className='firstdiv'>
            <img src='cskground.jpg' alt='' className='Rcbfirstipl'></img>
            <p className='Rcbimgname'>ChinnaSwami</p>
          </div>
          <div>
            <img src='cskground2.jpg' alt='' className='Rcbfirstipl'></img>
            <p className='Rcbimgname'>Chapuk</p>
          </div>
          <div>
            <img src='cskground3.jpg' alt='' className='Rcbfirstipl'></img>
            <p className='Rcbimgname'>Whankhede</p>
          </div>
          <div>
            <img src='ground4.jpg' alt='' className='Rcbfirstipl'></img>
            <p className='Rcbimgname'>Lucknow</p>
          </div>
        </div>
      </div>

      <div className='Rcbmail'>
        <h2 className='Rcbmaillistemtitle'>Sponosers</h2>
        <span className='RcbmailDescription'> Sign up and we will send the best best deal with you</span>
        <div className='Rcbsponsored'>
          <a href='https://www.jio.com/'>
            <img src='reliance.jpg' alt='' className='Rcbspon'></img>
          </a>

          <a href='https://www.muthootfinance.com/'>
            <img src='Rcbmuthootfin.jpg' alt='' className='Rcbspon'></img>
          </a>

          <a href='https://www.jiocinema.com/'>
            <img src='jio.png' alt='' className='Rcbspon'></img>
          </a>

          <a href='https://rcb.com/'>
            <img src='boat.png' alt='' className='Rcbspon'></img>
          </a>
        </div>
      </div>
    </>
  )
}

export default RCB;
