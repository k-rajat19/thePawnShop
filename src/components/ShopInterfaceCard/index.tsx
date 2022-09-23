import React,{useState} from 'react'

type ShopInterfaceCardProps={
    imagePath:string[];
    title:string

}

export default function ShopInterfaceCard({imagePath,title}:ShopInterfaceCardProps):JSX.Element {
const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="shop-interface-card">
         <div className="card-inner-wrapper">
             <div className="heading">{title}</div>
             <div className="image-container">
             {
              

              <img src={imagePath[activeTab]} alt="" />
            

          }
        
             </div>
             {
                imagePath.length>1?

             <div className="toggle-btn-container">
           {
              imagePath.map((value,index)=>{
                return(

                  <div className={activeTab==index?"toggle-btn active":'toggle-btn'} key={index} onClick={()=>setActiveTab(index)}>

                  </div>
                )

              })
            }
            
       
           </div>:''
             }
         </div>
    </div>
  )
}

ShopInterfaceCard.defaultProps={

      
        imagePath:['Rectangle 24.png']
  
      

    
    
  }