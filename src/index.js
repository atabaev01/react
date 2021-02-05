import React from "react"
import ReactDOM from "react-dom"
import Header from "./component/header"
import Main from "./component/main"
import Footer from "./component/footer"
import Todu from "./component/todu"


// const Header = () => {
//     return <header><nav></nav></header>
// } 

// const Main = () => {
//     return <main><h1>Hello</h1></main>
// }
// const Footer = () => {
//     return <footer></footer>
// }
//  const Nav = () => {
//      return <nav></nav>
//  }


ReactDOM.render(
    <div>
        <Header/>
        <Main/>
        <Todu/>
        <Footer/>
        
        
    </div>
,document.getElementById("root"))

