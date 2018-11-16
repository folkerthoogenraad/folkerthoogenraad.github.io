var menuOpen = false;

window.addEventListener('resize', () => setMenu(false));

function toggleMenu(){
    setMenu(!menuOpen);
}

function setMenu(menu){
    var d = document.getElementById("navigator");
    
    d.style.transition = "transform 0.3s";
    
    menuOpen = menu;

    if(menuOpen){
        d.style.transform = "translateX(100%)";
    }else{
        d.style.transform = "translateX(0%)";
    }

}


window.addEventListener("hashchange",() => {
    setMenu(false);
}, false);