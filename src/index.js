import './style.css';

const input = document.getElementById("input");
const button = document.getElementById("button");
const todoItems = document.getElementById("todo-items");
let strike = document.getElementsByClassName("strike")
const checkbox = document.getElementsByTagName('input[type=checkbox]');
let dot = document.getElementsByClassName("dot-class");
let trash = document.getElementsByClassName("trash-can")
let label = document.getElementsByTagName("label");

let todo = [
  {
  description: String,
  completed: Boolean,
  index: Number
  }
];
function newTask(){
  let nextTodo ={
    description: input.value,
    completed:true,
    index: 1,
  }
  todo.push(nextTodo)
}