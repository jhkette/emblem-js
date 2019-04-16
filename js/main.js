window.onload = init;

function init(){
window.onscroll = function() {
  hideNav();
}
}


function hideNav(){
    var currentScrollPos = window.pageYOffset;
    const container = document.getElementById("mainheader");
    if(currentScrollPos > 200){
    console.log('hello');
    container.style.top = "-400px";
    }
}