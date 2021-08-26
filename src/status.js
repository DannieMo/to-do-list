const completed = (index, list, e, description) => {
  if (e.target.checked === true){
    if (list.index === index){
      list.completed = true;
      description.style.textDecoration = 'line-through solid'
    }
    return task;
  }
  if (e.target.checked === false){
    if (list.index === index){
      list.completed = false;
      description.style.textDecoration = 'none'
    }
    return task;
  }
  return task;
  
};
export default completed;