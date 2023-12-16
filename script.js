let input = document.getElementById("input");
let btn = document.getElementById("btn");
let ul = document.getElementById("ul");

function addTask(){
    if(input.value == ""){
        alert("must enter task")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = `${input.value} <i class="fa-solid fa-xmark" ></i>`;
        ul.appendChild(li);
        input.value = "";

        li.querySelector("i").addEventListener("click", remove)

        function remove() {
            li.remove()
        }


    }
}