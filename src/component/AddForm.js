import React, { Component } from 'react';

class AddForm extends Component {

    state = {
        todo:""
    }

    onChange = (e) =>{
       
        this.setState({
            todo: e.target.value
        })
    }

    onSubmit = (e)=> {
        e.preventDefault()
        const todo = {
            id: Math.floor(Math.random()*1000),
            name: this.state.todo
        }
        this.props.addTodo(todo)
    }

   render() { 
        return (
            <form onSubmit={this.onSubmit} className='form-row m-0 flex-nowrap'>

                <input name="todo" onChange={this.onChange} className="form-control mr-3" type="text" />
                <button className="btn btn-primary" type="submit">Save</button>

            </form>
        );
    };
}

export default AddForm;