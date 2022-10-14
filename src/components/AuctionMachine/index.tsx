import React,{useState,useEffect} from 'react'
import Button from '../Button'
import {SelectorButtonStyles,BidButtonStyles,StakeButtonStyles} from './ButtonStyles'
import TwistedBorder from '../TwistedBorder'

type Collection={
    
        collectionImage:React.ReactNode ,
        Nfts:React.ReactNode[] 
    
}

type BuyerMachineProps={
    collections:Collection[] 
}
    



const nftDefaultData=
[
  
    {
        collectionImage: '',
        Nfts:['','','','','','','','','']
    },
    {
        collectionImage: '',
        Nfts:['','','','','','','','','']
    },
    {
        collectionImage: '',
        Nfts:['','','','','','','','','']
    },
    {
        collectionImage: '',
        Nfts:['','','','','','','','','']
    },
    {
        collectionImage: '',
        Nfts:['','','','','','','','','']
    },
    {
        collectionImage: '',
        Nfts:['','','','','','','','','']
    },
    {
        collectionImage: '',
        Nfts:['','','','','','','','','']
    },
    {
        collectionImage: '',
        Nfts:['','','','','','','','','']
    },
    {
        collectionImage: '',
        Nfts:['','','','','','','','','']
    },
    {
        collectionImage: '',
        Nfts:['','','','','','','','','']
    },
    {
        collectionImage: '',
        Nfts:['','','','','','','','','']
    },
    {
        collectionImage: '',
        Nfts:['','','','','','','','','']
    }
]

export default function AuctionMachine({collections}:BuyerMachineProps):JSX.Element {
  
   
    const [showNfts, setShowNfts] = useState<number>(-1);
    const [NFTDefaultData, setNFTDefaultData] = useState<any>(nftDefaultData)
    const [selectedCollection, setSelectedCollection] = useState(0);

    const collectionClickHandler=(index:number):void=>{
        if(index<=collections.length-1){
            setShowNfts(index);
            setSelectedCollection(index);
        }
    }

    if(NFTDefaultData.length<collections.length){
        setNFTDefaultData(collections)
    }
    
  


  return (
    <div className="auction-machine">
        <div className="auction-machine-inner-wrapper">
           <div className="heading">{'Auction House'}</div>
            <div className="selector">
                <TwistedBorder/>
                <div className="selector-inner-wrapper">                    
                    <Button childern={<img src="/whitearrowleft.svg" alt="" />} styles={SelectorButtonStyles} />
                     <div className="btn-text">Hottest Auctions</div>
                    <Button childern={<img src="/rightarrowwhite.svg" alt="" />} styles={SelectorButtonStyles} />
                </div>
                <TwistedBorder/>
            </div>
            <div className="nfts-container">
               {
                
                NFTDefaultData.map((value:any,index:number)=>{
                    return(
                        <div className={index===selectedCollection?`collection collection-active`:'collection'} key={index} onClick={()=>{collectionClickHandler(index)}}>
                            {collections.map((value,collectionsindex)=>{
                                return(
                                   index===collectionsindex?
                                    <div className="image-container" key={collectionsindex}>
                                        {value.collectionImage}
                                    </div>:null
                                )
                            })}
                           
                         
                        </div>
                    )
                })
            }
            </div>
            <div className="buy-section">
                <TwistedBorder/>
                <div className="inner-wrapper">

                <div className="left-section">
                    <div className="ls-inner-wrapper">
                   <div>#1234</div>
                   <div>Iamacollection</div>

                    </div>
                    <Button childern={'Bid'}  styles={BidButtonStyles}/>
                </div>
                {/* <div className="border-mobile-wrapper">

                <TwistedBorder/>
                </div> */}
                
                <div className="right-section">
                    <div className="price">
                        <span>Starting price <img src="/blackwarnlogo.svg" alt="" /></span>
                        <span>$8.0</span>
                    </div>
                    <div className="bid">
                    <span>Highest bid <img src="/blackbid.svg" alt="" /></span>
                        <span>$8.0</span>
                    </div>
                    <TwistedBorder/>
                    <div className="time-left">
                    <span>Time left<img src="/timeleft.svg" alt="" /></span>
                        <span>24hrs:30mins:40secs</span>

                    </div>
                     <TwistedBorder/>
                </div>
                </div>
                
            </div>
           
        </div>
    </div>
  )
}

AuctionMachine.defaultProps={
    collections:[
        {
            collectionImage: <DefaultImage/>,
            Nfts:[ <DefaultImage/>, <DefaultImage/>, <DefaultImage/>, <DefaultImage/> ,<DefaultImage/> ,<DefaultImage/> ,<DefaultImage/> ,<DefaultImage/>]
        },
        {
            collectionImage: <DefaultImage/>,
            Nfts:[ <DefaultImage/>, <DefaultImage/>, <DefaultImage/>, <DefaultImage/> ,<DefaultImage/> ,<DefaultImage/> ,<DefaultImage/> ,<DefaultImage/>]
        },
        {
            collectionImage: <DefaultImage/>,
            Nfts:[ <DefaultImage/>, <DefaultImage/>, <DefaultImage/>, <DefaultImage/> ,<DefaultImage/> ,<DefaultImage/> ,<DefaultImage/> ,<DefaultImage/>]
        },
        {
            collectionImage: <DefaultImage/>,
            Nfts:[ <DefaultImage/>, <DefaultImage/>, <DefaultImage/>, <DefaultImage/> ,<DefaultImage/> ,<DefaultImage/> ,<DefaultImage/> ,<DefaultImage/>]
        },
        {
            collectionImage: <DefaultImage/>,
            Nfts:[ <DefaultImage/>, <DefaultImage/>, <DefaultImage/>, <DefaultImage/> ,<DefaultImage/> ,<DefaultImage/> ,<DefaultImage/> ,<DefaultImage/>]
    },
        {
            collectionImage: <DefaultImage/>,
            Nfts:[ <DefaultImage/>, <DefaultImage/>, <DefaultImage/>, <DefaultImage/> ,<DefaultImage/> ,<DefaultImage/> ,<DefaultImage/> ,<DefaultImage/>]
    }
    ]
}

function DefaultImage(){
    return(
        <img src="../../public/Rectangle 32.png" alt="" />
        
    )

}
