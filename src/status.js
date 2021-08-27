export default function status() {
  const todo = JSON.parse(localStorage.getItem('todo-items'));
  const checkbox = Object.values(document.getElementsByName('checkbox'));
  checkbox.forEach((element, i) => {
    element.addEventListener('click', () => {
      if (element.checked) {
        todo[i].completed = true;
        element.parentElement.style.textDecoration = 'line-through';
      } else {
        todo[i].completed = false;
        element.parentElement.style.textDecoration = 'none';
      }
      localStorage.setItem('list', JSON.stringify(todo-items));
    });
  })   
}
// const completed = (index, list, e, description) => {
//   if (e.target.checked === true){
//     if (list.index === index){
//       list.completed = true;
//       description.style.textDecoration = 'line-through solid'
//     }
//     return task;
//   }
//   if (e.target.checked === false){
//     if (list.index === index){
//       list.completed = false;
//       description.style.textDecoration = 'none'
//     }
//     return task;
//   }
//   return task;
  
// };
// export default completed;