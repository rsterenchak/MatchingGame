import React from 'react';
import './style2.css';
import musicIcon from './assets/musical-notes.svg'
import gitIcon from './assets/github.svg'
import fightButton from './assets/FightButton.svg'

export default function PlayPage() {








  
  return (


    <div className='outerSection'>
          
      <div className='navSection'>

        <div className='topColumn1'>

            <div className='musicBlock'>
              
              <img className='musicIcon' src={musicIcon} ></img>

            </div>

            <div className='musicBlock2'>
              
              <img className='musicIcon2' src={musicIcon} ></img>

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


      </div>
      
      <div className='logoSection2'>


      </div>
      
      <div className='inputSection'>

      </div>

    </div>
  );
}
