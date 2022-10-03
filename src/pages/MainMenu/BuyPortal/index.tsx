import React from 'react'
import BuyerMachine from '../../../components/BuyerMachine'
import BuyPortalModal from '../../../components/BuyPortalModal/indext'
import HottestItemDropDown from '../../../components/HottestItemDropDown'
import NavBar from '../../../components/NavBar'

export default function BuyPortal() {
  return (
    <div className="buy-portal">
         <NavBar/>
         <div className="buy-portal-inner-wrapper">
          <div className="buyer-machine-wrapper">
             <BuyerMachine/>
          </div>
             <div className="dropdown-container">
             <HottestItemDropDown items={[{collectionImage:'',collectionName:'',price:''}]}/>
             <div className="modal-container">
             <BuyPortalModal/>
             </div>

             </div>
         </div>
    </div>
  )
}
