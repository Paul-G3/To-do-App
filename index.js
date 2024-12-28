

let task = document.querySelector(".tasks");
let addBtn = document.querySelector(".add-task");
let taskContainer = document.querySelector(".tasks-container");
let modesBtn = document.querySelector(".modes-btn");
let body = document.querySelector("body");
let i = document.querySelector(".modes-btn i");
let ModalCon = document.querySelector(".modal-container");
let okBtn = document.querySelector(".ok"); 
let okDelete = document.querySelector(".delete-Ok");
let yesBtn = document.querySelector(".yes");
let noBtn = document.querySelector(".no");
let successModal = document.querySelector(".success-modal");
let DeleteModal = document.querySelector(".Deleted-modal");
let confirmationModal = document.querySelector(".confirmation-modal");
// let interval = null;

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
    
    confirmationModal.style.display = "none";
    DeleteModal.style.display = "none";
    ModalContainer();
    successModal.style.display = "block";
   //  interval = setInterval(HideModalContainer, 5000);
   }    
   
   deleteBtn.addEventListener("click", function ()
   {
      successModal.style.display = "none";
      DeleteModal.style.display = "none";
      // clearInterval(interval);
      ModalContainer();     
      confirmationModal.style.display = "block";

   });
});


modesBtn.addEventListener("click", function()
{
//  i.style.color = "white";
 body.classList.toggle("modes");
});

okBtn.addEventListener("click", HideModalContainer);
okDelete.addEventListener("click", HideModalContainer);
 
noBtn.addEventListener("click",function()
{
   HideModalContainer(); 
});

yesBtn.addEventListener("click", function()
{
   
   ModalContainer();
   confirmationModal.style.display = "none";
   successModal.style.display = "none";
   DeleteModal.style.display = "block";
   // setInterval(HideModalContainer, 5000);
   let itemHolder = document.querySelector(".items-holder");
   itemHolder.remove();
});


//functions
 
function ModalContainer()
{
  ModalCon.style.display = "block";
}

function HideModalContainer()
{
  ModalCon.style.display = "none";
}

// Search function
document.querySelector(".search").addEventListener('input', function () {
   const searchValue = this.value.toLowerCase();
   const allP = document.querySelectorAll('.items-holder p');  

   allP.forEach(function (row) {
       const name = row.textContent.toLowerCase(); 
       console.log(name);
       if (name.includes(searchValue)) {
           row.parentElement.style.display = ''; // Show matching rows
       } else {
           row.parentElement.style.display = 'none'; // Hide non-matching rows
       }
   }); 
 
});
