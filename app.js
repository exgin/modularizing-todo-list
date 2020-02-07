const li = document.querySelectorAll('.items');
const span = document.querySelectorAll('.delete');
const inputText = document.querySelector('input');
const ul = document.querySelector('ul');



let todoArray = [];

function Todo (name){
    this.name = name;
    this.completed = false;
}

function getTodoArray (index) {
    return todoArray[index];
}

function addNewTodo (name) {
    let todoFormat = new Todo (name);
    todoArray.push(todoFormat);
    saveTodos();
}


 function removeNewTodo () {
    ul.addEventListener('click', e => {
       let clickedListItem = e.target.name;
        console.log(clickedListItem)

       if(clickedListItem === 'LI'){
            e.target.classList.toggle('completed');
        } else if (clickedListItem === 'SPAN') {
            e.target.parentElement.remove();
           todoArray.splice(index, 1);
        }
     });
}

function readTodo () {
    inputText.addEventListener('keypress', e => {
        if (e.keyCode === 13) {
            let userText = inputText.value;
            /**Create a new li, span and add together ===> <li class='items'><span class="delete">x</span> userText here </li> */
            // Create a new li
            const newLi = document.createElement('li');
            newLi.className = 'items';
            newLi.innerText = userText;

            // Create a new span
            const newSpan = document.createElement('span');
            newSpan.innerText = "\xa0"; // I want empty space so new span's aren't right next to the - 
            newSpan.className = "fas fa-minus-circle";

            // Add together
            newLi.prepend(newSpan);
            // prepend to li to beginng
            ul.prepend(newLi);

            //Add to array
            addNewTodo(userText);

            // Reset the text to empty
            inputText.value = '';
        }
    });
}

function saveTodos () {
    let savedTasks = JSON.stringify(todoArray);
    localStorage.setItem('todos', savedTasks);
}

function getTodos () {
    let jsonTODOs = localStorage.getItem('todos');
    todoArray = JSON.parse(jsonTODOs);
    if (!todoArray) {
        todoArray = [];
    }
}


readTodo();
getTodos();
removeNewTodo();
