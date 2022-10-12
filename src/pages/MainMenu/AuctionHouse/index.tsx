import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
import AuctionCard from '../../../components/AuctionCard'

export default function AuctionHouse() {
  const [showmobileCard, setShowmobileCard] = useState(1);
  

  
    return (
      <div className="auction-house">
           <div className="auction-house-inner-wrapper">
            <div className="heading-container">
              <div className="heading">Welcome to the Auction House</div>
              <div className="sub-heading">Pick from one of the options below</div>
            </div>
            <div className="cards-container">
            <Link to={'/auction_house/hottest_auction'}>  <AuctionCard imagePath={'Rectangle 24 (1).png'} title={'Hottest Auctions'} para={'Click here to see the hottest Nft auctions , Hurry up'}/></Link>
            <Link to={'/auction_house/create_collection_auction'}>
              <div className="auction-card-wrapper">
              <AuctionCard imagePath={'Rectangle 25 (2).png'} title={'Create collection'} para={'Click here to create an auction-model NFT collection'} icon={'/plus.svg'}/>

              </div>
              </Link>
              <Link to={'/auction_house/create_single_auction'}>
              <AuctionCard imagePath={'Rectangle 25 (3).png'} title={'Single Auctions'} para={'Click here to  open Your wallet and list an item for auctions'}/>
            </Link>
            </div>
            <div className="cards-container-mobile">
              {showmobileCard===0?  
               <Link to={'/auction_house/hottest_auction'}> 
              <AuctionCard imagePath={'Rectangle 24 (1).png'} title={'Hottest Auctions'}  para={'Click here to see the hottest Nft auctions , Hurry up'}/></Link>
              :showmobileCard===1? 
              <Link to={'/auction_house/create_collection_auction'}>
              <AuctionCard imagePath={'Rectangle 25 (2).png'} title={'Create collection'} para={'Click here to create an auction-model NFT collection'}/>   </Link>:
              <Link to={'/auction_house/create_single_auction'}>
              <AuctionCard imagePath={'Rectangle 25 (3).png'} title={'Single Auctions'} para={'Click here to  open Your wallet and list an item for auctions'}/>
              </Link>
              }
            
             
              
            </div>
  
            <div className="mobile-slider-btns">
             <div className="btn" onClick={()=>showmobileCard>0?setShowmobileCard(showmobileCard-1):''}><img src="/mobilearrowleft.svg" alt="" /></div>
             <div className="bars-container">
  
             <div className={showmobileCard===0?'bar active':'bar'}></div>
             <div  className={showmobileCard===1?'bar active':'bar'}></div>
             <div  className={showmobileCard===2?'bar active':'bar'}></div>
              
             </div>
             <div className="btn" onClick={()=>showmobileCard<2?setShowmobileCard(showmobileCard+1):''}><img src="/mobilearrowright.svg" alt="" /></div>
            </div>
           </div>
      </div>
  
    )

  }


