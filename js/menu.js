var menuOpen = false;

const menuButtonId = "menu_button";
const menuId = "menu";

function toggleMenu(){
    setMenu(!menuOpen);
}

function setMenu(open){
    menuOpen = open;

    var el = document.getElementById(menuId);

    el.style.transition = "transform 0.3s ease";

    if(open){
        el.style.transform = "translateX(0)";
    }else{
        el.style.transform = "translateX(-100%)";
    }
}

window.addEventListener('resize', ()=>{
    setMenu(true);
});

window.addEventListener('load', ()=>{
    document.getElementById(menuButtonId).addEventListener('click', ()=>{
        toggleMenu();
    });
});