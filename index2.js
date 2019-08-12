let todos
const addTodoInput = document.getElementById('add-todo-input')
const previewText = document.getElementById('preview-text')
const date = document.getElementById('date')



//Todays date
date.innerHTML = new Date().toDateString()

/**
 * AddTodoInput on input listener
 * @param {event} e 
 */
const addTodoInputOnInputHandler = e => {
    //Add the input value to the preview text element
    previewText.innerHTML = e.target.value
}


/**
 * AddTodoInput on change listener
 * @param {event} e 
 */
const addTodoInputOnChangeHandler = e => {
    //If is an empty string return
    if(!e.target.value) return

    //Add the todo to the list
    todos.push({ id: todos.length + 1, text: e.target.value, complete: false })

    //Clear the input
    e.target.value = ''
    previewText.innerHTML = ''
    renderTodoList()
}

/**
 * Todo on delete click listener
 * @param {event} e 
 */
const todoDeleteHandler = e => {
    //Filter the todos and return only the one not clicked
    todos = todos.filter(todo => todo.id !== parseInt(e.target.parentNode.id))
    
    //Render the todo list
    renderTodoList()
}

/**
 * Todo on complete click listener
 * @param {event} e 
 */
const todoCompleteHandler = e => {
    //Get the id of the todo
    const clickedTodoId = parseInt(e.target.parentNode.id)

    //find the complete todo and change the value
    todos = todos.map(todo => {
        if(todo.id === clickedTodoId) todo.complete = !todo.complete
        return todo
    })

    //Render the todo list
    renderTodoList()
}

/**
 * Start all the listeners
 */
const startEventListeners = () => {
    //AddTodoInput event listeners
    addTodoInput.addEventListener('input', addTodoInputOnInputHandler)
    addTodoInput.addEventListener('change', addTodoInputOnChangeHandler)
} 


/**
 * Load the list data
 */
const loadTodoList = () => {
    //Load data from localStorage
    const data = JSON.parse(localStorage.getItem('todo'))
    //If data exists return data else an empty array
    todos = data ? data : []
}


/**
 * Render the list on the page
 */
const renderTodoList = () => {
    //Get the list element
    const list = document.getElementById('todo-list')

    //Clear the list
    list.innerHTML = ''

    for(let todo of todos) {
        //Create todo element
        const todoEl = document.createElement('li')
        todoEl.id = todo.id
        todoEl.className = 'todo'
        
        //Create done icon element
        const doneIcon =  document.createElement('i')
        console.log(todo)
        doneIcon.className = !todo.complete ? 'far fa-circle' : 'far fa-check-circle'
        doneIcon.addEventListener('click', todoCompleteHandler)

        //Create todo text element
        const todoText = document.createElement('p')
        todoText.className = 'text'
        todoText.innerHTML = todo.text

        //Create delete icon element
        const deleteIcon =  document.createElement('i')
        deleteIcon.className = `far fa-trash-alt delete`
        deleteIcon.addEventListener('click', todoDeleteHandler)

        //Append all of the todo children to the todo element
        todoEl.appendChild(doneIcon)
        todoEl.appendChild(todoText)
        todoEl.appendChild(deleteIcon)

        //Append the todo element to the list
        list.appendChild(todoEl)
    }
}

//Run the app
loadTodoList()
startEventListeners()