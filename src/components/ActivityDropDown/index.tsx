import React,{useState} from 'react'
import TwistedBorder from '../TwistedBorder';





export default function ActivityDropDown() {
    const [clicked  , setclicked  ] = useState<boolean>(false);
  return (
    <>
    { !clicked?
    <div className="activity-dropdown" onClick={()=>setclicked(true)}>
         <div className="dropdown-inner-wrapper">
             <span className='heading'>Click to see Activity</span>
             <img src="./downarrow.svg" className='down-arrow' alt="" />
         </div>    
    </div>:
    <div className="dropdown-items-container" onClick={()=>setclicked(false)}>
        <div className="inner-wrapper">
        <div className="heading-container">
        <div className="heading">Click to Hide Activity</div>
         <img src="./uparrow.svg" className='up-arrow' alt="" />
        </div>
       <TwistedBorder/>
       <div className="items-wrapper">
        <div className="activity-container">
            <div className="ac-heading">Today Activity</div>
            <div className="ac-main">
                <div className="ac-item-wrapper">
                <div className="activity-item">
                    <span className='item-1'>@Daniel Placed a Bid of $8.0</span>
                    <span className='item-2'>Sep 19 7:30pm</span>
                </div>
                <div className="line-container"></div>

                </div>
                <div className="ac-item-wrapper">
                <div className="activity-item">
                    <span className='item-1'>@Daniel Placed a Bid of $8.0</span>
                    <span className='item-2'>Sep 19 7:30pm</span>
                </div>
                <div className="line-container"></div>

                </div>
                <div className="ac-item-wrapper">
                <div className="activity-item">
                    <span className='item-1'>@Daniel Placed a Bid of $8.0</span>
                    <span className='item-2'>Sep 19 7:30pm</span>
                </div>
                <div className="line-container"></div>

                </div>
              
            </div>
        </div>
        <div className="activity-container">
            <div className="ac-heading">Past Activity</div>
            <div className="ac-main">
                <div className="ac-item-wrapper">
                <div className="activity-item">
                    <span className='item-1'><img src="" alt="" />
                    Auction for NFT begun
                    </span>
                    <span className='item-2'>Sep 19 7:30pm</span>
                </div>
                <div className="line-container"></div>

                </div>
                <div className="ac-item-wrapper">
                <div className="activity-item">
                    <span className='item-1'>@Daniel Placed a Bid of $8.0</span>
                    <span className='item-2'>Sep 19 7:30pm</span>
                </div>
                <div className="line-container"></div>

                </div>
                <div className="ac-item-wrapper">
                <div className="activity-item">
                    <span className='item-1'>@Daniel Placed a Bid of $8.0</span>
                    <span className='item-2'>Sep 19 7:30pm</span>
                </div>
                <div className="line-container"></div>

                </div>
               
            </div>
        </div>
       
       </div>

        </div>
</div> 

}
</>
  )
}
