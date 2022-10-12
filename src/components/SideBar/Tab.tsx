import React from 'react'
import {Link} from 'react-router-dom'


type TabProps={
    tabData:{
      title:string,
      link:string
    },
    activeIndex:number|null,
    index:number,
    OnClick:React.MouseEventHandler
}

export default function Tab({tabData,index, activeIndex,OnClick=()=>{}}:TabProps):JSX.Element {
  return (
    <Link to={tabData.link}>
    
    <div className={index===activeIndex?`side-bar-tab active`:'side-bar-tab'} onClick={OnClick}>
    <img className={index===activeIndex?'showArrow':'hideArrow'} src="/SideBarTab.svg" alt="" />
    {tabData.title}
    </div> 
    </Link>
  )
}
