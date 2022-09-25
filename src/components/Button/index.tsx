import React from 'react'

declare interface ButtonProps{
    
        childern?:React.ReactNode;
        styles?:React.CSSProperties;
        OnClick?:React.MouseEventHandler
    
}
//ToDo: Manage styles for mobile devices
export default function Button({childern,styles,OnClick=()=>{}}:ButtonProps) {   

  
  return (
     <div className="button" style={styles} onClick={OnClick}>
     {childern}
     </div>
  )
}

Button.defaultProps ={
    styles:{
        height:'64px',
        width:'290px',
        backgroundColor:'#FFFFFF',
        border:'none',
        color:'#000000',
        fontSize:'24px',
        outline:'none',
        cursor:'pointer',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
        
    }
}
