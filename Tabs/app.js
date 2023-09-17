const tabBtns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const contents = document.querySelectorAll(".content");

about.addEventListener("click",function(e){
    const buttonId = e.target.dataset.id;
    if(buttonId){
        tabBtns.forEach(function(btn){
            if(btn.dataset.id === buttonId){
                btn.classList.add("active");
            }else{
                btn.classList.remove("active");
            }
        });
        contents.forEach(function(content){
            if(content.id === buttonId){
                content.classList.add("active");
            }else{
                content.classList.remove("active");
            }
        });
    }
});    