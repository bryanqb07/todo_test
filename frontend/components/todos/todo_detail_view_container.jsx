import { connect } from 'react-redux';
import TodoDetailView from './todo_detailview'
import { removeTodo } from '../../actions';

const mapDispatchToProps = dispatch => ({
    removeTodo: id => dispatch(removeTodo(id))
})

connect(null,
    mapDispatchToProps)(TodoDetailView)