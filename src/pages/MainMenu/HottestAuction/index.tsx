import React from 'react'
import BuyerMachine from '../../../components/BuyerMachine'
import BuyPortalModal from '../../../components/BuyPortalModal/indext'
import HottestItemDropDown from '../../../components/HottestItemDropDown'
import ActivityDropDown from '../../../components/ActivityDropDown'
import AuctionMachine from '../../../components/AuctionMachine'
import NavBar from '../../../components/NavBar'
import AuctionModal from '../../../components/AuctionModal'

export default function HottestAuction() {
  return (
    <div className="auction-house-portal">
      <NavBar chest={true} />
      <div className="auction-house-portal-inner-wrapper">
        <div className="auction-machine-wrapper">
          <AuctionMachine />
        </div>
        <div className="dropdown-container">
          <ActivityDropDown />
          <div className="modal-container">
            <AuctionModal />
          </div>
        </div>
      </div>
    </div>
  )
}
