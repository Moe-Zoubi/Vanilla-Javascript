const openModalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const overlayModal = document.querySelector(".modal-overlay");

openModalBtn.addEventListener("click", function(){
    overlayModal.classList.add("open-modal") ;
})

closeBtn.addEventListener("click", function(){
    overlayModal.classList.remove("open-modal") ;
})