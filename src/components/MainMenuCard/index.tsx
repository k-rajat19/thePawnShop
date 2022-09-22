import React,{useState} from 'react'


type imageData={
  
    imagePath:string,
  
    title?:string,
    para?:string,
      
}
type MainMenuCardProps={

  data:imageData[]
}

export default function MainMenuCard({data}:MainMenuCardProps) {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="main-menu-card">
         <div className="main-menu-card-inner-wrapper">
          <div className="image-container">
            {
              

                  <img src={data[activeTab].imagePath} alt="" />
                

              }
            

          </div>
           <div className="text-container">
            <div className="title">Announcment</div>
            <div className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue mauris scelerisque nunc, diam, in vel massa suspendisse vitae. Sed .</div>
           </div>
           <div className="toggle-btn-container">
           {
              data.map((value,index)=>{
                return(

                  <div className={activeTab==index?"toggle-btn active":'toggle-btn'} key={index} onClick={()=>setActiveTab(index)}>

                  </div>
                )

              })
            }
            
       
           </div>
         </div>
    </div>
  )
}

MainMenuCard.defaultProps={
  data:[
    {
      imagePath:'Rectangle 22.png'

    },
    {
      imagePath:'Rectangle 22.png'
    },
    {
      imagePath:'Rectangle 22.png'
    }
  ]
  
}