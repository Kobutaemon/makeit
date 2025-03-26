import React from 'react'
import './AboutUs.css'
import SectionTitle from '../SectionTitle/SectionTitle'

function AboutUs() {
  return (
    <div className="about-us">
      <section className="about-us-title">
        <SectionTitle title="About Us" />
      </section>
      <section className="about-us-main">
        <div className="proxy-img" />
        <p>
          MakeITは横浜、<br />情報科学専門学校で<br />アプリ・サービス開発をメインに行う<br /><span>”ものづくり”サークル</span>です。
        </p>
      </section>
    </div>
  )
}

export default AboutUs