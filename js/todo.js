const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoInput = todoForm.querySelector('input');

let toDos = [];

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(toDos));
  // 로컬스토리지는 object 인식 못함 -> stringify
}

function deleteTodos(event) {
  const li = event.target.parentElement;
  li.remove();

  toDos = toDos.filter(toDo => parseInt(li.id) !== toDo.id);
  // 삭제된 li와 아이디와 같은 아이디를 가진 object를 localStorage에서 삭제
  saveTodos();
}

function paintTodo(newTodoObj) {
  const li = document.createElement('li');
  li.id = newTodoObj.id;

  const span = document.createElement('span');
  span.innerText = newTodoObj.text;

  const button = document.createElement('button');
  button.type = 'button';
  button.innerText = '❌';
  button.addEventListener('click', deleteTodos);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';

  const newTodoObj = {
    text: newTodo,
    id: Date.now() // 랜덤한 숫자
  }

  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener('submit', handleTodoSubmit);

const savedTodos = localStorage.getItem('todos');
if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
  // 새로고침했을 때 화면에 안나오는 문제 해결
  // 로컬스토리지에 저장된 todo들이 있으면
  // string을 다시 object로 바꿔서 요소들을 하나씩 paintTodo에 돌려줘라.
}