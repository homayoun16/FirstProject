//*******Copy the javascript code below into your site.js file
let count = 0;

function addTask() {
    count++;
    let Tasktemplate = `<li class="item list-group-item">Task ${count}</li>`;
    let element = document.getElementById("list");
    element.innerHTML += Tasktemplate;
}

//****End copy javascript code 