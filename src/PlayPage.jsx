import React from 'react';
import './style.css';
import musicIcon from './assets/musical-notes.svg'
import planetIcon from './assets/planet.svg'
import gitIcon from './assets/github.svg'
import fightButton from './assets/FightButton.svg'

export default function PlayPage() {








  
  return (

    <div className='playSection'>

      <div className='outerSection'>
            
        <div className='navSection'>

          <div className='topColumn3'>

              <div className='musicBlock2'>
                
                <img className='musicIcon2' src={musicIcon} ></img>

              </div>

              <div className='musicBlock3'>
                
                <img className='musicIcon3' src={planetIcon} ></img>

              </div>


          </div>
          <div className='topColumn4'>


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

    </div>
  );
}
