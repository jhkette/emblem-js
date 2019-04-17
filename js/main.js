window.onload = init;

function init() {
    const icon = document.getElementById("nav-icon1");
    window.addEventListener('scroll', debounce(hideNav));
    icon.addEventListener('click', openNav);
}

// debounce to stop scroll event firing too often
function debounce(func, wait = 5, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};



function hideNav() {
    var w = window.innerWidth;
    var currentScrollPos = window.pageYOffset;
    const commonlinks = document.getElementById("commonlinkscontainer");
    
    const logo = document.getElementById("logoimage");
    const logonav = document.getElementById("logonav");
    const mainheader = document.getElementById("mainheader");
   
    if((currentScrollPos > 200) && (w > 660)){
        heading.classList.add('smallheading');
        logo.classList.add("small");
        commonlinks.style.top = '-100px';
        logonav.classList.add("nopadding");
        mainheader.style.opacity = '.9';
    } 
    else if(currentScrollPos > 200){
        commonlinks.style.top = '-100px';
        mainheader.style.opacity = '.9';
        logonav.classList.add("nopadding");
    }
    
    else {
        logo.classList.remove("small");
        heading.classList.remove('smallheading');
        logonav.classList.remove("nopadding");
        commonlinks.style.top = '0px';
        mainheader.style.opacity = '1';
    }
}

function openNav() {
    const icon = document.getElementById("nav-icon1");
    const navigation = document.getElementById('navigation');
    navigation.classList.toggle('openmob');
    icon.classList.toggle('open');
}