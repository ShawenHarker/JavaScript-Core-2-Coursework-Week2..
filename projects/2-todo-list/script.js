let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

// This function creates my list of to-dos and display in on the screen.
function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = '';

  for (let i = 0; i < todos.length; i++) {
    let listLiTag = document.createElement("li");
    listLiTag.setAttribute("class", "list-group-item");
    listLiTag.innerText = todos[i].task;
    list.appendChild(listLiTag);

    let divBlock = checkButtonFunction(listLiTag);

    deleteButtonFunction(listLiTag, divBlock);
  } 
}

// Creating the check button.
function checkButtonFunction(listLiTag) {
  let checkButton = document.createElement("button");
  checkButton.addEventListener(
    "click",
    () =>
      (listLiTag.style.textDecoration === "line-through"
        ? (listLiTag.style.textDecoration = "none")
        : (listLiTag.style.textDecoration = "line-through"))
  );
  checkButton.setAttribute("id", "primary-check-button");
  listLiTag.appendChild(checkButton);
  console.log(listLiTag);
  let divBlock = document.createElement('div');
  listLiTag.appendChild(divBlock);
  let checkSpanTag = document.createElement("span");
  checkSpanTag.setAttribute("class", "badge bg-primary rounded-pill-0");
  let checkIbutton = document.createElement("i");
  checkIbutton.setAttribute("class", "fa fa-check");
  checkIbutton.setAttribute("aria-hidden", "true");
  divBlock.appendChild(checkButton);
  checkSpanTag.appendChild(checkIbutton);
  checkButton.appendChild(checkSpanTag);
  return divBlock;
}

// Creating the delete button.
function deleteButtonFunction(listLiTag, divBlock) {
  let deleteButton = document.createElement("button");  
  deleteButton.addEventListener("click", () => {
  // const newArray = todos.filter((todo) => {
  //     if (todo.task === listLiTag.innerText) {
  //       return false;
  //     }else {
  //       return true;
  //     }
  //   }); 
  const newArray = todos.filter(todos)
    populateTodoList(newArray);
  })

  deleteButton.setAttribute("id", "primary-delete-button");
  listLiTag.appendChild(deleteButton);
  let deleteSpanTag = document.createElement("span");
  deleteSpanTag.setAttribute("class", "badge bg-primary rounded-pill-1");
  let deleteIbutton = document.createElement("i");
  deleteIbutton.setAttribute("class", "fa fa-trash");
  deleteIbutton.setAttribute("aria-hidden", "true");
  divBlock.appendChild(deleteButton);
  deleteSpanTag.appendChild(deleteIbutton);
  deleteButton.appendChild(deleteSpanTag);
}

// This next step adds the to-do into the todos array of objects and display it in the to-do list.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  
  let addToDo = document.getElementById("todoInput");
  if (addToDo.value.length > 0) {
    todos.push({ task: `${addToDo.value}`, completed: false});
  }
  populateTodoList(todos);
  addToDo.value = '';
}

// This button adds a new to-do to the list of todos array when clicked.
document.getElementById("btn-primary").addEventListener('click', addNewTodo);

let getCheckBtnClass = document.getElementsByClassName("rounded-pill-0");

console.log(getCheckBtnClass);
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}

populateTodoList(todos);