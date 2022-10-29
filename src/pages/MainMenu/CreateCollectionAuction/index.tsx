import React, { useState } from 'react'
import Button from '../../../components/Button'
import NavBar from '../../../components/NavBar'
import TwistedBorder from '../../../components/TwistedBorder'

const data = ['', '', '', '', '', '', '', '', '', '']
const CreateAuctionBtnStyle = {
  height: '47px',
  width: '100%',
  backgroundColor: '#FFFFFF',
  border: 'none',
  color: '#000000',
  fontSize: '18px',
  outline: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const BackButtonStyle = {
  height: '32px',
  width: '96px',
  backgroundColor: 'transparent',
  border: '1px solid rgba(255, 255, 255, 1)',
  color: 'white',
  fontSize: '12px',
  outline: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
const NextButtonStyle = {
  height: '32px',
  width: '96px',
  backgroundColor: '#FFFFFF',
  border: 'none',
  color: '#000000',
  fontSize: '18px',
  outline: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
export default function CreateCollectionAuction() {
  const [showForm, setshowForm] = useState(false)
  return (
    <div className="create-collection-auction">
      <NavBar chest={true} />
      <div className="create-collection-auction-inner-wrapper">
        <div className="create-auction-machine">
          <div className="inventory-section">
            <div className="heading-container">
              <span>Create Collection Auction</span>
              <span>Please upload picture below</span>
            </div>
            <TwistedBorder />
            <div className="upload-section">
              <label htmlFor="upload">
                <img src="/fadeplus.svg" alt="" />
                <div className="text">
                  <span>Click to Upload file</span>
                  <span>
                    PNG, GIF, WEBP, MP4 or MP3.
                    <br /> Max 100mb.
                  </span>
                </div>
              </label>
              <input type="file" id="upload" />
            </div>
          </div>
          <VerticalBorder />
          <div className="create-section">
            <div className="close-btn-container">
              <img src="/close.png" alt="" />
            </div>
            <div className="connected-wallet-section">
              <div className="heading">Connected wallet</div>
              <div className="connected-wallet-container">
                <div className="logo">
                  <img src="" alt="" />
                </div>
                <div className="info">
                  <span>0008ssnxnxisks</span>
                  <span>Metamask</span>
                </div>
              </div>
            </div>
            <form action="#">
              <label htmlFor="price">Start price</label>
              <input
                type="text"
                id="price"
                placeholder="Enter Starting price"
              />

              <div className="time">
                <div className="time-heading">
                  How long do you want this to run?
                </div>
                <div className="time-container">
                  <span className="time-btn active">12hrs</span>
                  <span className="time-btn">24hrs</span>
                  <span className="time-btn">48hrs</span>
                  <input
                    type="text"
                    className="time-input"
                    placeholder="Custom"
                  />
                </div>
              </div>

              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Name will be taken from NFt"
              />

              <label htmlFor="textarea">Description</label>
              <textarea
                name=""
                id="textarea"
                placeholder="Please drop a brief description"
              />

              <Button
                childern={'Create Auction'}
                styles={CreateAuctionBtnStyle}
              />
            </form>
          </div>
        </div>

        <div className="create-auction-machine-mobile">
          {showForm ? (
            <div className="create-section">
              <div className="heading-container">
                <span>Create Collection Auction</span>
                <span>Please Fill Form Field</span>
              </div>
              <TwistedBorder />
              <div className="connected-wallet-section">
                <div className="heading">Connected wallet</div>
                <div className="connected-wallet-container">
                  <div className="logo">
                    <img src="" alt="" />
                  </div>
                  <div className="info">
                    <span>0008ssnxnxisks</span>
                    <span>Metamask</span>
                  </div>
                </div>
              </div>
              <form action="#">
                <label htmlFor="price">Start price</label>
                <input
                  type="text"
                  id="price"
                  placeholder="Enter Starting price"
                />

                <div className="time">
                  <div className="time-heading">
                    How long do you want this to run?
                  </div>
                  <div className="time-container">
                    <span className="time-btn active">12hrs</span>
                    <span className="time-btn">24hrs</span>
                    <span className="time-btn">48hrs</span>
                    <input
                      type="text"
                      className="time-input"
                      placeholder="Custom"
                    />
                  </div>
                </div>

                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name will be taken from NFt"
                />

                <label htmlFor="textarea">Description</label>
                <textarea
                  name=""
                  id="textarea"
                  placeholder="Please drop a brief description"
                />

                <Button childern={'Create Auction'} className={'create-btn'} />
              </form>
              <div className="btn-container">
                <Button
                  childern={'Back'}
                  styles={BackButtonStyle}
                  OnClick={() => setshowForm(false)}
                />
              </div>
            </div>
          ) : (
            <div className="inventory-section">
              <div className="heading-container">
                <span>Create Collection Auction</span>
                <span>Please upload picture below</span>
              </div>
              <TwistedBorder />
              <div className="upload-section">
                <label htmlFor="upload">
                  <img src="/fadeplus.svg" alt="" />
                  <div className="text">
                    <span>Click to Upload file</span>
                    <span>
                      PNG, GIF, WEBP, MP4 or MP3.
                      <br /> Max 100mb.
                    </span>
                  </div>
                </label>
                <input type="file" id="upload" />
              </div>
              <TwistedBorder />
              <div className="btn-container">
                <Button childern={'Back'} className={'back-btn'} />
                <Button
                  childern={'Next'}
                  className={'next-btn'}
                  OnClick={() => setshowForm(true)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function VerticalBorder() {
  return <div className="vertical-border"></div>
}
