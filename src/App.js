
/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */



import React, { Component } from "react"

function Header(){
  return (
    <header>
      <nav>
        <img src = "./react-logo.png" width = "2%" />
      </nav>
    </header>
  )
}

function MainContent(){
  return (
    <div>
      <h1>Why I'm Excited to Start React</h1>
      <ol>
        <li>Closer to getting a job that pays well!</li>
        <li>Able to make modern apps</li>
        <li>Can make professional websites and apps for clients</li>
      </ol>
    </div>

  )
}

function Footer(){
  return (
    <footer>
    <p>© 2022 Smalls development. All rights reserved.</p>
  </footer>
  )
}

function App(){
  return(
    <div>
      <Header />
      <MainContent />
      <Footer />

    </div>
  )

}

export default App
export { Header, MainContent, Footer }

