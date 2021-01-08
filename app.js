const todoBtn = document.querySelector(".todo_btn");
const list = document.querySelector(".todo_list");
const body = document.querySelector('body');
const form = document.querySelector('.todo_form');

todoBtn.addEventListener('click', ShowHideInput);
list.addEventListener('click', DeleteCheck);
form.addEventListener('submit', AddTodo);

function ShowHideInput(e) {
    e.preventDefault();
    form.classList.toggle('hide')
    todoBtn.classList.toggle('hide')
}


function AddTodo(e) {
    e.preventDefault();
    const input = document.querySelector(".todo_input");

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = input.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);

    const compBtn = document.createElement('button');
    compBtn.innerHTML = '<i class="fas fa-check"></i>';
    compBtn.classList.add('complete_btn');
    todoDiv.appendChild(compBtn);

    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-times"></i>';
    trashBtn.classList.add('trash_btn');
    todoDiv.appendChild(trashBtn);

    if(input.value !== "") {
        list.appendChild(todoDiv);
    }

    form.classList.toggle('hide');
    todoBtn.classList.toggle('hide');
    input.value = "";
}

function DeleteCheck (e){
    const item = e.target;
    if(item.classList[0] === "trash_btn") {
        const todo = item.parentElement;
        todo.classList.add("removed");
        todo.addEventListener('animationend', function (){
            todo.remove();
        })
    }
    if(item.classList[0] === "complete_btn") {
        item.parentElement.classList.toggle('completed');
    }

}
