

function Header(){
    return (
      <header className = "header">
        <nav className = "navigation">
          <img src = "./react-logo.png" className = "logo" />
          <ul className = "nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    )
  }

  export default Header