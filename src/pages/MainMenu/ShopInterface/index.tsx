import React from 'react'
import ShopInterfaceCard from '../../../components/ShopInterfaceCard'

export default function ShopInterface() {

  return (
    <div className="shop-interface">
         <div className="shop-interface-inner-wrapper">
          <div className="heading-container">
            <div className="heading">Welcome to the shop</div>
            <div className="sub-heading">Pick from one of the options below</div>
          </div>
          <div className="cards-container">
            <ShopInterfaceCard imagePath={['Rectangle 24.png']} title={'Sell'}/>
            <ShopInterfaceCard imagePath={['Rectangle 25.png','Rectangle 25.png']} title={'Buy'}/>
            <ShopInterfaceCard imagePath={['Rectangle 26.png']} title={'Earn'}/>
          </div>
         </div>
    </div>

  )
}
