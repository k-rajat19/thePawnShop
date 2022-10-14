import React ,{useState}from 'react'
import ShopInterfaceCard from '../../../components/ShopInterfaceCard'
import BuyPortal from '../BuyPortal';

export default function ShopInterface() {
  const [showmobileCard, setShowmobileCard] = useState(1);
  const [activeCard, setActiveCard] = useState<string|null>(null);


  
    return (
      <div className="shop-interface">
           <div className="shop-interface-inner-wrapper">
            <div className="heading-container">
              <div className="heading">Welcome to the shop</div>
              <div className="sub-heading">Pick from one of the options below</div>
            </div>
            <div className="cards-container">
              <ShopInterfaceCard imagePath={['Rectangle 24.png']} title={'Sell'} onClick={()=>setActiveCard('Sell')}/>
              <div className="shop-interface-card-wrapper">
              <ShopInterfaceCard imagePath={['Rectangle 25.png','Rectangle 25.png']} title={'Buy'} onClick={()=>setActiveCard('Buy')}/>

              </div>
              <ShopInterfaceCard imagePath={['Rectangle 26.png']} title={'Earn'} onClick={()=>setActiveCard('Earn')}/>
            </div>
            <div className="cards-container-mobile">
              {showmobileCard===0?  <ShopInterfaceCard imagePath={['Rectangle 24.png']} title={'Sell'} onClick={()=>setActiveCard('Sell')}/>:showmobileCard===1? <ShopInterfaceCard imagePath={['Rectangle 25.png','Rectangle 25.png']} title={'Buy'} onClick={()=>setActiveCard('Buy')}/>:<ShopInterfaceCard imagePath={['Rectangle 26.png']} title={'Earn'} onClick={()=>setActiveCard('Earn')}/>}
            
             
              
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

