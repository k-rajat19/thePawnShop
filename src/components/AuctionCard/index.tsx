import React,{useState} from 'react'
import {Link} from 'react-router-dom'

type AuctionCardProps={
    imagePath:string;
    title:string;
    para:string,
    onClick?:React.MouseEventHandler,
    icon?:string

}

export default function AuctionCard({imagePath,title,para,icon,onClick=()=>{}}:AuctionCardProps):JSX.Element {
// const [activeTab, setActiveTab] = useState(0)
  return (
  
    
    <div className="auction-card" onClick={onClick}>
         <div className="card-inner-wrapper">
             
             <div className="image-container">
             
              

              <img src={imagePath} alt="" />
          {  icon && <img className='icon' src={icon} alt="" />}
            

          
        
             </div>
             <div className="bottom-container">
                <div className="title">{title}</div>
                <div className="para">{para}</div>
             </div>
            
         </div>
    </div>
    
  )
}

AuctionCard.defaultProps={

      
        imagePath:'Rectangle 24.png'
  
      

    
    
  }