var todos = [];
var todo = document.getElementById("todo");
var todosList = document.getElementById("todos");
var add = document.getElementById("add");
var todoId = 0;
function addTodo() {
    // check if the input field is empty or not
    if (todo.value == "") {
        alert("Please enter something");
    }

    // check if the todo is already present in the list or not
    var flag = 0;
    for (var i = 0; i < todos.length; i++) {
        if (todos[i] == todo.value) {
            flag = 1;
            break;
        }
    }

    // if the todo is already present in the list, then alert the user
    if (flag == 1) {
        alert("This todo is already present in the list");
    }

    // if the todo is not present in the list, then add it to the list
    if (todo.value != "" && flag == 0) {
        todos.push(todo.value);
        let div = document.createElement("div");
        let editBtn = document.createElement("button");
        let deleteBtn = document.createElement("button");
        var li = document.createElement("li");
        div.setAttribute("id", todoId);
        div.setAttribute("class", "todoDiv");
        div.appendChild(li);
        div.appendChild(editBtn);
        div.appendChild(deleteBtn);
        div.style.display = "flex";
        div.style.justifyContent = "space-between";
        div.style.alignItems = "center";

        editBtn.innerHTML = "Edit";
        editBtn.style.marginRight = "10px";
        editBtn.style.marginLeft = "30px";
        editBtn.style.padding = "5px 10px";
        editBtn.style.fontSize = "20px";    
        editBtn.style.borderRadius = "5px";

        editBtn.onclick = function () {
        // oncliking the edit button, correspoding li will be replaced with the input field and then edited
        var editInput = document.createElement("input");
        editInput.setAttribute("type", "text");
        editInput.setAttribute("id", "editInput");
        editInput.style.marginRight = "10px";
        editInput.style.marginLeft = "30px";
        editInput.style.padding = "5px";
        editInput.style.borderRadius = "5px";
        editInput.style.border = "1px solid #333";
        editInput.style.outline = "none";
        editInput.style.fontSize = "16px";
        editInput.value = li.innerHTML;
        div.replaceChild(editInput, li);
        editBtn.innerHTML = "Save";
        editBtn.onclick = function () {
            li.innerHTML = editInput.value;
            div.replaceChild(li, editInput);
            editBtn.innerHTML = "Edit";
        };
        };

        deleteBtn.innerHTML = "Delete";
        deleteBtn.style.padding = "5px 10px";
        deleteBtn.style.fontSize = "20px"; 
        deleteBtn.style.borderRadius = "5px";
        deleteBtn.style.backgroundColor = "red";

        deleteBtn.onclick = function () {
        todos.splice(div.id, 1);
        div.remove();
        };

        li.appendChild(document.createTextNode(todo.value)); //add the value to the li
        todosList.appendChild(div); //add the div to the ul
        todo.value = "";
        todoId++;
    }
}
