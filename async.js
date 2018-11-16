
window.addEventListener("hashchange",() => {
    setPage(window.location.hash.substr(1) + ".html");
}, false);

function setPage(page){
    var r = new XMLHttpRequest();
    
    console.log("loading page " + page);

    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return;

        console.log(r.responseText);

        document.getElementById("content").innerHTML = r.responseText;
    };
    
    r.open("GET", page, true);
    r.send();
}

window.addEventListener("load", () => {
    if(window.location.hash == ""){
        window.location.hash = "#home";
    }
});