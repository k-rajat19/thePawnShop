import React from 'react'
import Button from '../Button'
import TwistedBorder from '../TwistedBorder'
import SelectedNFT from './SelectedNFT'



export default function BuyPortalModal() {
  return (
    <div className="buy-portal-modal">
        <div className="inner-wrapper">
        <div className="close-section">
            <img src="/close.png" alt="" />

        </div>
        <div className="nft-details-container">
            <div className="heading">You’re buying  ( 2 )</div>
            <div className="nft-container">
            <SelectedNFT/>
            <SelectedNFT/>
            </div>
            <div className="pricing-section">
              <TwistedBorder/>
              <div className="price">
                <span>Price of one</span>
                <span>$1.2</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>$2.4</span>
              </div>
              <TwistedBorder/>
            </div>
            <Button childern={'Buy'} className={'buy-btn'}/>
        </div>

        </div>
    </div>
  )
}

