import React from 'react'
import JoinButton from '../JoinButton/JoinButton'
import './FirstView.css'

function FirstView() {
  return (
    <article>
      <div className="cover-section">
        <section className='intro-section'>
          <img src="./assets/makeit_logo.png" alt="MakeITのロゴ" />
          <h2>If we can try, we can Make IT exciting.</h2>
        </section>
        <section className="join-section">
          <h3>体験入部・案件依頼はこちらから</h3>
          <JoinButton />
        </section>
      </div>
    </article>
  )
}

export default FirstView