import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-logo-content">
        <h2>MakeIT</h2>
        <p>supported by</p>
        <h3>情報科学専門学校</h3>
      </div>
      <div className="footer-nav">
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Activity</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="footer-adress">
          <span>Adress　</span>
          <span>〒221-0835  神奈川県横浜市神奈川区鶴屋町2-17 相鉄岩崎ビル</span>
        </div>
      </div>
    </div>
  )
}

export default Footer