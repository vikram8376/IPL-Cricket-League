import React from 'react'
import './channai.css';                                         // import the css file 
import cskBackgroundImage from '../../images/cskwin.webp';   // import the image for the background
import { Link } from 'react-router-dom';                       // import the link for set of route 

// Make the function team Chennai
const Channai = () => {

  const myStyle = {
    backgroundImage: `url(${cskBackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100vh"    // set the background image url from the image source

  };

  return (
    <>
      <nav>
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
            <Link to="/players">
              <a href="#">Players</a>
            </Link>
          </li>

          <li>
            <Link to="/cskwinning">
              <a href="#">Winning</a>
            </Link>
          </li>

          <li>
            <Link to="/cskpurplecaps">
              <a href="#">Purple Caps</a>
            </Link>
          </li>

          <li>
            <Link to="/cskorangecaps">
              <a href="#">Orange Caps</a>
            </Link>
          </li>
        </ul>
      </nav>




      <div className='fleximg'>
        <div className='backgroundimg' style={myStyle}>
        </div>
      </div>
      <h2 className='title'>Super kings Studiums</h2>
      <div className='imageconatiner'>
        <div className='firstwinner'>

          <div className='firstdiv'>
            <img src='cskground.jpg' alt='' className='firstipl'></img>
            <p className='imgname'>ChinnaSwami</p>
          </div>
          <div>
            <img src='cskground2.jpg' alt='' className='firstipl'></img>
            <p className='imgname'>Chapuk</p>
          </div>
          <div>
            <img src='cskground3.jpg' alt='' className='firstipl'></img>
            <p className='imgname'>Whankhede</p>
          </div>
          <div>
            <img src='ground4.jpg' alt='' className='firstipl'></img>
            <p className='imgname'>Lucknow</p>
          </div>
        </div>
      </div>

      <div className='mail'>
        <h2 className='maillistemtitle'>Sponosers</h2>
        <span className='mailDescription'> Sign up and we will send the best best deal with you</span>
        <div className='sponsored'>
          <a href='https://www.myntra.com/'>
            <img src='mantralogo.png' alt='' className='mantralogo'></img>
          </a>

          <a href='https://eurogriptyresph.com/'>
            <img src='eurogrip.jpg' alt='' className='mantralogo'></img>
          </a>

          <a href='https://www.gulfoilindia.com/'>
            <img src='gulf.jpg' alt='' className='mantralogo'></img>
          </a>

          <a href='https://www.ambujacement.com/'>
            <img src='cement2.webp' alt='' className='mantralogo'></img>
          </a>
        </div>
      </div>
    </>
  )
}

export default Channai;
