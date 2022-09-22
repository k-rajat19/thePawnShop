import React from 'react'


type ProgressBarProps={
  width:String;
}

export default function ProgressBar({width='1'}:ProgressBarProps):JSX.Element {

    const fillerStyles = {
        height: '100%',
        width: `${width}%`,
        backgroundColor:'#FFFFFF',
        transition: 'width 1s ease-in-out',
      }
  return (
    <div className="progress-bar-wrapper">
       <div className="lable">Now Loading...</div>
       <div className="progress-bar">
        <span style={fillerStyles}></span>
       </div>
    </div>
  )
}
