import React from 'react'
import './Contact.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import JoinButton from '../JoinButton/JoinButton'

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-title">
        <SectionTitle title="Contact" />
      </div>
      <div className="contact-sen">
        <p>Make ITはMake IT は初心者・やる気のある人大歓迎！</p>
        <p>お仕事のご依頼もお待ちしています。</p>
        <p>仮入部・仕事のご依頼は下記のリンクから！</p>
      </div>
      <div className="contact-button">
        <JoinButton />
      </div>
    </div>
  )
}

export default Contact