import './Activity.css'
import SectionTitle from '../SectionTitle/SectionTitle'

function Activity() {
  return (
    <div className="activity-container">
      <SectionTitle title="Activity" />
      <div className="activity-contents">
        <div className="activity-text-wrapper activity-content">
          <p>毎週水曜日、放課後の15:40以降に活動しています。<br />必ず参加しなければいけないということはなく、バイトや就活、プライベートと両立しながら活動することができます。</p>
          <p>Discordをコミュニケーションツールとして使用しています。</p>
          <p>連絡・質問はもちろん、雑談・独り言などでも気軽に利用してください。</p>
        </div>
        <div className="activity-image-wrapper activity-content">
          <div className="activity-image">
            <div className="work-date">
              <h3>活動時間</h3>
              <div className="weekday">
                <span>日</span>
                <span>月</span>
                <span>火</span>
                <span>水</span>
                <span>木</span>
                <span>金</span>
                <span>土</span>
              </div>
              <p className='work-time'>放課後 15:40～</p>
            </div>
            <div className="using-tool">
              <h3>使用ツール</h3>
              <div className="tool-discord">
                <img src="src\assets\discord-logo-120.png" alt="Discordのロゴ" />
                <p>Discord</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity