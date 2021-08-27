import "./style.css";
import status from "./status.js";

let list = [
  {
    completed: false,
    description: "Make sure that there are no linter errors.",
    index: 4,
  },
  {
    completed: false,
    description: "Make sure that you used correct GitHub Flow.",
    index: 3,
  },
  {
    completed: false,
    description:
      "Make sure that you documented your work in a professional way.",
    index: 2,
  },
  {
    completed: false,
    description: "Then we write code",
    index: 1,
  },
];

list = list.sort((a, b) => a.index - b.index);

const show = () => {
  if (localStorage.getItem("list") !== null) {
    list = JSON.parse(localStorage.getItem("list"));
  }
  else {
    localStorage.setItem("list", JSON.stringify(list));
  }

  const page = document.getElementById("todo-items");
  list.forEach((e, index) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.name = "checkbox";
    checkbox.checked = e.completed;
    li.append(checkbox);
    li.append(e.description);
    if (checkbox.checked) {
      li.classList.add('list-group-item');
    } else {
      li.classList.remove('list-group-item');
    };
    page.append(li);
  });
};

show();
status();