

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

function displayText(){
    const texts = document.querySelectorAll('.heading-text');
    texts.forEach(function(text){
        text.style.display ="block";
        text.style.zIndex = "4500";
    })
}