// button back to top
//Get the button
let btnBackToTop = document.querySelector(".btn-back-to-top")

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    if (btnBackToTop !== null) {
        scrollbtnBackToTopFun();
    }
};

function scrollbtnBackToTopFun() {
    if ( document.body.scrollTop > 800 || document.documentElement.scrollTop > 800 ) {
        btnBackToTop.style.display = "flex";
    } else {
        btnBackToTop.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
if (btnBackToTop !== null) {
    btnBackToTop.addEventListener("click", backToTop);
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))






// Javascript to embed a video on modal!

var iframeVideo;
var videoSrc;
var videoDataBsTarget;
var videoDataBsTargetModale
var videoBtn;

if ( videoBtn = document.querySelectorAll('.video-btn-modal')) {
    videoBtn.forEach(element => {
        element.addEventListener('click',function(e){
            videoSrc = element.getAttribute('data-bs-src')
            videoDataBsTarget = element.getAttribute('data-bs-target')

            iframeVideo = document.querySelector(videoDataBsTarget + " .iframeVideo");

            videoDataBsTarget = videoDataBsTarget.slice(1)
            videoDataBsTargetModale = document.getElementById(videoDataBsTarget)

            videoDataBsTargetModale.addEventListener('shown.bs.modal',(e)=>{
                iframeVideo.setAttribute('src', videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0')
            })

            videoDataBsTargetModale.addEventListener('hide.bs.modal',(e)=>{
                iframeVideo.setAttribute('src', videoSrc)
            })

        })
    })

}


// initialize the AOS
AOS.init();


// $(window).on("load",function(){
//      $(".loader-wrapper").fadeOut("slow");
// });

window.addEventListener("load", function(event){
    document.querySelector('.loader-wrapper').style.display = "none";
})