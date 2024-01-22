import React from 'react';
import './style.css';
import musicIcon from './assets/musical-notes.svg'
import gitIcon from './assets/github.svg'
import gokuGif from './assets/goku-gif.gif'
import homeSong from './assets/DragonBallZ.mp3'

export default function HomePage({
  background,
  setPlayPage
}) {

  const audioElement = new Audio(homeSong);
  audioElement.volume = 0.1;
  let homeAudioSwitch = false;


  const boxStyle = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }


  function handleHomeAudio(){

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
        className='homeSection'
        style={boxStyle}
        
      >


        <div className='outerSection'>
          
          <div className='navSection'>

            <div className='topColumn1'>

                <div 
                  className='musicBlock'
                  onClick={() => handleHomeAudio()}
                >
                  
                  <img className='musicIcon' src={musicIcon} ></img>

                </div>


            </div>
            <div className='topColumn2'>


                <div className='portfolioBlock'>

                  <div className='portfolioText'>@rsterenchak</div>

                  <div className='portfolioIcon'>

                    <img className='gitIcon' src={gitIcon}></img>

                  </div>


                </div>


            </div>

          </div>
          
          <div className='logoSection'>

            <div className='logoContainer'></div>

          </div>
          
          <div className='logoSection2'>

            <div className='logoContainer2'></div>


          </div>
          
          <div 
            className='inputSection'
            onClick={setPlayPage}  
          >

            <div className='fightButton'>

            <svg className='svg-element' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 30">
              <text x="50%" y="50%" className="svg-text" alignmentBaseline="middle" textAnchor="middle">Fight</text>
            </svg>

            </div>

          </div>

          <div className='animationSection'>
            <img className='gokuGif' src={gokuGif}></img>


          </div>

        </div>

      </div>
  );
}
