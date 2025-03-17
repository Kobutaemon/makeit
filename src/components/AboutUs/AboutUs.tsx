import React from 'react'
import './AboutUs.css'

function AboutUs() {
  return (
    <div className="about-us">
      <section className="about-us-title">
        <h1>
          <span>&lt; </span>
          About us
          <span> /&gt;</span>
        </h1>
      </section>
      <section className="about-us-main">
        <p>
          MakeITは横浜、<br />情報科学専門学校で<br />アプリ・サービス開発をメインに行う<br /><span>”ものづくり”サークル</span>です。
        </p>
        <div className="proxy-img" />
      </section>
    </div>
  )
}

export default AboutUs