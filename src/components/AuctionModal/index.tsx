import React ,{useState}from 'react'
import Button from '../Button'
import TwistedBorder from '../TwistedBorder'
import { useTimer } from 'react-timer-hook';
// import SelectedNFT from './SelectedNFT'

const BidButtonStyles:React.CSSProperties={
  width:'100%',
  height:'47px',
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
const AmountButtonStyles:React.CSSProperties={
  width:'100%',
  height:'47px',
  backgroundColor:'#000000;',
  border:'1px solid rgba(53, 53, 53, 1)',
  color:'#515151',
  fontSize:'14px',
  outline:'none',
  cursor:'pointer',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:'4px',
  marginTop:'20px'

}
const MintButtonStyles:React.CSSProperties={
  width:'100%',
  height:'47px',
  backgroundColor:'#1F1F1F',
  border:'none',
  color:'#474747',
  fontSize:'18px',
  outline:'none',
  cursor:'pointer',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:'4px',
  marginTop:'20px'

}

export default function AuctionModal() {
  const [timeUp, setTimeUp] = useState(false);
  const expiryTimestamp= new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 1000000);
  const {
    seconds,
    minutes,
    hours,
  } = useTimer({ expiryTimestamp, onExpire: () => setTimeUp(true) });

  return (
    <div className="auction-modal">
        <div className="inner-wrapper">
        <div className="close-section">
            <img src="./close.png" alt="" />

        </div>
        <div className="nft-details-container">
            <div className="timer-container">
                <img src="./clock.svg" alt="" />
                {
              timeUp? <div className="time-up">Time Up!!!</div> :
                <span><span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span></span>
                }
            </div>
            <div className="heading">You’re bidding for</div>
            <div className="nft-container">
            <div className="selected-nft">
     <div className="nft-info">
         <div className="image-container"></div>
       <div className="other">
        <span>#1234</span>
        <span>Iamacollection</span>
       </div>
     </div>
    </div>
    <div className="bid">
        <span className='item-1'>Latest bid <img src="./bid.svg" alt="" /></span>
        <span className='item-2'>$17.8</span>
    </div>
    <div className="works">
    <span className='item-1'>How it works? <img src="./warnbluelogo.svg" alt="" /></span>
        <span className='item-2'>Collection Auction</span>
    </div>
            </div>
            <TwistedBorder/>{
              timeUp? <Button childern={'Mint'} styles={BidButtonStyles}/>:
              <>
              <Button childern={'Enter bid amount'} styles={AmountButtonStyles}/>
              <Button childern={'Place a bid'} styles={BidButtonStyles}/>
              <Button childern={'You cannot mint until timer up'} styles={MintButtonStyles}/>
              </>
            }
            
        </div>

        </div>
    </div>
  )
}

