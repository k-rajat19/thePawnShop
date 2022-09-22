import React from 'react'

declare interface ButtonProps{
    
        childern?:React.ReactNode;
        styles?:React.CSSProperties
    
}
export default function Button(props:ButtonProps) {   

  
  return (
     <div className="button" style={props.styles}>
     {props.childern}
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
