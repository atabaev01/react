import React, { Component } from "react"
import ReactDOM from "react-dom"
import App from "./component/App"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


// class Modal extends Component {

//     state = {
//         open:true
//     }

//     onClick = ()=> {
//         this.setState((state)=>{
//             return {open: !state.open}
//         })
//     }

//     render () {
//         return(
//             <div>
//                 <button onClick={this.onClick}>Click me</button>
//                 {this.state.open && <h1>Hi</h1>}
//             </div>
//         )
//     }
// }



ReactDOM.render(
    <App/>
,document.getElementById("root"))


