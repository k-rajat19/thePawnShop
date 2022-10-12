import React from 'react'
import Button from '../Button'
import TwistedBorder from '../TwistedBorder'
import SelectedNFT from './SelectedNFT'

const BuyButtonStyles:React.CSSProperties={
  width:'100%',
  height:'32px',
  backgroundColor:'#FFFFFF',
  border:'none',
  color:'#000000',
  fontSize:'18px',
  outline:'none',
  cursor:'pointer',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:'4px',
  marginTop:'20px'

}

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
            <Button childern={'Buy'} styles={BuyButtonStyles}/>
        </div>

        </div>
    </div>
  )
}

