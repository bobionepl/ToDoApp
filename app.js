const todoBtn = document.querySelector(".todo_btn");
const list = document.querySelector(".todo_list");
const body = document.querySelector('body');
const form = document.querySelector('.todo_form');
const filter = document.querySelector(".filter");

todoBtn.addEventListener('click', ShowHideInput);
list.addEventListener('click', DeleteCheck);
form.addEventListener('submit', AddTodo);
filter.addEventListener("click", filterTodo);

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
            localStorage.removeItem(todo);
        })
    }
    if(item.classList[0] === "complete_btn") {
        item.parentElement.classList.toggle('completed');
    }

}

function filterTodo (e) {
    const todos = list.childNodes;
    todos.forEach(todo => {
        switch (e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "none";
                } else {
                    todo.style.display = "flex";
                }
                break;
            case "uncompleted":
                if(todo.classList.contains("completed")){
                    todo.style.display = "none";
                } else {
                    todo.style.display = "flex";
                }
                break;
        }

    })
}