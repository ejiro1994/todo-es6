const clear = document.querySelector('.clear')
const dateElement = document.getElementById('date')
const list = document.getElementById('list')
const input = document.getElementById('input')

let addTodo = (todo) => {

	const text = `	<li class="item">
                    <i class="far fa-circle" ></i>
                    <p class="text">${todo}</p>
                    <i class="far fa-trash-alt delete"></i>
				</li>`
				

const position = 'beforeend'

list.insertAdjacentElement(position, text)
}
addTodo('play keys')

					