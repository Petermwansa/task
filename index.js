const inputBox = document.getElementById("input__box")
const listContainer = document.getElementById("list__container")


// when we click on the add button this code will be excecuted 
addTask = () => {

    //here we are checking if the list is empty, it pops up an alert
    if (inputBox.value === '') {
        alert("You must type something in the input box")
    } else {
        // if there is something typed, it creates an element and appends it to the list-container variable
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = "";

    // whenever we add any changes to our app, the function for saving them will be called 
    saveData();
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
}, false)

//this function will save our data to the local storange 
saveData = () => {
    // it will save the innerHTML of the listContainer as data 
    localStorage.setItem("data", listContainer.innerHTML);
}

// this function is for displaying the saved data about whenever the browser is opened again 
showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();