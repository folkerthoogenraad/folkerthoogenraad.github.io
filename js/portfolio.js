function portfolioClick(panel, id){
    var panels = document.querySelectorAll(".portfolio.panel");
    var other = document.querySelectorAll(".portfolio_content");

    panels.forEach(element => {
        element.classList.remove("selected");
    });
    
    other.forEach(element => {
        element.classList.remove("selected");
    });

    panel.classList.add("selected");

    var el = document.getElementById(id);

    el.classList.add("selected");
}