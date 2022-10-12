import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Loading from './pages/Loading'
import MainMenu from './pages/MainMenu'
import AuctionHouse from './pages/MainMenu/AuctionHouse'
import BuyPortal from './pages/MainMenu/BuyPortal'
import ShopInterface from './pages/MainMenu/ShopInterface'
import HottestAuction from './pages/MainMenu/HottestAuction';

export default function App() {

  return (  
    <Router>
      <Routes>
      <Route path="/" element={<Loading/>} />
      <Route path="/shop_interface" element={<ShopInterface/>} />
      <Route path="/shop_interface/Buy" element={<BuyPortal/>} />
      <Route path="/auction_house" element={<AuctionHouse/>}/>
      <Route path="/auction_house/hottest_auction" element={<HottestAuction/>}/>     
    </Routes>
    </Router> 
  )
}
