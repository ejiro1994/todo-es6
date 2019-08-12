 //select the elements
const clear = document.querySelector('.clear')
const dateElement = document.getElementById('date')
const list = document.getElementById('list')
const input = document.getElementById('input')
const addTodoButton = document.querySelector('.addTodoButton')
const date = document.getElementById('date')

//class names
const CHECK = 'fa-check-circle'
const UNCHECK = 'fa-circle'
const LINE_THROUGH = 'lineThrough'


//variables
// let LIST = []
// let id = 0


let LIST, id

LIST = []
id = 0

// store to local storage

 localStorage.setItem('TODO', JSON.stringify(LIST))

//  get item from local
let data = localStorage.getItem('TODO')

// check if data is not empty
// if (data) {
// 	LIST = JSON.parse(data)
// 	id = LIST.length
// 	// loadList(LIST)
// 	console.log('this is the LIST' + LIST)
// } else {
// 	 LIST = []
// 	 id = 0
// }



let addTodo = (todo, id, done, trash) => {

	if (trash) return

	const DONE = done ? CHECK : UNCHECK
	const LINE = done ? LINE_THROUGH : ''
	

	const text = `<li class="item">
                    <i class="far ${DONE}" id='${id}' job='complete'></i>
                    <p class="text ${LINE}">${todo}</p>
                    <i class="far fa-trash-alt delete" id='${id}' job='remove'></i>
				</li>
				`

	const position = 'beforeend'

	list.insertAdjacentHTML(position, text)

}

const loadList = () => {
	let localStorageList = localStorage.getItem('TODO')
	if(localStorageList){
		
		let todoList = JSON.parse(localStorageList);
			todoList.map(task => {
				addTodo(task.name, task.id, task.done, task.trash)
				console.log('this is the local storage ' + localStorageList)
			})
		}
}

loadList()


//date
date.innerHTML = new Date().toDateString()



//add todo function


//ADD TODO
//the user hits the enter key
document.addEventListener('keyup', (e) => {
	//check if the enter key is pressed
	if (e.keyCode == 13) {
		let todo = input.value
		//if the input is not empty
		if (todo) {
			addTodo(todo, id)

			LIST.push({
				name: todo,
				id: id,
				done: false,
				trash: false
			})

			id++

			localStorage.setItem('TODO', JSON.stringify(LIST))
		}
		input.value = ''
	}
})





//complete todo
let completeTodo = element => {
	element.classList.toggle(CHECK)
	element.classList.toggle(UNCHECK)

	element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH)

	// console.log(LIST)
	// console.log(LIST[element.id].done)

	LIST[element.id].done = LIST[element.id].done ? false : true
}


//remove todo
let removeTodo = element => { 
	element.parentNode.parentNode.removeChild(element.parentNode)

	LIST[element.id].trash = true 
	// console.log('this shoudd be the list ' + LIST)
}

list.addEventListener('click', event => {

	// if (event.target =)

	//return the clicked element inside the list
	const element = event.target
	//complete or delete

	

	// element.hasAttribute('job') ?  completeTodo() : return

	// const elementJob = element.attributes.job.value
	const elementJob = element.hasAttribute('job') ? element.attributes.job.value : null
	// console.log(element)


	if (elementJob == 'complete') {
		completeTodo(element)
	} else if (elementJob == 'remove'){
		// console.log('trash was clicked')
		removeTodo(element)
	}
	localStorage.setItem('TODO', JSON.stringify(LIST))
} )

// addTodoButton.addEventListener('click', () => {
// 	if (input.value) {
// 		addTodo(input.value)
// 		input.value = ''
// 	}
// })


// addTodo('hey there',1,true,false)
// addTodo('hey there',2,false,false)



