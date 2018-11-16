window.addEventListener("hashchange",() => {
    var hash = window.location.hash;

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
}, false);