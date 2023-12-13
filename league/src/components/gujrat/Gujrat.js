import React from 'react'
import './gujrat.css';
import BackgroundImagegujrat from '../../images/guj.webp';
import { Link } from 'react-router-dom';

const Gujrat = () => {

  const myStyle = {
    backgroundImage: `url(${BackgroundImagegujrat})`,
    backgroundSize: 'cover',
    height: '100vh',
  };

  return (
    <>
      <nav className='Gujratnav'>
        <div>
          <img src="/R4.png" alt="" className="Gujlogoimg" />
        </div>
        <ul>
          <li>
            <Link to="/">
              <a href="#">Home</a>
            </Link>
          </li>

          <li>
            <Link to="/Gujratplayers">
              <a href="#">Players</a>
            </Link>
          </li>

          <li>
            <Link to="/Gujratwinning">
              <a href="#">Winning</a>
            </Link>
          </li>

          <li>
            <Link to="/Gujratpurplecaps">
              <a href="#">Purple Caps</a>
            </Link>
          </li>

          <li>
            <Link to="/Gujratorangecaps">
              <a href="#">Orange Caps</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className='Gujratfleximg'>

        <div className='Gujratbackgroundimg' style={myStyle}>
        </div>
      </div>
      <h2 className='GujratStdiumtitle'>Titans Studiums</h2>
      <div className='Gujratimageconatiner'>
        <div className='Gujratfirstwinner'>

          <div className='firstdiv'>
            <img src='cskground.jpg' alt='' className='Gujratfirstipl'></img>
            <p className='Gujratimgname'>ChinnaSwami</p>
          </div>
          <div>
            <img src='cskground2.jpg' alt='' className='Gujratfirstipl'></img>
            <p className='Gujratimgname'>Chapuk</p>
          </div>
          <div>
            <img src='cskground3.jpg' alt='' className='Gujratfirstipl'></img>
            <p className='Gujratimgname'>Whankhede</p>
          </div>
          <div>
            <img src='ground4.jpg' alt='' className='Gujratfirstipl'></img>
            <p className='Gujratimgname'>Ahamdabad</p>
          </div>
        </div>
      </div>

      <div className='Gujratmail'>
        <h2 className='Sponsortitle'>Sponosers</h2>
        <span className='SponDescription'> Sign up and we will send the best best deal with you</span>
        <div className='Gujratsponsored'>
          <a href='https://myfab11.com/'>
            <img src='myfab11.jpg' alt='' className='Gujratspo'></img>
          </a>

          <a href='https://www.bkt-tires.com/'>
            <img src='bkttyre.jpg' alt='' className='Gujratspo'></img>
          </a>

          <a href='https://www.atherenergy.com/'>
            <img src='ather.jpg' alt='' className='Gujratspo'></img>
          </a>
          
          <a href='https://www.jiocinema.com/'>
            <img src='jio.png' alt='' className='Gujratspo'></img>
          </a>

        </div>
      </div>


    </>
  )
}

export default Gujrat;
