import './index.css'

const Navbar = props => {
  const {topScore, timeRemaining} = props

  return (
    <nav className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="score-time-container">
        <li className="list">
          <p className="score">
            score:<span className="highlight"> {topScore}</span>
          </p>
        </li>
        <li className="list timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="highlight">{timeRemaining} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
