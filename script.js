var menuButton=document.getElementById("menu-button");
var nav=document.querySelector("nav");
menuButton.addEventListener("click",MenuChange);
var isOpened=false;
var navItems=document.getElementById("menu-items");
function MenuChange(){
    if(!isOpened){
        nav.classList.remove("menu-overflow");
        navItems.classList.add("menu-active");
        menuButton.classList.remove("menu-animation-left");
        menuButton.classList.add("menu-animation-right");
        isOpened=true;
    }else{
        navItems.classList.remove("menu-active");
        menuAnimationClose()
        setTimeout(menuOverflowClose,300);
    }
    
}

function menuOverflowClose(){
    nav.classList.add("menu-overflow");
}


function menuAnimationClose(){
        menuButton.classList.remove("menu-animation-right");
        menuButton.classList.add("menu-animation-left");
        isOpened=false;
}

var linkMenu=document.querySelectorAll(".link-menu");
linkMenu.forEach(link => {
    link.addEventListener('click',() => {
        navItems.classList.remove('menu-active');
        menuAnimationClose()
        setTimeout(menuOverflowClose,300);
});
});
