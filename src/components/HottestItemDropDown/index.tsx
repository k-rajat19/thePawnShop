import React,{useState} from 'react'
import TwistedBorder from '../TwistedBorder';



type item={
    collectionImage:React.ReactNode,
    collectionName:string,
    price:string,
    priceUp?:string,
    priceDown?:string
}

type HottestItemDropDownProps={
    items:item[] 
}

const TestItems=[
    {
    collectionImage:'',
    collectionName:'',
    price:'',
    priceUp:'',
},
    {
    collectionImage:'',
    collectionName:'',
    price:'',
    priceDown:'',
},
    {
    collectionImage:'',
    collectionName:'',
    price:'',
    priceUp:'',
},
]

export default function HottestItemDropDown({items}:HottestItemDropDownProps) {
    const [clicked  , setclicked  ] = useState<boolean>(false);
  return (
    <>
    { !clicked?
    <div className="hottest-item-dropdown" onClick={()=>setclicked(true)}>
         <div className="dropdown-inner-wrapper">
             <span className='heading'>Click to see Hottest items</span>
             <img src="/downarrow.svg" className='down-arrow' alt="" />
         </div>    
    </div>:
    <div className="activity-dropdown-items-container" onClick={()=>setclicked(false)}>
        <div className="inner-wrapper">
        <div className="heading-container">
        <div className="heading">Hottest items</div>
         <img src="/uparrow.svg" className='up-arrow' alt="" />
        </div>
       <TwistedBorder/>
       <div className="items-container">
        {
            // replace TestItems with items-prop when it is available
          TestItems.map((value,index)=>{
            return(

            <div className="item" key={index}>
                <div className="left-section">
                    <span>{index+1}</span>
                    
                        <img src="" alt="" />
                        <span>Pawnsbolls</span>
                    
                </div>
                <div className="right-section">
                    <span>$1.24</span>
                
                    <span >3.30%</span>
                    
                    
                        <img  src="/greenuparrow.svg" alt="" />
                    
                    
                        {/* <img src="/redarrow.svg" alt="" /> */}
                    

            

                    
                </div>
            </div>
            )
          })
        }
       </div>

        </div>
</div> 

}
</>
  )
}
