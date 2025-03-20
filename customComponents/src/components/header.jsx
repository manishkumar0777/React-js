import reactLogo from '../assets/react.svg'


export default function Header() {
  return (
      <header className="header">
          <nav>
            <img src={reactLogo} className="logo" alt="React logo" />
            <span>ReactFacts</span>
          </nav>
      </header>
  )
}