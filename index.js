const inputBox = document.getElementById("input__box")
const listContainer = document.getElementById("list__container")


// when we click on the add button this code will be excecuted 
function addTask () {

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
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
}, false)