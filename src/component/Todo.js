import React, { Component } from 'react';
import Todoitem from './Todoitem';

class Todo extends Component {


    state = {
        todolist:[
            {name:"Book", important: true, done:false},
            {name:"Cook",important:false, done:true}, 
            {name:"Sleep",important:true, done:false},
            {name:"Play",important:false, done:true}
            ]
    }


    changeImportant = (name)=> () =>{
        console.log('this change '+name);
    }

    render() {
        return (
            <ul className="list-group mt-2">
                {this.state.todolist.map((lub)=>{
                    return (
                    <Todoitem changeImportant={this.changeImportant(lub.name)} important={lub.important} done={lub.done}>
                        {lub.name}
                    </Todoitem>)
                })}
            </ul>
        );
    }
};

export default Todo;