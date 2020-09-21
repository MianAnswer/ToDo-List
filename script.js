function hello () {
    const toDoItemNODE = document.getElementById("toDoItem");

    if (toDoItemNODE.value !== "") {
        const newDiv = document.createElement("div");
        const divText = document.createTextNode(toDoItemNODE.value);

        const inputCheckbox = document.createElement("input");
        inputCheckbox.setAttribute("type", "checkbox");
        inputCheckbox.onclick = deleteItem;
        
        newDiv.appendChild(inputCheckbox);
        newDiv.appendChild(divText);

        document.getElementById("list").appendChild(newDiv);
        toDoItemNODE.value = "";
    }
}

function deleteItem() {
    this.parentNode.remove();
}