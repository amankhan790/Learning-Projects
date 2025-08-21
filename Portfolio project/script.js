var tabLinks = document.querySelectorAll(".tab-links");
var tabcontents = document.querySelectorAll(".tab-content");
var sidemenu = document.getElementById("sidemenu");
        

function openTab(tabName){
    tabLinks.forEach(element => {
        element.classList.remove("active-links");
    });

    tabcontents.forEach(element => {
        element.classList.remove("active-tab");
    });

    event.currentTarget.classList.add("active-links");
    document.getElementById(tabName).classList.add("active-tab");

};


function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
