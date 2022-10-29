import React from 'react'
import { useState } from 'react'
import Button from '../Button'
import Tab from './Tab'

const TabData = [
  {
    title: 'Enter the shop',
    link: '/shop_interface',
  },
  {
    title: 'Get $RED',
    link: '',
  },
  {
    title: 'Auction house',
    link: '/auction_house',
  },
  {
    title: 'What is the pawn shop?',
    link: '',
  },
  {
    title: 'garbage collector',
    link: '',
  },
]

type SideBarProps = {
  setTab: React.Dispatch<React.SetStateAction<number | null>>
}

export default function SideBar({ setTab }: SideBarProps): JSX.Element {
  const onClick = (index: number) => {
    setActiveTab(index)
    setTab(index)
  }

  const [activeTab, setActiveTab] = useState<number | null>(null)
  return (
    <div className="side-bar">
      <div className="btn-container">
        <Button childern={'Connect Wallet'} />
      </div>

      <div className="side-bar-tabs-container">
        {TabData.map((value, index) => {
          return (
            <Tab
              tabData={value}
              index={index}
              key={index}
              activeIndex={activeTab}
              OnClick={() => onClick(index)}
            />
          )
        })}
      </div>
    </div>
  )
}
