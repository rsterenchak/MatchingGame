import React from 'react';
import './style.css';
import musicIcon from './assets/musical-notes.svg'
import planetIcon from './assets/planet.svg'
import gitIcon from './assets/github.svg'

export default function PlayPage({
  background,
  setHomePage

}) {

/*   const audioElement = new Audio(homeSong);
  let homeAudioSwitch = false; */



  const boxStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }

  function PlayAudio(){

    homeAudioSwitch = !homeAudioSwitch;

    if(homeAudioSwitch){

      audioElement.play();

    }
    else{

      audioElement.pause();
      audioElement.currentTime = 0;

    }
  }


  
  return (

    <div 
      className='playSection'
      style={boxStyle}
    >

      <div className='outerSection2'>
            
        <div className='navSection2'>

          <div className='topColumn3'>

              <div className='musicBlock2'>
                
                <img className='musicIcon2' src={musicIcon} ></img>

              </div>

              <div 
                className='musicBlock3'
                onClick={setHomePage}  
              >
                
                <img className='musicIcon3' src={planetIcon} ></img>

              </div>


          </div>
          <div className='topColumn4'>


              <div className='portfolioBlock2'>

                <div className='portfolioText2'>@rsterenchak</div>

                <div className='portfolioIcon2'>

                  <img className='gitIcon' src={gitIcon}></img>

                </div>


              </div>


          </div>


        </div>
        
        <div className='logoSection3'>


        </div>
        
        <div className='logoSection4'>


        </div>
        
        <div className='inputSection2'>

        </div>

      </div>

    </div>
  );
}
