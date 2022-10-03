import React from 'react'

export default function NavBar() {
  return (
    <div className="navbar">
         <div className="navbar-inner-wrapper">
            <div className="search-box">
                <input type="text" placeholder='Search for collection'/>
            </div>

            <div className="user-info">
            <div className="credits navbar-badge">
               <div className="image-container">
              <img src="credit.svg" alt="" />
              <span>Red$ :</span>
               </div>
               <div className="value">2,000.0</div>
            </div>
            <div className="account navbar-badge">
               <div className="name">08xxdrtzzea3</div>
               <div className="logo"></div>
            </div>

            </div>
            <div className="mobile-btn">
               <span></span>
               <span></span>
               <span></span>
            </div>
         </div>
    </div>
  )
}
