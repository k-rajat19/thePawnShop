import React from 'react'
import BuyerMachine from '../../../components/BuyerMachine'
import NavBar from '../../../components/NavBar'

export default function BuyPortal() {
  return (
    <div className="buy-portal">
         <NavBar/>
         <div className="buy-portal-inner-wrapper">
             <BuyerMachine/>
         </div>
    </div>
  )
}
