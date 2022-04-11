const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");

let todos = [];

function saveTodos() {
  localStorage.setItem("todo", JSON.stringify(todos));
}

function deleteTodos(e) {
  const targetLi = e.target.closest("li");
  targetLi.remove();
  todos = todos.filter((item) => item.id !== parseInt(targetLi.id));
  saveTodos();
}

function paintTodo(newTodoObj) {
  const li = document.createElement("li");
  li.id = newTodoObj.id;

  const span = document.createElement("span");
  span.innerText = newTodoObj.text;

  const button = document.createElement("button");
  button.type = "button";
  button.innerText = "❌";
  button.addEventListener("click", deleteTodos);

  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = JSON.parse(localStorage.getItem("todo"));
if (savedTodos.length !== 0) {
  savedTodos.forEach(paintTodo);
  todos = savedTodos;
  // => 새로고침하면 로컬호스트에서 사라지기 때문에..!
}
