
/**
 * Requestcallback for loadFile
 * 
 * @callback requestCallback
 * @param {string} err
 * @param {string} responseText
 */

/**
 * @param {string} page Page to load
 * @param {requestCallback} callback 
 */
function loadFile(page, callback){
    var r = new XMLHttpRequest();

    r.onreadystatechange = function () {
        if (r.readyState != 4) return;

        var err = undefined;
        if(!(r.status == 0 || r.status == 200)){
            err = "Status not 200, status = " + r.status;
        }

        callback(err, r.responseText);
    };
    
    r.open("GET", page, true);
    r.send();
}

/**
 * Sets the current page
 * @param {string} hash 
 */
function setPage(page){
    console.log("setting page " + page);
    loadFile("pages/" + page + ".html", (err, result)=>{
        if(err == undefined){
            window.scrollTo(0, 0);
            document.getElementById("template").innerHTML = result;
        }else{
            window.location = "index.html#404";
        }
    });
}

window.addEventListener('hashchange', () => {
    setPage(window.location.hash.substr(1));
});

window.addEventListener('load', () => {
    if(window.location.hash === ""){
        window.location.hash = "home";
    }
    else{
        setPage(window.location.hash.substr(1));
    }
});