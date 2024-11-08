
/*
    Todolist

    We're going to make a todolist that counts how many todos we've completed.
    We'll do this using objects in the todos array shown below.

    HTML FOR The todo

    <li class="list-group-item">
        <input class="form-check-input todo-status"
            todo-id="INDEX HERE"
            type="checkbox"
            value="TODO VALUE WITH INDEX HERE" aria-label="..."
            TODO COMPLETE TERNARY HERE>
        DESCRIPTION HERE

    </li>

*/

let todos = [
    {
        description: 'Todo 1',
        complete: false,

    },
    {
        description: 'Todo 2',
        complete: true,
    }
];

/**
 * Uses the reduce method on the array todos to count the number of elements with value complete set to true. 
 * Then sets the innerHTML of the element “todo-complete-count” to the percentage of objects with value “complete” 
 * set to true.
 */
const calculateCompleteCount = () => {
    // Calculate how many items are completed
    let completedCount = todos.reduce((acc, item) => {
        if (item.complete) {
            acc++;
        }
        return acc;
    }, 0);

    // Set completed count
    document.querySelector("#todo-complete-count").innerHTML = `${completedCount}/${todos.length}`;
}

const renderTodos = () => {
    calculateCompleteCount();

    let listArray = todos.map((item, index) => 
        `<li class="list-group-item">
            <input class="form-check-input todo-status"
                todo-id="${index}"
                type="checkbox"
                value="TODO - ${index}" aria-label="..."
                ${item.complete ? "checked" : ""}>
                ${item.description}
        </li>`
    );

    let todoList = document.querySelector(".todo-list");
    todoList.innerHTML = "";

    listArray.forEach((item) => {
        todoList.innerHTML += item;
    })
}

let todoForm = document.querySelector("#add-todo-form");
todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let item = {
        description : todoForm["todo-description"].value,
        complete : false
    }
    
    todos.push(item);

    renderTodos();
    event.target.reset();
});


document.querySelector(".todo-list").addEventListener("click", (event) => {
    
    let index = event.target.getAttribute("todo-id");
    if (todos[index].complete) {
        todos[index].complete = false;
    }
    else {
        todos[index].complete = true;
    }
    
    renderTodos();
})