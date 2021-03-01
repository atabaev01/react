import React, { Component } from 'react';
import AddForm from './AddForm';
import Todoitem from './Todoitem';

class Todo extends Component {


    state = {
        todolist: [
            { id: 10, name: "Book", important: true, done: false },
            { id: 20, name: "Cook", important: false, done: true },
            { id: 30, name: "Sleep", important: true, done: false },
            { id: 40, name: "Play", important: false, done: true }
        ]
    }

    addTodo = (todo) => {
        this.setState((state) => {
            return{
                todolist: [...state.todolist, todo]
            }
        })
    }


   

    // changeDone = (id) => () => {
    //     const todolist = this.state.todolist
    //     const todoIndex = todolist.findIndex((item)=> item.id === id)
    //     const todo = todolist[todoIndex]
    //     const newTodo = {...todo}
    //     newTodo.done = !newTodo.done

    //     const newTodoList = [
    //         ...todolist.slice(0, todoIndex),
    //         newTodo,
    //         ...todolist.slice(todoIndex+1),
    //     ]
    //     this.setState({
    //         todolist: newTodoList
    //     })
    // }

    changeDone = (id) => () =>{

        this.setState((state)=>{
            const newTodoList = [...state.todolist]
            const newTodo = newTodoList.find(item=>item.id===id)
            newTodo.done = !newTodo.done
            return {
                todolist: newTodoList
            }
        })
        
    }


    changeImportant= (id) => () =>{
        this.setState((state)=>{
        const newTodoList = [...state.todolist]
        const newTodo = newTodoList.find(item=>item.id===id)
        newTodo.important = !newTodo.important
        return{
            todolist: newTodoList
        }
        })
    }

    deleteItem = (id) => () => {
        const filtered = this.state.todolist.filter((item) => item.id !== id)
        this.setState({
            todolist: filtered
        })
    }
    render() {
        
        return ( 
            <div>
                 <AddForm addTodo={this.addTodo}/>
                    <ul className = "list-group mt-2">{
                        this.state.todolist.map((item) =>{
                                return ( < Todoitem 
                                    key={item.id}
                                    changeImportant = { this.changeImportant(item.id)}
                                    important = { item.important }
                                    changeDone = {this.changeDone(item.id)}
                                    done = { item.done }
                                    deleteItem = { this.deleteItem(item.id) }>
                                        { item.name }
                                        </Todoitem>)
                            })
                        }
                    </ul>
                </div>
            );
        }
    };

    export default Todo;