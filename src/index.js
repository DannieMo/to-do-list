import './style.css';

let list = [
  {
    completed: false,
    description: 'Make sure that there are no linter errors.',
    index: 4
  },
  {
    completed: false,
    description: 'Make sure that you used correct GitHub Flow.',
    index: 3
  },
  {
    completed: false,
    description: 'Make sure that you documented your work in a professional way.',
    index: 2
  },
  {
    completed: false,
    description: 'Then we write code',
    index: 1
  },
]

list = list.sort((a,b) =>  a.index - b.index);

const page = document.getElementById('todo-items');

const show = () => {
  list.forEach((e) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    li.append(checkbox);
    li.append(e.description);
    page.append(li);
  });
}

show();