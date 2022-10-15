import React from 'react'

declare interface ButtonProps{
    
        childern?:React.ReactNode;
        styles?:React.CSSProperties;
        className?:string
        OnClick?:React.MouseEventHandler
    
}
export default function Button({childern,className,styles,OnClick=()=>{}}:ButtonProps) {   

  
  return (
     <div className={`button ${className}`} style={styles} onClick={OnClick}>
     {childern}
     </div>
  )
}
