import React from 'react';
import { useEffect, useState } from 'react';
import './style.css';
import homeBackground from './assets/kame-house.jpg'
import playBackground from './assets/namek-background.svg'
import HomePage from './HomePage.jsx'
import PlayPage from './PlayPage.jsx'
import homeSong from './assets/DragonBallZ.mp3'
import playSong from './assets/NamekTheme.mp3'



// create component responsible for controlling music






export default function MainSection() {


  const [isCurrentPage, setCurrentPage] = useState(true);

  const audioElement = new Audio(homeSong);
  audioElement.volume = 0.1;
  let homeAudioSwitch = false;

  const audioElement2 = new Audio(playSong);
  audioElement2.volume = 0.1;
  let playAudioSwitch = false;

 

  function handleAudio(){

    console.log('Runs handleAudio');

    // when page is true set/play homeSong
    if(isCurrentPage === true){

      homeAudioSwitch = !homeAudioSwitch;

      if(homeAudioSwitch){
  
        audioElement2.pause();
        audioElement2.currentTime = 0;        
        audioElement.play();
  
      }
      else{
  
        audioElement.pause();
        audioElement.currentTime = 0;
  
      }


    }

    // when page is false set/play playSong
    if(isCurrentPage === false){

      playAudioSwitch = !playAudioSwitch;

      if(playAudioSwitch){
  
        audioElement.pause();
        audioElement.currentTime = 0;
        audioElement2.play();
  
      }
      else{
  
        audioElement2.pause();
        audioElement2.currentTime = 0;
  
      }


    }    
    
  
  }




  return (


    <>



    {isCurrentPage ? (
    
      <HomePage 
        background={homeBackground}
        setPlayPage={() => setCurrentPage(false)}
        setAudio={handleAudio}
      />
      
      ) : (
      
      <PlayPage
        background={playBackground}
        setHomePage={() => setCurrentPage(true)}
        setAudio={handleAudio}
      />  
    )}



    </>
    
  );
}
