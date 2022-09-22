import React from 'react'
import { useState } from 'react';
import Tab from './Tab';


const TabData:String[]=[
  
  'Enter the shop','Get $RED','Auction house','What is the pawn shop ?','garbage collector'
  
]
export default function SideBar():JSX.Element {
  
const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className="side-bar">
       <div className="side-bar-tabs-container">
        {
          TabData.map((value,index)=>{
            return(
          <Tab title={value} index={index} activeIndex={activeTab} OnClick={()=>setActiveTab(index)} />
            )
          })
        }
       </div>
    </div>
  )
}
