import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import musicIcon from './assets/musical-notes.svg'
import planetIcon from './assets/planet.svg'
import gitIcon from './assets/github.svg'
import cardBack from './assets/dbzCardBack.png'

export default function Card({
  item,
  shuffleNow,
  isPickedArray,
  setPickedArray,
  isShown,
  isScore,
  setScore

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

  // console.log(item.name);

  const myStyle = {
    border: '1px solid red'
    
  }



  function handleCardClick(){

    // Note -> upon card shuffle all cards need to be added to the shown array/state

    // When card is clicked, 

    // > check if card has been shown
    if(isShown.includes(item)){

      console.log('Item has been shown');


      //  > check if it has been picked
      if(isPickedArray.includes(item)){
      
        // > end game  
        console.log('Game is over...');

      }
      
      //  > else if it hasn't been picked
      else{
       
        // > add to picked array (state), increment score (state) 
        let newlyPickedArray = isPickedArray;

        setPickedArray(newlyPickedArray);

        // ****** START BACK UP RIGHT HERE w/ incremeneting the score (setScore) ********
      
      }
    }

    // > else if it hasn't been shown
    else{
    
      // > end game 
    
    }

    // Verify if game is over
    
    // if game is not over, shuffle cards and continue


    shuffleNow();

  }



  return (

   <>

            <div 
              className='card'
              onClick={() => handleCardClick()}
            >
                        
              <div className='cardFront'>{item.name}</div>

            </div>

  </> 


  );

  
}
