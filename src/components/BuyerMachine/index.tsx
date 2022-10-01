import React,{useState} from 'react'
import Button from '../Button'
import {SelectorButtonStyles,BuyButtonStyles,StakeButtonStyles} from './ButtonStyles'
import TwistedBorder from '../TwistedBorder'

type Collection={
    
        collectionImage:React.ReactNode ,
        Nfts:React.ReactNode[] 
    
}

type BuyerMachineProps={
    collections:Collection[] 
}
    
/** TODO: update this array data when collections array length exceeds 9 */
const NFTDefaultData=
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
        }
    ]

/**TODO: implements selector buttons functionality */


export default function BuyerMachine({collections}:BuyerMachineProps):JSX.Element {
    const [showNfts, setShowNfts] = useState<number>(-1);

    const [selectedCollection, setSelectedCollection] = useState(0);

  return (
    <div className="buyer-machine">
        <div className="buyer-machine-inner-wrapper">
           <div className="heading">{showNfts===-1?'Explore':"Iamacollection"}</div>
            <div className="selector">
                <TwistedBorder/>
                <div className="selector-inner-wrapper">                    
                    <Button childern={<img src="./btnarrowleft.svg" alt="" />} styles={SelectorButtonStyles}/>
                     <div className="btn-text">Buy</div>
                    <Button childern={<img src="./btnarrowright.svg" alt="" />} styles={SelectorButtonStyles}/>
                </div>
                <TwistedBorder/>
            </div>
            <div className="nfts-container">
               {
                showNfts===-1?
                NFTDefaultData.map((value:any,index:number)=>{
                    return(
                        <div className="collection" onClick={()=>{index<=collections.length-1?setShowNfts(index):''}}>
                            {collections.map((value,collectionsindex)=>{
                                return(
                                   index===collectionsindex?
                                    <div className="image-container" key={collectionsindex}>
                                        {value.collectionImage}
                                    </div>:<img src="./question.svg" alt="" key={collectionsindex} />
                                )
                            })}
                           
                         
                        </div>
                    )
                }):
                NFTDefaultData[showNfts].Nfts.map((value:any,index:number)=>{
                    return(
                        <div className="collection" key={index}>

                            { collections[showNfts].Nfts.length-1<index?<img src="./question.svg" alt="" key={index} />:
                                collections[showNfts].Nfts.map((value,collectionsindex)=>{
                                    return(
                                       index===collectionsindex?
                                       <div className="image-container" key={collectionsindex}>
                                          {value}
                                       </div>:null
                                    )
                                })

                            }
                          
                        
                       </div>
                    )

                })
                
               }
               
            </div>
            <div className="buy-section">
                <TwistedBorder/>
                <div className="inner-wrapper">

                <div className="left-section">
                   <div>#1234</div>
                   <div>Iamacollection</div>
                </div>
                <div className="right-section">
                    <Button childern={'Buy'}  styles={BuyButtonStyles}/>
                    <Button childern={'Stake'} styles={StakeButtonStyles}/>
                </div>
                </div>
                <TwistedBorder/>
            </div>
            <div className="bottom">
                <div className="inner-wrapper">
                <div>Value</div>
                <div>$9.00</div>

                </div>
                <TwistedBorder/>
            </div>
        </div>
    </div>
  )
}

BuyerMachine.defaultProps={
    collections:[
        {
            collectionImage: <DefaultImage/>,
            Nfts:[ <DefaultImage/>, <DefaultImage/>, <DefaultImage/>, <DefaultImage/> ,<DefaultImage/> ,<DefaultImage/> ,<DefaultImage/> ,<DefaultImage/>]
        }
    ]
}

function DefaultImage(){
    return(
        <img src="./Rectangle 32.png" alt="" />
    )

}
