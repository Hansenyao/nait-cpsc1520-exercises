// this is our javascript file.

// intercept the form.

// focus to the first element

// create an event listener on the form.
    // get the form element values for title, description and amount
    // prevent the form from being submitted.
    // get the form values.
    // add the item
    // update current budget total
    // reset the values
    // focus back at the title
let budgetForm = document.querySelector("#budget-form");
budgetForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    let title = budgetForm.elements["budget-title"].value;//document.querySelector("#budget-item").value;
    let amount = budgetForm.amount.value;//document.querySelector("#budget-item-amount").value;
    let description = budgetForm.elements["budget-description"].value;//document.querySelector("#budget-item-description").value;
    if (isEmptyString(title) || isEmptyString(amount) || isEmptyString(description)) {
        alert("Content must be not null.");
        return;
    }
    if (!isGreaterThan5(parseFloat(amount))) {
        alert("Amount must be greater than 5.");
        return;
    }

    // Create new item
    createItem(title.trim(), parseFloat(amount), description.trim());

    // Update the total budget
    updateTotal(parseFloat(amount));

    // Reset
    event.target.reset();
    budgetForm.elements["budget-title"].focus();
});


// add a budget item create function
/*
<li class="list-group-item list-group-item-action" aria-current="true">
    TITLE HERE (AMOUNT HERE) - DESCRIPTION HERE
</li>
*/
const createItem = (title, amount, description) => {
    let elem = document.querySelector(".current-budget");
    // Way 1:
    //elem.innerHTML += `<li class=\"list-group-item list-group-item-action\" aria-current=\"true\"> ${title} (${amount}) - ${description}</li>`
    
    // Way 2:
    let newElem = document.createElement("li");
    newElem.classList.add("list-group-item");
    newElem.classList.add("list-group-item-action");
    newElem.ariaCurrent = "true";
    newElem.innerText = `${title} (${amount}) - ${description}`;
    elem.appendChild(newElem);
}

// add a updateTotal function
const updateTotal = (amount) => {
    let elem = document.querySelector("#budget-total");
    let budgetTotal = parseFloat(elem.innerText) + amount;
    elem.innerText = budgetTotal.toFixed(2);
}

// add active class to list item on mouseover
document.querySelector(".current-budget").addEventListener("mouseover", (event) => {
    event.target.classList.add("active");
});

// remove active class from list item on mouseout.
document.querySelector(".current-budget").addEventListener("mouseout", (event) => {
    event.target.classList.remove("active");
});

// Validate a string is null or whitespace or not
const isEmptyString = (str) => {
    return (!str || str.trim() == "") ? true : false;
}

// Validate a number is greater than 5 or not
const isGreaterThan5 = (num) => {
    return (num > 5) ? true : false;
}