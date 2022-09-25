import React from 'react'
import MainMenuCard from '../../components/MainMenuCard'

import SideBar from '../../components/SideBar'


export default function MainMenu():JSX.Element {
  return (
    <div className="main-menu-container">
      <div className="main-menu-inner-wrapper">
        <div className="side-bar-wrapper">

        <SideBar/>
        </div>
      <div className="card-wrapper">
        <div className="pawn-shop-card">
           <div>The \Pawn Shop</div>

        </div>
        <div className="main-menu-card-container">

      <MainMenuCard data={[
    {
      imagePath:'Rectangle 22.png',
      title:'',
      para:''

    },
    {
      imagePath:'Rectangle 22.png'
    },
    {
      imagePath:'Rectangle 22.png'
    }
  ]}/>        
        </div>
      </div>  
      </div>
    </div>
  )
}
