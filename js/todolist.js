let fieldToDo = document.getElementById('todo');
let addToDo = document.getElementById('add-todo');
let todosProgressCont = document.getElementById('todos__in-progress-container');
let todosSuccessCont = document.getElementById('todos__success-container');

addToDo.addEventListener('click', addToDoFunc)

function addToDoFunc(){
	let nameToDo = fieldToDo.value;
	fieldToDo.value = '';
	
	let newToDo = document.createElement('label')
	newToDo.classList.add('todos__in-progress-item');
	
	let check = document.createElement('input');
	check.setAttribute('type', 'checkbox');
	check.addEventListener('change', doneToDo);
	newToDo.appendChild(check);
	
	let span = document.createElement('span');
	span.innerText = nameToDo;
	newToDo.appendChild(span);
		
	todosProgressCont.appendChild(newToDo);
}

// Логика выполнения задачи

let todoCheckboxes = document.querySelectorAll('.todos__in-progress-item input[type="checkbox"]');

for(let i = 0; i < todoCheckboxes.length; i++){
	todoCheckboxes[i].addEventListener('change', doneToDo)
}

function doneToDo(){
	let nameToDo = this.nextElementSibling.innerText;
	todosProgressCont.removeChild(this.parentElement)
	
	let successToDo = document.createElement('div')
	successToDo.classList.add('todos__success-item');
	successToDo.innerHTML = `<span>${nameToDo}</span>`
	
	let removeBtn = document.createElement('button');
	removeBtn.setAttribute('type', 'button');
	removeBtn.innerText = 'Delete';
	removeBtn.addEventListener('click', removeToDo)
	successToDo.appendChild(removeBtn)
	todosSuccessCont.appendChild(successToDo)
}

// Логика удаления

let removeButtons = document.querySelectorAll('.todos__success-item button')

for(let i = 0; i < removeButtons.length; i++){
	removeButtons[i].addEventListener('click', removeToDo)
}

function removeToDo(){
	todosSuccessCont.removeChild(this.parentElement)
}












