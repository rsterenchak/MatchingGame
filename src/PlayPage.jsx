import React from 'react';
import './style.css';
import Card from './Card.jsx'
import musicIcon from './assets/musical-notes.svg'
import planetIcon from './assets/planet.svg'
import gitIcon from './assets/github.svg'
import cardBack from './assets/dbzCardBack.png'


function RunGamePlay({
    
  
}){

  
  /** Start re-thinking how this will work once music is played
   *  Seems as though, upon render, this runs the effect, cleanup,
   *  and then finally the effect once more. Contstruct based on that
   * 
   */

    useEffect(() => {

      console.log('Play effect');

      return () => {

        console.log('Play cleanup');

        
      };
    }, [])


}





export default function PlayPage({
  background,
  setHomePage,
  setAudioPause,
  setAudioPlay,
  activeCurrentAudio

}) {

  

/**
 * 'Card Generation Logic' - 1/23 - *** Currently working ***
 * 
 * - Will most likely need to take place in a useEffect hook
 * - the max amount of turns until game is beaten is 16 (the amount of cards in array) 
 * - Load 16 cards into array as objects with pertaining information (name, image link, id(unique id))
 * - Shuffle array
 * - Show 8 cards
 * - you will need three arrays, 
 *    - regular array
 *    - show array
 *    - shown array
 *    - picked array
 * - every turn do these things (starting with first turn),
 * 
 *    - >>>> Shuffle regular array <<<<
 * 
 *    - store first 8 cards into - show array
 *    - make sure 'show array' contains at least 1 unpicked card (regular array - picked array) = unpicked array
 *    - if all cards are picked (repeat 'Shuffle regular array') 
 * 
 *    - display those cards - show array
 *    - pick card
 *    - verify card isn't in the picked array
 *    - if it isn't in the picked array, add it to - picked array CONTINUE GAME (+ score)
 *    - else if it is, stop game, user lost. END GAME (0 score increase)
 * 
 *    - >>>> Shuffle regular array <<<<
 * 
 * 
 */



  const dataArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  const [isStandardArray, setStandardArray] = dataArray; // Regular Array
  const [isShuffledArray, setShuffledArray] = []; // Regular Array

  const [isUnpickedArray, setUnpickedArray] = []; // cards that haven't been chosen yet
  const [isPickedArray, setPickedArray] = []; //  cards that have already been picked



  const boxStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }

  function setupPage(){

    setHomePage();
    setAudioPause();
    setAudioPlay();

  }
  
  function forMusicIcon(){

    if(activeCurrentAudio === true){

      setAudioPause();

    }
    else{

      setAudioPlay();      

    }

  }



<RunGamePlay /> // Responsible for running gameplay - currently working on





  return (

    <>




    <div 
      className='playSection'
      style={boxStyle}
    >

      <div className='outerSection2'>
            
        <div className='navSection2'>

          <div className='topColumn3'>

              <div 
                className='musicBlock2'
                onClick={() => forMusicIcon()}
              >
                
                <img className='musicIcon2' src={musicIcon} ></img>

              </div>

              <div 
                className='musicBlock3'
                onClick={() => setupPage()}  
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

          <Card />
          <Card />
          <Card />
          <Card />

        </div>
        
        <div className='logoSection4'>

          <Card />
          <Card />
          <Card />
          <Card />

        </div>
        
        <div className='currentScoreSection'>

          <div className='currentScoreElement'>

            <div className='currentScoreText'>Current <br></br>Score:</div>
            <div className='currentScoreValue'>&nbsp;0/12</div>

          </div>

        </div>

        <div className='highScoreSection'>

          <div className='highScoreElement'>

            <div className='highScoreText'>High Score: </div>
            <div className='highScoreValue'>&nbsp;12</div>

          </div>

        </div>


      </div>

    </div>
  
  </>
  );
}
