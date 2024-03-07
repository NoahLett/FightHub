import TinderCard from 'react-tinder-card';
import Navbar from '../../components/Navbar/Navbar'
import ChatContainer from '../../components/ChatContainer/ChatContainer';
import { useState } from 'react';
import './Dashboard.css';

const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://miro.medium.com/v2/resize:fit:1358/0*xEr4gau0yB5D2U53',
    trained: true,
    arts: ['Muay Thai', 'BJJ'],
    age: 21
  },
  {
    name: 'Erlich Bachman',
    url: 'https://miro.medium.com/v2/resize:fit:1358/0*xEr4gau0yB5D2U53',
    trained: true,
    arts: ['Muay Thai', 'BJJ'],
    age: 30
  },
  {
    name: 'Monica Hall',
    url: 'https://miro.medium.com/v2/resize:fit:1358/0*xEr4gau0yB5D2U53',
    trained: false,
    arts: [],
    age: 24
  },
  {
    name: 'Jared Dunn',
    url: 'https://miro.medium.com/v2/resize:fit:1358/0*xEr4gau0yB5D2U53',
    trained: true,
    arts: ['Karate', 'BJJ'],
    age: 27
  },
  {
    name: 'Dinesh Chugtai',
    url: '/images/fighter-1.jpeg',
    trained: true,
    arts: ['Muay Thai', 'BJJ'],
    age: 35
  }
]

const Dashboard = () => {

  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <>
      <Navbar minimal={true} showModal={false} setShowModal={() => {}} />
        <div className="dashboard">
          <ChatContainer />
          <div className='swiper-container'>
            <div className='card-container'>
            {characters.map((character) =>
              <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                  <div className='info-section'>
                    <div className='info-section-header'>
                      <h3 className='fighter-name'>{character.name}</h3>
                      <span className='fighter-age'>{character.age}</span>
                    </div>
                    {character.trained &&
                      <div className='subinfo-section'>
                        <span className='trained-status'>Trained</span>
                        <div className='arts-container'>
                          {character.arts.map((art) => 
                            <span className='art'>{art}</span>
                          )}
                        </div>
                      </div>
                    }
                  </div>
                  <div className='card-overlay'></div>
                </div>
              </TinderCard>
            )}
            </div>
          </div>
        </div>
    </>
  )
}

export default Dashboard