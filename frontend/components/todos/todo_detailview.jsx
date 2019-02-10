import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component{
    constructor(props){
        super(props);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    handleClickDelete(e) {
        this.props.removeTodo(this.props.id);
    }

    render(){
        return (
            <div>
                <StepListContainer todo_id={this.props.id} />
                <button onClick={this.handleClickDelete}>Remove</button>
            </div>
        )
    }
}

export default TodoDetailView;