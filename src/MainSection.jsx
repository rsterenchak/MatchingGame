import React from 'react';
import { useState } from 'react';
import './style.css';
import homeBackground from './assets/kame-house.jpg'
import playBackground from './assets/namek-background.svg'
import HomePage from './HomePage.jsx'
import PlayPage from './PlayPage.jsx'

export default function MainSection() {


  const [isCurrentPage, setCurrentPage] = useState(true);






  return (


    <>



    {isCurrentPage ? (
    
      <HomePage 
        background={homeBackground}
        setPlayPage={() => setCurrentPage(false)}
      />
      
      ) : (
      
      <PlayPage
        background={playBackground}
        setHomePage={() => setCurrentPage(true)}
        
      />  
    )}



    </>
    
  );
}
