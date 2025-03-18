import React from 'react'
import './AboutUs.css'
import SectionTitle from '../../SectionTitle/SectionTitle'

function AboutUs() {
  return (
    <div className="about-us">
      <section className="about-us-title">
        <SectionTitle text="About us" />
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