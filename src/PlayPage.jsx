import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import Card from './Card.jsx'
import CardBack from './CardBack.jsx';
import musicIcon from './assets/musical-notes.svg'
import planetIcon from './assets/planet.svg'
import gitIcon from './assets/github.svg'
import cardBack from './assets/dbzCardBack.png'


function RunGamePlay({
  isStandardArray,
  setShuffledArray,
  isShuffledArray,
  setTopRow,
  setBottomRow    
  
}){

  
  /** Start re-thinking how this will work once music is played
   *  Seems as though, upon render, this runs the effect, cleanup,
   *  and then finally the effect once more. Contstruct based on that
   * 
   */

  function randomIntFromInterval(min, max) { // min and max included

    return Math.floor(Math.random() * (max - min + 1) + min)
  
  }
  
  // Sets new cards to shuffledArray state in PlayPage
  function shuffleArray(){

    const randomArrayPositions = [];

    console.log('runs shuffle array');

    let counter = 0;

    while(counter < ((isStandardArray.length)/2)){

      let newPos = randomIntFromInterval(0, isStandardArray.length - 1);

      if(randomArrayPositions.includes(newPos)){

        // console.log('Duplicate digit');

      }
      else{

        randomArrayPositions.push(newPos);

        counter += 1;
      
      }

    }

    console.log(randomArrayPositions); // prints random positions

    let newlyShuffledArray = []

    counter = 0;

    while(counter < randomArrayPositions.length){
      
      newlyShuffledArray.push(isStandardArray[randomArrayPositions[counter]]);


      counter += 1;
    }

    setShuffledArray(newlyShuffledArray);

    let topRowArray =[];
    let bottomRowArray =[];

    let maxLength = randomArrayPositions.length;
    let middleMaxLength = maxLength/2;

    counter = 0;

    while(counter < middleMaxLength){

      topRowArray.push(newlyShuffledArray[counter]);

      counter+= 1;
    }

    setTopRow(topRowArray);

    while(counter < maxLength){

      bottomRowArray.push(newlyShuffledArray[counter]);
      counter+= 1;
    }

    setBottomRow(bottomRowArray);

  }

    useEffect(() => {

      console.log('Play effect');

      shuffleArray();


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
  activeCurrentAudio,
  isActiveData

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

/* let lastResponse = '';
 */
/* async function pullCharacters(value) {
  let url = 'https://dragonball-api.com/api/characters?page=1&limit=' + value;


  // issue getting new fetch calls

  try {
    let response = await fetch(url, {mode: 'cors'});
  

    if(!response.ok){
    
      throw new Error(`HTTP error! Status: ${response.status}`);
    
    }


    let forecast = await response.json();
    
    lastResponse = forecast;

    console.log(lastResponse);

    // validInput();
    // changeWeatherInfo(alldays).validInput();

    return lastResponse;

      } 
  catch(err) {
    // catches errors both in fetch and response.json
    
    // need function call to indexChanges that signals invalid input to user
    // invalidInput();
    // changeWeatherInfo(alldays).invalidInput();

    // alert(err);
    console.log(err);

    return lastResponse;

  }

}
 */
// let newArray = pullCharacters(16);
// setActiveStandardArray(newArray.items);



  const dataArray = [
    {
      id: Math.random(),
      name: 'Goku',
    },
    {
      id: Math.random(),
      name: 'Vegeta',
    },
    {
      id: Math.random(),
      name: 'Piccolo',
    },
    {
      id: Math.random(),
      name: 'Gohan',
    },
    {
      id: Math.random(),
      name: 'Majin Bu',
    },
    {
      id: Math.random(),
      name: 'Cell',
    },
    {
      id: Math.random(),
      name: 'Gotenks',
    },
    {
      id: Math.random(),
      name: 'Krillin',
    },
    {
      id: Math.random(),
      name: 'King Kai',
    },
    {
      id: Math.random(),
      name: 'Namekian',
    },
    {
      id: Math.random(),
      name: 'Zarbon',
    },
    {
      id: Math.random(),
      name: 'Frieza',
    },
    {
      id: Math.random(),
      name: 'Android',
    },
    {
      id: Math.random(),
      name: 'Balma',
    },
    {
      id: Math.random(),
      name: 'Popo',
    },
    {
      id: Math.random(),
      name: 'Raditz',
    }
  ];


  const [activeStandardArray, setActiveStandardArray] = useState(isActiveData); // regular array
  const [activeShuffledArray, setActiveShuffledArray] = useState([]); // Regular Array

  const [activeTopRow, setActiveTopRow] = useState([]); // set top cards row
  const [activeBottomRow, setActiveBottomRow] = useState([]); // set bottom cards row

  const [activeShown, setActiveShown] = useState([]); // set top cards row

  // const [isUnpickedArray, setUnpickedArray] = useState([]); // cards that haven't been chosen yet
  const [activePickedArray, setActivePickedArray] = useState([]); //  cards that have already been picked

  const [activePopUp, setActivePopUp] = useState(false);

  const [activeScore, setActiveScore] = useState(0);
  const [activeHighScore, setActiveHighScore] = useState(0);

  const [isSide, setSide] = useState(false); // regular array

  const [isHovered, setIsHovered] = useState(false); // going to use to for disabling 'hover' on all button elements when game over popup appears

  const [isMobileLayout, setMobileLayout] = useState(false); // used for turning off/on mobile layout

  const boxStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    filter: activePopUp ? 'blur(5px)' : 'blur(0px)'
  }

  const popUpStyle ={

    cursor: activePopUp ? 'auto' : 'pointer'

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



  function randomIntFromInterval(min, max) { // min and max included

    return Math.floor(Math.random() * (max - min + 1) + min)
  
  }
  
  // Sets new cards to shuffledArray state in PlayPage
  function shuffleArray(){

    const randomArrayPositions = [];

    // console.log('runs shuffle array');

    let counter = 0;

    // Generates non-duplicate array positions
    while(counter < ((activeStandardArray.length)/2)){

      let newPos = randomIntFromInterval(0, activeStandardArray.length - 1);

      if(randomArrayPositions.includes(newPos)){

        // console.log('Duplicate digit');

      }
      else{

        randomArrayPositions.push(newPos);

        counter += 1;
      
      }

    }

    let newlyShuffledArray = []
    let newlyShownArray = activeShown;

    counter = 0;

    // Generates array with values
    while(counter < randomArrayPositions.length){

      newlyShuffledArray.push(activeStandardArray[randomArrayPositions[counter]]);

      // if card is not already in the newlyShownArray push it onto the array
      if(newlyShownArray.includes(activeStandardArray[randomArrayPositions[counter]])){

        // console.log('Already exists on array');

      }
      else{

        newlyShownArray.push(activeStandardArray[randomArrayPositions[counter]]);

      }

      counter += 1;


    }

    setActiveShown(newlyShownArray);

    // console.log(newlyShownArray);

    setActiveShuffledArray(newlyShuffledArray);

    let topRowArray =[];
    let bottomRowArray =[];

    let maxLength = randomArrayPositions.length;
    let middleMaxLength = maxLength/2;

    counter = 0;

    while(counter < middleMaxLength){

      topRowArray.push(newlyShuffledArray[counter]);

      counter+= 1;
    }

    setActiveTopRow(topRowArray);

    while(counter < maxLength){

      bottomRowArray.push(newlyShuffledArray[counter]);
      counter+= 1;
    }

    setActiveBottomRow(bottomRowArray);


  }

  let shuffledTopRow = activeTopRow.map(item => 

    <Card 
      item={item}
      key={item.id}
      shuffleNow={() => shuffleArray()}
      isPickedArray={activePickedArray}
      setPickedArray={setActivePickedArray}
      isShown={activeShown}
      isScore={activeScore}
      setScore={setActiveScore}
      isPopUp={activePopUp}
      setPopUp={setActivePopUp}
      style={popUpStyle}
      isHighScore={activeHighScore}
      setHighScore={setActiveHighScore}
    />
    
  );

  let shuffledBottomRow = activeBottomRow.map(item => 

    <Card 
      item={item}
      key={item.id}
      image={item.image}
      shuffleNow={() => shuffleArray()}
      isPickedArray={activePickedArray}
      setPickedArray={setActivePickedArray}
      isShown={activeShown}
      isScore={activeScore}
      setScore={setActiveScore}
      isPopUp={activePopUp}
      setPopUp={setActivePopUp}  
      style={popUpStyle} 
      isHighScore={activeHighScore}
      setHighScore={setActiveHighScore}               
    />
    
  );

  function resetGame(){

    console.log('Runs reset game');
    setActiveScore(0);
    setActivePickedArray([]);
    setActiveShown(activeShuffledArray);
    setActivePopUp(false);

  }



// used for initial shuffle - runs once during cleanup
  useEffect(() => {

    return () => {   

      console.log('Play cleanup - PlayPage');
      shuffleArray();

        
    };
  }, [])


// used for card flip when shuffled array changes  
  useEffect(() => {
    // console.log('Play effect - card');

    const key = setInterval(() => {

      console.log('setSide true');
      setSide(true);

    }, 1000);


    return () => {
      
      console.log('setSide false');
      setSide(false);
      clearInterval(key);
      // console.log(activeStandardArray);
      // shuffleArray();

    };
  }, [activeShuffledArray]) 


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
                  style={popUpStyle}
                >
                  
                  <img className='musicIcon2' src={musicIcon} ></img>

                </div>

                <div 
                  className='musicBlock3'
                  onClick={() => setupPage()}
                  style={popUpStyle}
                >
                  
                  <img className='musicIcon3' src={planetIcon} ></img>

                </div>


            </div>
            <div className='topColumn4'>


                <div className='portfolioBlock2'>

                  <div className='portfolioText2'>@rsterenchak</div>

                  <div 
                    className='portfolioIcon2'
                    style={popUpStyle}
                  >

                    <img className='gitIcon' src={gitIcon}></img>

                  </div>


                </div>


            </div>


          </div>
          
          <div className='logoSection3'>

            {isSide ?(
            <>
              {shuffledTopRow}
            </>
            ) : (
              <>
                <CardBack />
                <CardBack />
                <CardBack />
                <CardBack />
              </>
            )

            }

          </div>
          
          <div className='logoSection4'>

            {isSide ?(
              <>
                {shuffledBottomRow}
              </>
              ) : (
                <>
                  <CardBack />
                  <CardBack />
                  <CardBack />
                  <CardBack />
                </>
              )

            }

          </div>
          
          {/* Delete Section - no longer needed */}
{/*           <div className='currentScoreSection'></div> */}

          <div className='highScoreSection'>

            <div className='scoreSection1'>
              <div className='highScoreElement'>

                <div className='highScoreText'>High Score: </div>
                <div className='highScoreValue'>&nbsp;{activeHighScore}</div>

              </div>
            </div>

            <div className='scoreSection2'>

              <div className='currentScoreElement'>

                <div className='currentScoreText'>Current <br></br>Score:</div>
                <div className='currentScoreValue'>&nbsp;{activeScore}/16</div>

              </div>

            </div>



          </div>


        </div>

      </div>
    

    {/* Pop-up element that will generate when game is over */}


    {activePopUp ? (
      
        <div className='endGame'>

          <div className='gameOverTitle'>Game Over</div>
          <div 
            className='retryButton'
            onClick={() => resetGame()}
          >Retry?</div>

        </div>
      
      ):(

        <></>
    
      )
    
    }

  </>
  );
}
