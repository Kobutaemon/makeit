import './AchievementCard.css'

function AchievementCard(props: {title: string, description: string }) { //写真のデータが来たらpropsに「img_url: string」を追加して差し替える。
  return (
    <div className='swiper-container'>
      <div className="achievement-card">
        <div className="dummy-img"></div>
        <h3 className="achievement-card-title">
          {props.title}
        </h3>
        <p className="achievement-card-description">
          {props.description}
        </p>
      </div>
    </div>
  )
}

export default AchievementCard