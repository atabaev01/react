import React, { Component } from 'react';

class Todoitem extends Component {
    state = {
        important: false
    };
    updateState = (state) => {
        return{
            important: !state.important
        }
    }

    postUpdate = ()=>{
        console.log(this.state.important);
    }


    onClick = () => {
        this.setState(this.updateState, this.postUpdate)
    }

    onClickDone = () =>{
        this.setState((state)=>{
            return {done: !state.done}
        })
    }

    render() {
        let className = this.state.important ? "list-group-item todo-item active" : "todo-item list-group-item"
        const spanClassName = this.state.done ? "text done":"text"
        return (
            <li className={className}>
                <span onClick={this.onClick}  className={spanClassName}>{this.props.children}</span>
                <button onClick={this.onClickDone} className="btn btn-success">Done</button>
            </li>
            
        );
    }
};

export default Todoitem;