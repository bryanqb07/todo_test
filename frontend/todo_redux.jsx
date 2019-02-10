import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import Root from './components/root'

// import { allTodos } from './reducers/selectors';
// window.allTodos = allTodos;
window.store = store;
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import { removeTodo } from './actions/todo_actions';
window.removeTodo = removeTodo;
window.targetTodo = {id: 1}
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;

const update = {
    body: "throw away towel",
    done: false,
    id: 2,
    title: "buy new towels"
}
const testTodo = {
    id: 3,
    title: 'take a walk',
    body: 'at least for 30 min',
    done: false
}

window.testTodo = testTodo;

window.update = update;

document.addEventListener("DOMContentLoaded", ()=>{
    const rootEl = document.getElementById("content")
    ReactDOM.render(<Root store={store} />, rootEl);
})



// import reducer from './reducers/root_reducer'



// testing -- DELETE



// const newTodos = [
//     {
//     id: 1,
//     title: 'clean room',
//     body: 'must clean my room',
//     done: true
//     },
//     {
//     id: 2,
//     title: 'wash dishes',
//     body: 'with soap',
//     done: false
//     }
// ];



// window.newTodos = newTodos;
// window.testTodo = testTodo;

//
