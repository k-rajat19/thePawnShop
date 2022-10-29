import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Loading from './pages/Loading'
import MainMenu from './pages/MainMenu'
import AuctionHouse from './pages/MainMenu/AuctionHouse'
import BuyPortal from './pages/MainMenu/BuyPortal'
import ShopInterface from './pages/MainMenu/ShopInterface'
import HottestAuction from './pages/MainMenu/HottestAuction'
import CreateSingleAuction from './pages/MainMenu/CreateSingleAuction'
import CreateCollectionAuction from './pages/MainMenu/CreateCollectionAuction'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/shop_interface" element={<ShopInterface />} />
        <Route path="/shop_interface/Buy" element={<BuyPortal />} />
        <Route path="/auction_house" element={<AuctionHouse />} />
        <Route
          path="/auction_house/hottest_auction"
          element={<HottestAuction />}
        />
        <Route
          path="/auction_house/create_single_auction"
          element={<CreateSingleAuction />}
        />
        <Route
          path="/auction_house/create_collection_auction"
          element={<CreateCollectionAuction />}
        />
      </Routes>
    </Router>
  )
}
