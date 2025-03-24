import React from 'react'
import './Achievements.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import AchievementCard from '../AchievementCard/AchievementCard'

function Achievements(){
  return (
    <div className='achievements'>
      <div className="achievements-title">
        <SectionTitle title='Achievements' />
      </div>
      <div className="achievements-content">
        <AchievementCard title='Test Achievement' description='This is the test achievementThis is the test achievementThis is the test achievementThis is the test achievementThis is the test achievement'/>
      </div>
    </div>
  )
}

export default Achievements