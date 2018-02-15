function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteItem = document.getElementById('deleteItem')

  addToDoForm.addEventListener('submit',  event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // create a new input
    let button = document.createElement('button');

    // set the input's type to button
    button.type = "button";

    // label button as x (delete)
    button.innerHTML = 'X';

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the delete button to the li
    newLi.appendChild(button);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';

  });

  deleteItem.addEventListener('submit',  function deleteItem () {
    let x = document.getElementById("newLi");
    x.remove();
  )};

}

window.onload = function() {
  onReady();
};
