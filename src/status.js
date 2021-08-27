export default function status() {
  const list = JSON.parse(localStorage.getItem('list'));
  const checkbox = Object.values(document.getElementsByName('checkbox'));
  checkbox.forEach((element, i) => {
    element.addEventListener('change', () => {
      if (element.checked) {
        list[i].completed = true;
        element.parentElement.style.textDecoration = 'line-through';
      } else {
        list[i].completed = false;
        element.parentElement.style.textDecoration = 'none';
      }
      localStorage.setItem('list', JSON.stringify(list));
    });
  });
}