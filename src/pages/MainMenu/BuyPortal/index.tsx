import React from 'react'
import BuyerMachine from '../../../components/BuyerMachine'
import HottestItemDropDown from '../../../components/HottestItemDropDown'
import NavBar from '../../../components/NavBar'

export default function BuyPortal() {
  return (
    <div className="buy-portal">
         <NavBar/>
         <div className="buy-portal-inner-wrapper">
             <BuyerMachine/>
             <HottestItemDropDown items={[{collectionImage:'',collectionName:'',price:''}]}/>
         </div>
    </div>
  )
}
