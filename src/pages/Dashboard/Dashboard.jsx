import TinderCard from 'react-tinder-card';
import ChatContainer from '../../components/ChatContainer/ChatContainer';
import { useState } from 'react';
import './Dashboard.css';

const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://miro.medium.com/v2/resize:fit:1358/0*xEr4gau0yB5D2U53'
  },
  {
    name: 'Erlich Bachman',
    url: 'https://miro.medium.com/v2/resize:fit:1358/0*xEr4gau0yB5D2U53'
  },
  {
    name: 'Monica Hall',
    url: 'https://miro.medium.com/v2/resize:fit:1358/0*xEr4gau0yB5D2U53'
  },
  {
    name: 'Jared Dunn',
    url: 'https://miro.medium.com/v2/resize:fit:1358/0*xEr4gau0yB5D2U53'
  },
  {
    name: 'Dinesh Chugtai',
    url: 'https://miro.medium.com/v2/resize:fit:1358/0*xEr4gau0yB5D2U53'
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
        <div className="dashboard">
          <ChatContainer />
          <div className='swiper-container'>
            <div className='card-container'>
            {characters.map((character) =>
              <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                  <h3>{character.name}</h3>
                </div>
              </TinderCard>
            )}
            <div className="swipe-info">
              {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
            </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Dashboard