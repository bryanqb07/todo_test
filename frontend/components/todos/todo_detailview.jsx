import React from 'react';

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
            <button onClick={this.handleClickDelete}>Remove</button>
        )
    }
}

export default TodoDetailView;