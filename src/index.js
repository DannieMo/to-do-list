import './style.css';

const list = [
  {
    completed: false,
    description: 'Make sure that there are no linter errors.',
    index: 1
  },
  {
    completed: false,
    description: 'Make sure that you used correct GitHub Flow.',
    index: 1
  },
  {
    completed: false,
    description: 'Make sure that you documented your work in a professional way.',
    index: 1
  },
  {
    completed: false,
    description: 'Then we write code',
    index: 1
  },
]

const page = document.getElementById('todo-items');

const show = () => {
  list.forEach((e) => {
    const li = document.createElement('li');
    li.append(e.description);
    page.append(li);
  });
}

show();