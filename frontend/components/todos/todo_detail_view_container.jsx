import { connect } from 'react-redux';
import TodoDetailView from './todo_detailview'
import { removeTodo } from '../../actions/todo_actions';

const mapDispatchToProps = dispatch => ({
    removeTodo: id => dispatch(removeTodo(id))
})

export default connect(null,
    mapDispatchToProps
    )(TodoDetailView)
