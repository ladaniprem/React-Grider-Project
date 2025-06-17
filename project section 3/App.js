import React from 'react';
import Profile from './profile';
import 'bulma/css/bulma.css';
import ProfileCard from './profilecard';
import AlexaImage from './images/alexa.png';
import cortana from './images/Cortana.png';
import siri from './images/siri.png';


function App() {
    return (
        <div>
            <section className="hero is primary">
                <div className='hero body'>
            <p className='tittle'>Personal assignment</p>
            </div>
            </section>
            <div className='container'>
            <section className='section'>
            < div className='columns'>
            <div className='coloum is-4'>
            <ProfileCard 
            title = "Alexa"
            handle = "Alexa@88"
            image = {AlexaImage}
            description = "Alexa was created by Amazon and helps you buy things."
            />
            </div>
            <div className='coloum is-4'>
            <ProfileCard 
            title = "Cortana"
            handle = "Cortana@113"
            image = {cortana}
            description = "Cortana was made by Microsoft. Who knows what it does?"
            />
            </div>
            < div className='coloum is-4'>
            <ProfileCard 
            title = "Siri"
            handle = "siri@856"
            image = {siri}
            description = "Siri was made by Apple and is being phased out"
            />
            </div>
            </div>
            </section>
      </div>
    </div>
  );
}
export default App;