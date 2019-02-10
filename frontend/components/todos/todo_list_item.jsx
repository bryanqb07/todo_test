import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container'


class TodoListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {detail: false};
        this.handleClickDone = this.handleClickDone.bind(this);
        this.toggleDoneState = this.toggleDoneState.bind(this);
        this.toggleDetail = this.toggleDetail.bind(this);
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
    }

    toggleDoneState(prevState){
        if(prevState){
            return false;
        }else{
            return true;
        }
    }

    toggleDetail(){
        if(this.state.detail){
            this.setState({detail: false});
        }else{
            this.setState({detail: true});
        }
    }

    render(){
        if(this.state.detail){
            return(
                <div>
                    <li onClick={this.toggleDetail}>{this.props.todo.title}</li>
                    <button onClick={this.handleClickDone}>
                    {
                        this.props.todo.done ? "Completed" : "Incomplete"
                    }
                    </button>
                    <TodoDetailViewContainer todo={this.props.todo} /> 
                    <br/><br/>
                </div>
            )
        }else{
            return (
                <div>
                    <li onClick={this.toggleDetail} >{this.props.todo.title}</li>
                    <button onClick={this.handleClickDone}>
                        {
                            this.props.todo.done ? "Completed" : "Incomplete"
                        }
                    </button>
                </div>
            )
        }
        
    }



}

export default TodoListItem;