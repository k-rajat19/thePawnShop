import React,{useState,useEffect} from 'react'
import ProgressBar from '../../components/ProgressBar'
import Typed from 'react-typed';
import MainMenu from '../MainMenu';




export default function Loading():JSX.Element{

  const [progress, setProgress] = useState<number>(1);
  const [showText, setshowText] = useState<boolean>(false);
  const [showMainMenu, setShowMainMenu] = useState<boolean>(false);

  useEffect(() => {
   setInterval(()=>setProgress(progress+99),1000);
  }, [ ])

  // this check needed because of transition timing of width in <ProgressBar/> which is 1s
  progress==100?setTimeout(()=>setshowText(true),2500):''

  
 if (showMainMenu){
  return(
     <MainMenu/>
    
  )
 }
 else if (showText){
     return(
          
          <div className="loading-page loading-welcome-page">
          <Typed
                      strings={['The Pawn shop']}
                      startDelay={500}
                      typeSpeed={40}
                      onComplete={()=>setTimeout(()=>setShowMainMenu(true),1000) }
                  />
         </div>
     )

 }
 else{
  return(

  <div className="loading-page">

   <ProgressBar width={progress.toString()}/>
  
  </div>
  )
 }
  
  
}

