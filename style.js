window.addEventListener("hashchange",updateInterface, false);
window.addEventListener("load",updateInterface, false);

function updateInterface(){
    var hash = window.location.hash;
    var titleText = hash.substr(1,1).toUpperCase() + hash.substr(2);

    var d = document.getElementById("navigatorList");
    for(var i = 0; i < d.children.length; i++){
        var a = d.children[i];

        console.log(a.getAttribute("href"));

        if(a.getAttribute("href") == hash){
            if(a.children.length >= 0)
                a.children[0].classList.add("selected");
        }else{
            if(a.children.length >= 0)
                a.children[0].classList.remove("selected");
        }
    }

    var titleNode = document.getElementById("title");
    titleNode.innerText = titleText;

    document.title = titleText + " - Folkert Hoogenraad";
}