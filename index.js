

let task = document.querySelector(".tasks");
let addBtn = document.querySelector(".add-task");
let taskContainer = document.querySelector(".tasks-container");
let modesBtn = document.querySelector(".modes-btn");
let body = document.querySelector("body");
let i = document.querySelector(".modes-btn i");
let ModalCon = document.querySelector(".modal-container");
let okBtn = document.querySelector(".ok"); 
let successModal = document.querySelector(".success-modal");
let confirmationModal = document.querySelector(".confirmation-modal");


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
    deleteBtn.classList.add("delete-btn");

    
    item.innerText = task.value;
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
    //appending
    container.appendChild(item);
    container.appendChild(deleteBtn);
    taskContainer.appendChild(container); 
    task.value = "";     
    ModalContainer();
    successModal.style.display = "block";
    setInterval(HideModalContainer, 5000);
   }
    
   
   deleteBtn.addEventListener("click", function ()
   {
      ModalContainer();
      confirmationModal.style.display = "block";

   });
});


modesBtn.addEventListener("click", function()
{
 i.style.color = "white";
 body.classList.toggle("modes");
});

okBtn.addEventListener("click", HideModalContainer);
 




//functions
 
function ModalContainer()
{
  ModalCon.style.display = "block";
}

function HideModalContainer()
{
  ModalCon.style.display = "none";
}
