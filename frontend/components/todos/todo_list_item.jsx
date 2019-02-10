import React from 'react';

class TodoListItem extends React.Component{
    constructor(props){
        super(props);
        this.handleClickDelete = this.handleClickDelete.bind(this);
        this.handleClickDone = this.handleClickDone.bind(this);
        this.toggleDoneState = this.toggleDoneState.bind(this);
    }

    handleClickDelete(e){
        this.props.removeTodo(this.props.todo.id);
    }

    handleClickDone(e){
        let doneToggle = this.toggleDoneState(this.props.todo.done);
        const updatedTodo = {
            id: this.props.todo.id,
            title: this.props.todo.title,
            body: this.props.todo.body,
            done: doneToggle
        }
        this.props.receiveTodo(updatedTodo)
        console.log(this.props.todo.done);
    }

    toggleDoneState(prevState){
        if(prevState){
            return false;
        }else{
            return true;
        }
    }

    render(){
        return (
            <div>
                <li >{this.props.todo.title}</li>
                <button onClick={this.handleClickDone}>
                {
                    this.props.todo.done ? "Completed" : "Incomplete"
                }
            </button>
                <button onClick={this.handleClickDelete}>Remove</button>
            </div>
            )
    }



}

export default TodoListItem;