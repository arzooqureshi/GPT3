import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'


const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='Home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Join us on a journey where the limits of imagination are pushed, and ideas transform into tangible marvels. Our website is not just a destination; it's a launchpad for the extraordinary, where you can build something amazing with the power of GPT-3 OpenAI. Elevate your projects, inspire your audience, and redefine what's possible. Let's embark on this exciting voyage together and create a future where innovation knows no bounds!</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people' />
          <p >1,600 people requested access a visit in last 24 hours</p>
        </div>
        
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai'/>
      </div>

      </div>
  )
}

export default Header
