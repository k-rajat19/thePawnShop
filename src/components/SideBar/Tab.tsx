import React from 'react'


type TabProps={
    title:String,
    activeIndex:number|null,
    index:number,
    OnClick:React.MouseEventHandler
}

export default function Tab({title,index, activeIndex,OnClick=()=>{}}:TabProps):JSX.Element {
  return (
    <div className={index===activeIndex?`side-bar-tab active`:'side-bar-tab'} onClick={OnClick}>
    <img className={index===activeIndex?'showArrow':'hideArrow'} src="/SideBarTab.svg" alt="" />
    {title}
    </div> 
  )
}
