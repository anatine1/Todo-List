
class Todo {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

const first = new Todo('read a book', 'make sure you read a book')
const second = new Todo('hello', 'ok')
const todolist = [];

function addToList(Obj) {
    todolist.push(Obj);
};

addToList(first);
addToList(second);

console.log(todolist)

const deleteButton = document.getElementsByClassName('delete')

deleteButton.forEach(deleteButton).addEventListener('click', function() {console.log('hello')})


function createBox(Obj) {
   let box = document.createElement('div')
   box.className = 'todoList';
   
   let title = document.createElement('h3')
   title.innerText = Obj.name;  // add name
   box.appendChild(title);
   
   let description = document.createElement('p'); //add description
   description.innerText += Obj.description;
   box.appendChild(description)
   
   let button = document.createElement('button')
   button.className = "delete";
   button.id ='del';
   
   let icon = document.createElement('span')
   icon.className = "glyphicon glyphicon-trash";
   button.appendChild(icon);
   box.appendChild(button);
    return document.getElementById('todoContainer').appendChild(box);
}



todolist.forEach(Object => createBox(Object));



