//select the elements
const clear = document.querySelector('.clear')
const dateElement = document.getElementById('date')
const list = document.getElementById('list')
const input = document.getElementById('input')
const addTodoButton = document.querySelector('.addTodoButton')
const date = document.getElementById('date')

//class names
const CHECK = 'far fa-check-circle'
const UNCHECK = 'far fa-circle'
const LINE_THROUGH = 'lineThrough'


//variables
let LIST = []
let id = 0

//date
date.innerHTML = new Date().toDateString()



//add todo function
let addTodo = (todo, id, done, trash) => {

	if (trash){return}

	const DONE = done ? CHECK : UNCHECK
	const LINE = done ? LINE_THROUGH : ''
	

	const text = `<li class="item">
                    <i class=" ${DONE}" id='${id}' job='complete'></i>
                    <p class="text ${LINE}">${todo}</p>
                    <i class="far fa-trash-alt delete" id='${id}' job='remove'></i>
				</li>
				`

	const position = 'beforeend'

	list.insertAdjacentHTML(position, text)

}


//the user hits the enter key
document.addEventListener('keyup', (e) => {
	//check if the enter key is pressed
	if (e.keyCode == 13) {
		let todo = input.value
		//if the input is not empty
		if (todo) {
			addTodo(todo)

			LIST.push({
				name: todo,
				id: id,
				done: false,
				trash: false
			})

			id++
		}
		input.value = ''
	}
})

//complete todo
let completeTodo = element => {
	element.classList.toggle(CHECK)
	element.classList.toggle(UNCHECK)

	element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH)

	LIST[element.id].done = LIST[element.id].done ? false : true
}


//remove todo
let removeTodo = element => {
	element.parentNode.parentNode.removeChild(element.parentNode)

	LIST[element.id].trash = true
}

list.addEventListener('click', event => {
	//return the clicked element inside the list
	const element = event.target
	//complete or delete
	const elementJob = element.attributes.job.value


	if (elementJob == 'complete') {
		completeTodo(element)
	} else if (elementJob == 'remove'){
		removeTodo(element)
	}
} )

addTodoButton.addEventListener('click', () => {
	if (input.value) {
		addTodo(input.value)
		input.value = ''
	}
})


// addTodo('hey there',1,true,false)
// addTodo('hey there',2,false,false)



