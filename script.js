function hello () {
    const toDoItemNODE = document.getElementById("toDoItem");

    if (toDoItemNODE.value !== "") {
        const newDiv = document.createElement("div");
        const divText = document.createTextNode(toDoItemNODE.value);
        
        newDiv.appendChild(divText);

        document.getElementById("list").appendChild(newDiv);
        toDoItemNODE.value = "";
    }
}