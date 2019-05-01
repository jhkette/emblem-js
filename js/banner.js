var bannerStatus = 1;
var bannerTimer = 8000;

var startBannerTimer = setInterval(function () {
    bannerLoop();
}, bannerTimer)

function bannerLoop() {
    const lead1 = document.getElementById("lead");
    const lead2 = document.getElementById("lead1");
    const lead3 = document.getElementById("lead2")

    if (bannerStatus === 1) {
        lead2.style.opacity = 0;
        setTimeout(function () {
            lead1.style.right = "0px";
            lead1.style.zIndex = "1000";
            lead2.style.right = "-100%";
            lead2.style.zIndex = "1500";
            lead3.style.right = "100%";
            lead3.style.zIndex = "500";

        }, 500)
        setTimeout(function () {
            lead2.style.opacity = "1";
        }, 1000)
        bannerStatus = 2;
    } else if (bannerStatus === 2) {
        lead3.style.opacity = 0;
        setTimeout(function () {
            lead2.style.right = "0px";
            lead2.style.zIndex = "1000";
            lead3.style.right = "-100%";
            lead3.style.zIndex = "1500";
            lead1.style.right = "100%";
            lead1.style.zIndex = "500";

        }, 500)
        setTimeout(function () {
            lead3.style.opacity = "1";
        }, 1000)
        bannerStatus = 3;
    } else if (bannerStatus === 3) {
        lead1.style.opacity = 0;
        setTimeout(function () {
            lead3.style.right = "0px";
            lead3.style.zIndex = "1000";
            lead1.style.right = "-100%";
            lead1.style.zIndex = "1500";
            lead2.style.right = "100%";
            lead2.style.zIndex = "500";

        }, 500)
        setTimeout(function () {
            lead1.style.opacity = "1";
        }, 1000)
        bannerStatus = 1;
    }
}

function displayText() {
    const texts = document.querySelectorAll('.heading-text');
    texts.forEach(function (text) {
        text.style.display = "block";
        text.style.zIndex = "4500";
    })
}