

let task = document.querySelector(".tasks");
let addBtn = document.querySelector(".add-task");
let taskContainer = document.querySelector(".tasks-container");



addBtn.addEventListener("click", function()
{
   let item = document.createElement("p");
   let deleteBtn = document.createElement("button");
   let container = document.createElement("div");

  

   if(task.value.trim() === "")
   {
    alert("there is nothing inside");
   }
   else
   {
     //adding classes
    container.classList.add("items-holder");
    item.innerText = task.value;
    deleteBtn.innerText = "Delete";
    //appending
    container.appendChild(item);
    container.appendChild(deleteBtn);
    taskContainer.appendChild(container);
 
    task.value = "";  
   }
    
});

