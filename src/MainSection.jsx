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
  audioElement.volume = 0.1;
  let homeAudioSwitch = false;

  const audioElement2 = new Audio(playSong);
  audioElement2.volume = 0.1;
  let playAudioSwitch = false;

  
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

      console.log('useEffect - effect');

      cleanupMarker = false;

      return () => {


        console.log('Cleanup for useEffect');

        audioElement.pause();



        
      };
    }, [audioState])


}

function HandlePauseAudio({
  audioState

}){


  const audioElement = new Audio(homeSong);
  audioElement.volume = 0.1;
  let homeAudioSwitch = false;

  const audioElement2 = new Audio(playSong);
  audioElement2.volume = 0.1;
  let playAudioSwitch = false;

  
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

      console.log('useEffect - effect');

      cleanupMarker = false;

      return () => {


        console.log('Cleanup for useEffect');


        
      };
    }, [audioState])


}

function HandlePlayAudio({
  audioState

}){


  const audioElement = new Audio(homeSong);
  audioElement.volume = 0.1;
  let homeAudioSwitch = false;

  const audioElement2 = new Audio(playSong);
  audioElement2.volume = 0.1;
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

      console.log('useEffect - effect');

      cleanupMarker = false;

      return () => {


        console.log('Cleanup for useEffect');

        audioElement2.pause();



        
      };
    }, [audioState])


}

function HandlePausePlayAudio({
  audioState

}){


  const audioElement = new Audio(homeSong);
  audioElement.volume = 0.1;
  let homeAudioSwitch = false;

  const audioElement2 = new Audio(playSong);
  audioElement2.volume = 0.1;
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

      console.log('useEffect - effect');

      cleanupMarker = false;

      return () => {


        console.log('Cleanup for useEffect');


        
      };
    }, [audioState])


}



export default function MainSection() {


  const [isCurrentPage, setCurrentPage] = useState(true);
  const [isCurrentAudio, setCurrentAudio] = useState(false);

  console.log(isCurrentAudio);

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
        setAudioPlay={() => setCurrentAudio(!isCurrentAudio)}
        activeCurrentAudio={isCurrentAudio}
      />
      
      ) : (
      
      <PlayPage
        background={playBackground}
        setHomePage={() => setCurrentPage(true)}
        setAudioPause={() => setCurrentAudio(false)}
        setAudioPlay={() => setCurrentAudio(!isCurrentAudio)}
        activeCurrentAudio={isCurrentAudio}
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


