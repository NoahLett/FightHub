import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Onboarding.css';

const Onboarding = () => {


  const handleChange = () => {
    console.log('Clicked');
  }

  const handleSubmit = () => {
    console.log('Clicked');
  }

  return (
    <>
      <Navbar minimal={true} showModal={false} setShowModal={() => {}} />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor='first_name'>First Name</label>
            <input 
              id='first_name'
              name='first_name'
              placeholder='First Name'
              required
              value={''}
              type='text'
              onChange={handleChange}
            />
            <label>Birthday</label>
            <div className='input-container'>
              <input 
                id='dob_day'
                name='dob_day'
                placeholder='DD'
                required
                value={''}
                type='number'
                onChange={handleChange}
              />
              <input 
                id='dob_month'
                name='dob_month'
                placeholder='MM'
                required
                value={''}
                type='number'
                onChange={handleChange}
              />
              <input 
                id='dob_year'
                name='dob_year'
                placeholder='YYYY'
                required
                value={''}
                type='number'
                onChange={handleChange}
              />
            </div>
            <label>Gender</label>
            <div className='input-container'>
              <input 
                id='male-gender'
                name='male-gender'
                value='male'
                type='radio'
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor='male-gender'>Male</label>
              <input 
                id='female-gender'
                name='female-gender'
                value='female'
                type='radio'
                onChange={handleChange}
                checked={false}
              />
              <label htmlFor='female-gender'>Female</label>
            </div>

            <label htmlFor='show_gender'>Show Gender on My Profile</label>
            <input 
              id='show_gender'
              name='show_gender'
              type='checkbox'
              onChange={handleChange}
              checked={false}
            />

            <label htmlFor='about'>About Me</label>
            <input
              id='about'
              name='about'
              type='text'
              placeholder='I&apos;m a lean, mean fighting machine...'
              value={''}
              required
              onChange={handleChange}
            />

            <input type="submit" />
          </section>

          <section>
            <label htmlFor='url'>Profile Picture</label>
            <input 
              type="url"
              name='url'
              id='url'
              onChange={handleChange}
              required 
            />
            <div className="photo-container"></div>
          </section>
        </form>
      </div>
    </>
  )
}

export default Onboarding