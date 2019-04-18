window.onload = init;

function init() {
    const icon = document.getElementById("nav-icon1");
    window.addEventListener('scroll', debounce(hideNav));
    icon.addEventListener('click', openNav);
    bannerLoop();
 
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

    var currentScrollPos = window.pageYOffset;
    const commonlinks = document.getElementById("commonlinkscontainer");
    const logo = document.getElementById("logoimage");
    const logonav = document.getElementById("logonav");
    const mainheader = document.getElementById("mainheader");

    if (currentScrollPos > 200) {
        heading.classList.add('smallheading');
        logo.classList.add("small");
        commonlinks.style.top = '-100px';
        logonav.classList.add("nopadding");
        mainheader.style.opacity = '.9';
    } else {
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

var bannerStatus =1;
var bannerTimer = 8000;

var startBannerTimer = setInterval(function(){
   bannerLoop();
},bannerTimer)

function bannerLoop(){
    if(bannerStatus ===1){
        document.getElementById("lead1").style.opacity = 0;
        setTimeout(function(){
            document.getElementById("lead").style.right = "0px";
            document.getElementById("lead").style.zIndex = "1000";
            document.getElementById("lead1").style.right = "-100%";
            document.getElementById("lead1").style.zIndex = "1500";
            document.getElementById("lead2").style.right = "100%";
            document.getElementById("lead2").style.zIndex = "500";

        }, 500)
        setTimeout(function(){
            document.getElementById("lead1").style.opacity = "1";
        }, 1000)
        bannerStatus = 2;
    }
    else if(bannerStatus === 2){
        document.getElementById("lead2").style.opacity = 0;
        setTimeout(function(){
            document.getElementById("lead1").style.right = "0px";
            document.getElementById("lead1").style.zIndex = "1000";
            document.getElementById("lead2").style.right = "-100%";
            document.getElementById("lead2").style.zIndex = "1500";
            document.getElementById("lead").style.right = "100%";
            document.getElementById("lead").style.zIndex = "500";

        }, 500)
        setTimeout(function(){
            document.getElementById("lead2").style.opacity = "1";
        }, 1000)
        bannerStatus = 3;
    }
    else if(bannerStatus ===3){
        document.getElementById("lead").style.opacity = 0;
        setTimeout(function(){
            document.getElementById("lead2").style.right = "0px";
            document.getElementById("lead2").style.zIndex = "1000";
            document.getElementById("lead").style.right = "-100%";
            document.getElementById("lead").style.zIndex = "1500";
            document.getElementById("lead1").style.right = "100%";
            document.getElementById("lead1").style.zIndex = "500";

        }, 500)
        setTimeout(function(){
            document.getElementById("lead").style.opacity = "1";
        }, 1000)
        bannerStatus = 1;
    }
}

