import './style.css';

const input = document.getElementById('input');
const button = document.getElementById('button');
const todoItems = document.getElementById('todo-items');
const strike = document.getElementsByClassName('strike');
const checkbox = document.getElementsByTagName('input[type=checkbox]');
const dot = document.getElementsByClassName('dot-class');
const trash = document.getElementsByClassName('trash-can');
const label = document.getElementsByTagName('label');

const todo = [
  {
    description: String,
    completed: Boolean,
    index: Number,
  },
];
function newTask() {
  const nextTodo = {
    description: input.value,
    completed: true,
    index: 1,
  };
  todo.push(nextTodo);
}

button.addEventListener('click', () => {
  // pushing into the array
  const inputValue = input.value;

  // Printing Out Our Todo
  if (input.value === '') {

  } else {
    todoItems.innerHTML +=
    `<li>
      <input type="checkbox">
      <label for='checkbox' id='checkbox'>${inputValue}</label>
      <div>
        <i class="fas fa-ellipsis-v dot-class"></i>
        <i class="far fa-trash-alt hide trash-can"></i>
      </div>
    </li>
  `;
  }
  input.value = '';
});

todoItems.addEventListener('click', (e) => {
  if (e.target.hasAttribute('type')) {
    e.target.nextSibling.classList.toggle('strike');
  }

  if (e.target.classList.contains('dot-class')) {
    e.target.parentElement.parentElement.classList.toggle('color');
    e.target.classList.toggle('hide');
    e.target.nextSibling.nextSibling.classList.toggle('hide');
  }
});