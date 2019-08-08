const clear = document.querySelector('.clear')
const dateElement = document.getElementById('date')
const list = document.getElementById('list')
const input = document.getElementById('input')
const add_todo_item = document.querySelector('.add_todo_item')


function addTodo(todo){

if(input.value ){

const text =  `<li class="item">
                    <i class="far fa-circle" job='complete'></i>
                    <p class="text">${todo}</p>
                    <i class="far fa-trash-alt delete" job='delete'></i>
                </li>`

const position = 'beforeend'

list.insertAdjacentHTML('beforeend', text)

input.value = ''

} else {
    console.log('please insert a todo')
}

}


// add todo when clicking the add button
add_todo_item.addEventListener('click', ()=> {
    addTodo(input.value)
})

// add todo when pressing enter 
document.addEventListener('keyup', e => {
    if(e.keyCode)
})

