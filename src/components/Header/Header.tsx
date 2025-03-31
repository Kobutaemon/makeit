import JoinButton from '../JoinButton/JoinButton'
import './Header.css'

const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');

if (hamburger && menu) {
  hamburger.addEventListener('click', function(){
    menu.classList.toggle("open");
    hamburger.classList.toggle('active');
  });
}

function Header() {
  return (
    <header>
      <img src="./assets/makeit_logo.png" alt="MakeITのロゴ" />
      <nav className='menu'>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
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