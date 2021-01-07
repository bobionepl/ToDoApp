const input = document.querySelector(".todo_input");
const todoBtn = document.querySelector(".todo_btn");
const list = document.querySelector(".todo_list");


todoBtn.addEventListener('click', addTodo);


function addTodo(e) {
    e.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = 'ssss';
    newTodo.classList.add('todo_item');

    todoDiv.appendChild(newTodo);

    const compBtn = document.createElement('button');
    compBtn.innerHTML = '<i class="fas fa-check"></i>';
    compBtn.classList.add('complete_btn');
    todoDiv.appendChild(compBtn);

    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash_btn');
    todoDiv.appendChild(trashBtn);

    list.appendChild(todoDiv);
}