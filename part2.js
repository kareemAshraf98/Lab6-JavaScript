//Variables
let input = document.querySelector(".addTasks input");
let addButton = document.querySelector(".addTasks .plus");
let taskscontainer =document.querySelector(".tasksContent");
let noTaskyet = document.querySelector(".no-tasks-message");
let taskscount = document.querySelector(".tasks-count span");
let taskcomp = document.querySelector(".tasks-completed span");


window.onload = function() {
    input.focus();
}
addButton.onclick = function(){
    if(input.value === ""){
        console.log("no value");
    }else {
        //console.log(input.value);
        noTaskyet.remove();
        let Mspan = document.createElement("span");
        let Bdelete = document.createElement("span");
        let text = document.createTextNode(input.value);
        let Dtext = document.createTextNode("Delete");

        Mspan.appendChild(text);
        Mspan.className = 'task-box';
        //console.log(Mspan);

        Bdelete.appendChild(Dtext);
        Bdelete.className = 'delete'
        //console.log(Mspan);

        Mspan.appendChild(Bdelete);

        taskscontainer.appendChild(Mspan)
    }
}
document.addEventListener('click', function(e){

    if(e.target.className == 'delete'){

        e.target.parentNode.remove();
    }

    if(e.target.classList.contains('task-box')){
        
        e.target.classList.toggle("finished");
        
    }
});