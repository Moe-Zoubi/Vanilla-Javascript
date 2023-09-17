const sidebarBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar");

sidebarBtn.addEventListener("click", function(){
    sideBar.classList.toggle("show-sidebar") ;
})

closeBtn.addEventListener("click", function(){
    sideBar.classList.remove("show-sidebar") ;
})