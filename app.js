function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit',  event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new input
    let checkbox = document.createElement('input');

    // create a new li
    let newLi = document.createElement('li');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // create a new input
    let button = document.createElement('button');

    // set the input's type to button
    button.type = "button";

    // label button as x (delete)
    button.innerHTML = 'x';

    // alert when click on delete
    button.onclick = function() {
      deleteTodo(newLi);
    };

    // set the title
    newLi.textContent = title;

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the delete button to the li
    newLi.appendChild(button);

    // empty the input
    newToDoText.value = '';

  });

};

function deleteTodo(todo) {
  toDoList.removeChild(todo);
};

window.onload = function() {
  onReady();
};
