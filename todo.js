const add = document.querySelector('#add');
const container = document.querySelector('#container');
const input = document.querySelector('#text-input');
const main = document.querySelector('#main');

add.addEventListener('click', function(){
   if(input.value == ''){
      alert('You need to type your task first')
   } else{
   const newContainer = document.createElement('div');
   main.appendChild(newContainer);
   newContainer.classList.add('new-todo');

   const newTask = document.createElement('input');
   newTask.setAttribute('readOnly', true);
   newTask.setAttribute('class', 'new-task');
   newTask.value = input.value;
   newContainer.appendChild(newTask);
   input.value = '';

   const editButton = document.createElement('button');
   editButton.setAttribute('id', 'edit-button')
   editButton.innerText = 'Edit';
   newContainer.appendChild(editButton);

   const deleteButton = document.createElement('button');
   deleteButton.setAttribute('id', 'delete-button');
   deleteButton.innerText = 'Delete';
   newContainer.appendChild(deleteButton);

      deleteButton.addEventListener('click', () => {
         newContainer.classList.add("removed");
      });
      newContainer.ontransitionend = (event) => {
         if (event.target === newContainer) { //the condition is important because otherwise it will delete the container once a child's transition ended
            newContainer.remove()
         }
         else {}
      }

      editButton.addEventListener('click', () => {
         if (editButton.innerText === 'Edit') {
            newTask.removeAttribute('readOnly');
            editButton.innerText = 'Save';
            newTask.style.background = '#1c4769'
         } else {
            newTask.setAttribute('readOnly', true);
            editButton.innerText = 'Edit';
            newTask.style.background = '#163651'
         }
      })
}})
