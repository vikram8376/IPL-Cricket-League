import React from 'react'
import './center.css';                      // import the css file 
import { Link } from 'react-router-dom';    // import the link for use of routing settings



// Make the function of center page 
const Centerpage = () => {


  return (
    <>
      <div className='navbar'>
        <div className='navbarcontainer'>
          <img src='ipllogo.png' alt='' className='trophyimage'/>
          <img src='poll.svg' alt='' className='poll'/>
          <img src='choice.svg' alt='' className='choicepoll'/>
        </div>
      </div>
      <div className='menuConatiner'>
        <div className='logoconatiner'>
          <div className='alllogo'>
            <div>
              <img src='Csk.jpg' alt='' className='imgclass'></img>
              <Link to='/channai'>
                <button className='namesbutton'>Chennai super kings</button>
              </Link>
            </div>
            <div >
              <img src='RCb.jpg' alt='' className='imgclass'></img>
              <Link to='/Rcb'>
                <button className='namesbutton'>R C B</button>
              </Link>
            </div>
            <div >
              <img src='raj.jpg' alt='' className='imgclass'></img>
              <Link to='/Rajsthan'>
                <button className='namesbutton'>Rajsthan</button>
              </Link>
            </div>
            <div>
              <img src='lknow.jpg' alt='' className='imgclass'></img>
              <Link to='/Lucknow'>
                <button className='namesbutton'>Lucknow SuperGaints</button>
              </Link>
            </div>
          </div>



          <div className='alllogo'>
            <div>
              <img src='delhi.jpg' alt='' className='imgclass'></img>
              <Link to='/delhi'>
                <button className='namesbutton'>Delhi Capital</button>
              </Link>
            </div>
            <div>
              <img src='kolkata.jpg' alt='' className='imgclass'></img>
              <Link to='/kolkata'>
                <button className='namesbutton'>Kolkata Knight Riders</button>
              </Link>
            </div>
            <div>
              <img src='punjab.jpg' alt='' className='imgclass'></img>
              <Link to='/Punjab'>
                <button className='namesbutton'>Punjab Kings</button>
              </Link>
            </div>
            <div >
              <img src='hydrabad.jpg' alt='' className='imgclass'></img>
              <Link to="/Hydrabad">
                <button className='namesbutton'>Sunrises hydrabad</button>
              </Link>
            </div>
          </div>

          <div className='alllogolast'>
            <div >
              <img src='mumbai.jpg' alt='' className='imgclass'></img>
              <Link to='/mumbai'>
                <button className='namesbutton'>Mumbai Indian</button>
              </Link>
            </div>
            <div>
              <img src='gujrat.jpg' alt='' className='imgclass'></img>
              <Link to='/Gujrat'>
                <button className='namesbutton'>Gujrat Titans</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Centerpage;






