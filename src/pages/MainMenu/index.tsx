import React from 'react'
import MainMenuCard from '../../components/MainMenuCard'

import SideBar from '../../components/SideBar'


export default function MainMenu():JSX.Element {
  return (
    <div className="main-menu-container">
      <div className="main-menu-inner-wrapper">
        <SideBar/>
      <div className="card-wrapper">
        <div className="pawn-shop-card">
           <div>The \Pawn Shop</div>

        </div>
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
  )
}
