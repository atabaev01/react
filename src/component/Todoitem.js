import React, { Component } from 'react';

class Todoitem extends Component {
    // state = {
    //     important: false,
    //     done: false
    // }
    // updateState = (state) => {
    //     return{
    //         important: !state.important
    //     }
    // }

    // postUpdate = ()=>{
    //     console.log(this.state.important);
    // }


    // onClick = () => {
    //     this.setState(this.updateState, this.postUpdate)
    // }

    // onClickDone = () =>{
    //     this.setState((state)=>{
    //         return {done: !state.done}
    //     })
    // }

    render() {
        
        let className = this.props.important ? "list-group-item todo-item active" : "todo-item list-group-item"
        const spanClassName = this.props.done ? "text done":"text"
        return (
            <li className={className}>
                <span onClick={this.props.changeImportant}  className={spanClassName}>{this.props.children}</span>
                <button onClick={this.props.changeDone} className="btn btn-success">Done</button>
                <button onClick={this.props.deleteItem} href="#" className="btn btn-danger"><i className="fa fa-trash"></i></button>
            </li>
            
        );
    }
};

export default Todoitem;
