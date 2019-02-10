import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import Root from './components/root'

// WINDOW TESTING -- DELETE AFTER LAUNCH

import { allTodos, stepsByTodoId } from './reducers/selectors';
window.allTodos = allTodos;
window.stepsByTodoId = stepsByTodoId;
window.store = store;
import { receiveTodos, receiveTodo, removeTodo  } from './actions/todo_actions';
import { receiveSteps, receiveStep, removeStep } from './actions/step_actions';
window.receiveSteps = receiveSteps;
window.receiveStep = receiveStep;
window.removeStep = removeStep;
window.removeTodo = removeTodo;
window.targetTodo = {id: 1}
window.targetStep = { id: 1 }
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

const testSteps = [{
        id: 1,
        title: 'find my dog',
        done: false,
        todo_id: 2
    },
    {
        id: 2,
        title: 'get him in the bath',
        done: false,
        todo_id: 2
    }
]

const testStep = {
    id: 3,
    title: 'walk to the store',
    done: false,
    todo_id: 1
}

window.testSteps = testSteps;
window.testStep = testStep;



//////////////////////////// 

document.addEventListener("DOMContentLoaded", ()=>{
    const rootEl = document.getElementById("content")
    ReactDOM.render(<Root store={store} />, rootEl);
})



// import reducer from './reducers/root_reducer'

// const update = {
//     body: "throw away towel",
//     done: false,
//     id: 2,
//     title: "buy new towels"
// }
// const testTodo = {
//     id: 3,
//     title: 'take a walk',
//     body: 'at least for 30 min',
//     done: false
// }

// window.testTodo = testTodo;
// window.update = update;


