import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Onboarding.css';

const Onboarding = () => {

  const [formData, setFormData] = useState({
    first_name: '',
    dob_day: '',
    dob_month: '',
    dob_year: '',
    gender: 'male',
    trained: false,
    email: '',
    url: '',
    about: '',
    matches: []
  })

  const handleChange = e => {
    let value = e.target.value;
    if (value === 'true') {
      value = true;
    }
    if (value === 'false') {
      value = false;
    }
    if (e.target.name === 'dob_year') {
      value = e.target.value.slice(0, 4);
    } else if (e.target.name === 'dob_day' || e.target.name === 'dob_month') {
      value = e.target.value.slice(0, 2);
    }
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    console.log('Clicked');
  }

  return (
    <>
      <div className="onboarding">
        <h2 className='onboarding-title'>CREATE ACCOUNT</h2>
        <form className='onboarding-form' onSubmit={handleSubmit}>
          <div className='left-side'>
            <label htmlFor='first_name'>First Name</label>
            <input 
              id='first_name'
              name='first_name'
              placeholder='First Name'
              required
              value={formData.first_name}
              type='text'
              onChange={handleChange}
            />
            <label>Birthday</label>
            <div className='input-container'>
              <input 
                  id='dob_month'
                  name='dob_month'
                  placeholder='MM'
                  required
                  value={formData.dob_month}
                  type='number'
                  maxLength='2'
                  onChange={handleChange}
                  className='dob-input'
                />
                <input 
                  id='dob_day'
                  name='dob_day'
                  placeholder='DD'
                  required
                  value={formData.dob_day}
                  type='number'
                  maxLength='2'
                  onChange={handleChange}
                  className='dob-input'
                />
                <input 
                  id='dob_year'
                  name='dob_year'
                  placeholder='YYYY'
                  required
                  value={formData.dob_year}
                  type='number'
                  maxLength='4'
                  onChange={handleChange}
                  className='dob-input'
                />
            </div>
            <label>Gender</label>
            <div className='input-container'>
              <input 
                id='male-gender'
                name='gender'
                value='male'
                type='radio'
                onChange={handleChange}
                checked={formData.gender === 'male'}
              />
              <label className='gender-label' htmlFor='male-gender'>Male</label>
              <input 
                id='female-gender'
                name='gender'
                value='female'
                type='radio'
                onChange={handleChange}
                checked={formData.gender === 'female'}
              />
              <label className='gender-label' htmlFor='female-gender'>Female</label>
            </div>

            <label>Are you trained?</label>
            <div className='input-container'>
            <input 
                id='trained-yes'
                name='trained'
                value={true}
                type='radio'
                onChange={handleChange}
                checked={formData.trained == true}
              />
              <label className='boolean-label' htmlFor='trained-yes'>Yes</label>
              <input 
                id='trained-no'
                name='trained'
                value={false}
                type='radio'
                onChange={handleChange}
                checked={formData.trained == false}
              />
              <label className='boolean-label' htmlFor='trained-no'>No</label>
            </div>

            <label htmlFor='about'>About Me</label>
            <input
              id='about'
              name='about'
              type='text'
              placeholder='i.e.: Grew up as a boxer...'
              value={formData.about}
              required
              onChange={handleChange}
            />

            <input className='create-account-button' type="submit" />
          </div>

          <div className='right-side'>
            <label htmlFor='url'>Profile Picture</label>
            <input 
              type="url"
              name='url'
              id='url'
              onChange={handleChange}
              required 
            />
            { formData.url !== '' &&
              <div className="photo-container">
                <img className='profile-image' src={formData.url} alt="Profile Pic" />
              </div>
            }
          </div>
        </form>
      </div>
    </>
  )
}

export default Onboarding