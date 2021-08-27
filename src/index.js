import './style.css';
import './status.js';

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

list = localStorage.getItem('list') !== null
  ? JSON.parse(localStorage.getItem(list))
  : list;


const page = document.getElementById('todo-items');

const show = () => {
  list = list.sort((a, b) => a.index - b.index);
  list.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'ul-li';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'completed';
    checkbox.name = 'completed';
    checkbox.className = 'completed';
    // checkbox.setAttribute('type', 'checkbox');
    // checkbox.className = 'completed';
    const description = document.createElement('p');
    description.className = 'description';
    description.innerHTML = `${item.description}`;
    if (item.completed === true ){
      checkbox.checked = true;
      description.style.textDecoration = 'line-through solid';
    } else {
      checkbox.checked = false;
    }
    checkbox.addEventListener ('change', (event) => {
      completed(item.index, item, event, description);
      localStorage.setItem('list', JSON.stringify(list));
    });
    li.append(checkbox);
    li.append(description);
    page.append(li);
  });
};

window.addEventListener('load', show);