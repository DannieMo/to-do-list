import './style.css';
import status from './status.js';

let list = [
  {
    completed: false,
    description: 'Make sure that there are no linter errors.',
    index: 4,
  },
  {
    completed: false,
    description: 'Make sure that you used correct GitHub Flow.',
    index: 3,
  },
  {
    completed: false,
    description: 'Make sure that you documented your work in a professional way.',
    index: 2,
  },
  {
    completed: false,
    description: 'Then we write code',
    index: 1,
  },
];

list = list.sort((a, b) => a.index - b.index);

if (!localStorage.getItem('todo-items')) {
  localStorage.setItem('todo-items', JSON.stringify(list));
}
const show = () => {
  let storeList;
  if (localStorage.getItem('todo-items')) {
    storeList = JSON.parse(localStorage.getItem('todo-items'));
  }
  const page = document.getElementById('todo-items');
  storeList.forEach((e) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    if (e.completed) {
      (li.style.textDecoration = 'line through');
    } else {
      (li.style.textDecoration = 'none');
    }
    checkbox.setAttribute('type', 'checkbox');
    checkbox.name = 'checkbox';
    checkbox.checked = e.completed;
    li.append(checkbox);
    li.append(e.description);
    li.classList.add('list-group-item');
    page.append(li);
  });
};

show();

status();