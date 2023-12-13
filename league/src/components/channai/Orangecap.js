import React from 'react'
import './orangecap.css';  // import the css file 


// Make the function of Orange caps 
const Orangecap = () => {
  return (
    <>
     <div className='navbarplayer'>
                <img src='/R4.png' alt='' className='Csklogoimg'></img>
            </div>
      <div className='orangeflex'>
        <div className='cskorangeconatiner'>
          <img src='orangecsk1.jpg' alt='' className='orange1' />
          <p>Name  : Matthew Hayden</p>
          <p>Times : 2009</p>
          <p>Total Runs: 572</p>
          <p>Team:    Chennai Super Kings</p>
          <p>Strike Rate: 144.81</p>
          <p>Average: 52</p>
          <p>Country: Australia</p>
          <p>Highest Score: 89</p>
        </div>

        <div className='cskorangeconatiner'>
          <img src='orangecsk2.webp' alt='' className='orange1' />
          <p>Name  : Michael Hussey</p>
          <p>Times : 2013</p>
          <p>Total Runs: 733</p>
          <p>Team:    Chennai Super Kings</p>
          <p>Strike Rate: 129.5</p>
          <p>Average: 52.35</p>
          <p>Country: Australia</p>
          <p>Highest Score: 95</p>
        </div>

        <div className='cskorangeconatiner'>
          <img src='orangecsk3.jpg' alt='' className='orange1' />
          <p>Name  :Ruturaj Gaikwad</p>
          <p>Times : 2021</p>
          <p>Total Runs: 635</p>
          <p>Team:    Chennai Super Kings</p>
          <p>Strike Rate: 136.26</p>
          <p>Average: 45.35</p>
          <p>Country: India</p>
          <p>Highest Score: 101*</p>
        </div>
      </div>
    </>
  )
}

export default Orangecap;
