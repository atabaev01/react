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

    render() {
        let className = this.state.important ? "list-group-item todo-item active" : "todo-item list-group-item"
        const spanClassName = " done"
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
        render (){
            const className
        }
    
        return (
            <li className={className}>
                <span onClick={this.onClick}  className={spanClassName}>{this.props.children}</span>
                <span className="btn btn-success">Done</span>
            </li>
            
        );
    }
};

export default Todoitem;