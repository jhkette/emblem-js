window.onload = init;

function init(){
window.onscroll = function() {
  hideNav();
}
}


function hideNav(){
    var currentScrollPos = window.pageYOffset;
    const container = document.getElementById("mainheader");
    const logo = document.getElementById("mainlogo");
    if(currentScrollPos > 200){
    console.log('hello');
    logo.style.height = "100px";
    }
    else{
        container.style.top = "0";
    }
}