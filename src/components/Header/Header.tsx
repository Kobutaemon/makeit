import JoinButton from '../JoinButton/JoinButton'
import './Header.css'

function Header() {
  return (
    <header>
      <img src="./assets/makeit_logo.png" alt="MakeITのロゴ" />
      <nav>
        <ul>
          <li><a href="#">News</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">GitHub</a></li>
        </ul>
        <JoinButton />
      </nav>
    </header>
  )
}

export default Header