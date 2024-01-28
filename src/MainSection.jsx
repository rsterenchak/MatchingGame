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

function HandleHomeAudio({
  audioState

}){


  const audioElement = new Audio(homeSong);
  audioElement.volume = 0.07;
  audioElement.loop = true;
  let homeAudioSwitch = false;

  
  /** Start re-thinking how this will work once music is played
   *  Seems as though, upon render, this runs the effect, cleanup,
   *  and then finally the effect once more. Contstruct based on that
   * 
   */

  let cleanupMarker = true;

    useEffect(() => {

      cleanupMarker = true;
   

      var playPromise = audioElement.play();

      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          
          // Show playing UI.
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
      }

      // console.log('useEffect - effect');

      cleanupMarker = false;

      return () => {


        // console.log('Cleanup for useEffect');

        audioElement.pause();



        
      };
    }, [audioState])


}

function HandlePauseAudio({
  audioState

}){


  const audioElement = new Audio(homeSong);
  audioElement.volume = 0.07;
  audioElement.loop = true;
  let homeAudioSwitch = false;


  
  /** Start re-thinking how this will work once music is played
   *  Seems as though, upon render, this runs the effect, cleanup,
   *  and then finally the effect once more. Contstruct based on that
   * 
   */

  let cleanupMarker = true;

    useEffect(() => {

      cleanupMarker = true;
   

      var playPromise = audioElement.pause();

      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
      }

      // console.log('useEffect - effect');

      cleanupMarker = false;

      return () => {


        // console.log('Cleanup for useEffect');


        
      };
    }, [audioState])


}

function HandlePlayAudio({
  audioState

}){


  const audioElement2 = new Audio(playSong);
  audioElement2.volume = 0.07;
  audioElement2.currentTime = 1;
  audioElement2.loop = true;
  let playAudioSwitch = false;

  
  /** Start re-thinking how this will work once music is played
   *  Seems as though, upon render, this runs the effect, cleanup,
   *  and then finally the effect once more. Contstruct based on that
   * 
   */

  let cleanupMarker = true;

    useEffect(() => {

      cleanupMarker = true;
   

      var playPromise = audioElement2.play();

      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          
          // Show playing UI.
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
      }

      // console.log('Play - useEffect');

      cleanupMarker = false;

      return () => {


        // console.log('Play - cleanup');

        audioElement2.pause();



        
      };
    }, [audioState])


}

function HandlePausePlayAudio({
  audioState

}){


  const audioElement2 = new Audio(playSong);
  audioElement2.volume = 0.07;
  audioElement2.loop = true;
  let playAudioSwitch = false;

  
  /** Start re-thinking how this will work once music is played
   *  Seems as though, upon render, this runs the effect, cleanup,
   *  and then finally the effect once more. Contstruct based on that
   * 
   */

  let cleanupMarker = true;

    useEffect(() => {

      cleanupMarker = true;
   

      var playPromise = audioElement2.pause();

      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch(error => {
          // Auto-play was prevented
          // Show paused UI.
        });
      }

      // console.log('PlayPause - useEffect');

      cleanupMarker = false;

      return () => {


        // console.log('PlayPause - cleanup');


        
      };
    }, [audioState])


}



export default function MainSection() {


  const [isCurrentPage, setCurrentPage] = useState(true);
  const [isCurrentAudio, setCurrentAudio] = useState(false);

  const [activeData, setActiveData] = useState([]);

  useEffect(() => {

    return () => {
      const fetchData = async () => {
        const response = await fetch(`https://dragonball-api.com/api/characters?page=1&limit=16`);
        const newData = await response.json();
        setActiveData(newData.items);
        console.log(newData.items);
  
      };
    
      fetchData();      

      console.log('Play cleanup - MainSection');
      

        
    };
  }, [])

  // console.log(activeData);

  return (
    

    <>

    {isCurrentPage ? (

       isCurrentAudio ? (
      
        <HandleHomeAudio
          audioState={isCurrentAudio}
        />
      ) : (

        <HandlePauseAudio
          audioState={isCurrentAudio}
        />

      )
       
    
      ) : (

        isCurrentAudio ? (
      
          <HandlePlayAudio
            audioState={isCurrentAudio}
          />
        ) : (
  
          <HandlePausePlayAudio
            audioState={isCurrentAudio}
          />
  
        )

      )}

        

    {isCurrentPage ? (
    
      <HomePage 
        background={homeBackground}
        setPlayPage={() => setCurrentPage(false)}
        setAudioPause={() => setCurrentAudio(false)}
        setAudioPlay={() => setCurrentAudio(true)}
        activeCurrentAudio={isCurrentAudio}
      />
      
      ) : (
      
      <PlayPage
        background={playBackground}
        setHomePage={() => setCurrentPage(true)}
        setAudioPause={() => setCurrentAudio(false)}
        setAudioPlay={() => setCurrentAudio(true)}
        activeCurrentAudio={isCurrentAudio}
        isActiveData={activeData}
      />  
    )}



    </>
    
  );
}




/*       // when page is true set/play homeSong
      if(isCurrentPage === true){

        console.log('isCurrentPage is true');

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

        console.log('isCurrentPage is false');

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
 */


