var particles = Particles.init({
    selector: '.background',
    sizeVariations: 2,
    color : ["#a2aebb"],
    connectParticles : true,
});

function startStop(x) {
    if ( document.getElementById("pausePlay").classList.contains("fa-play")){
        document.getElementById("pausePlay").classList.remove('fa-play');
        document.getElementById("pausePlay").classList.add('fa-pause');
        particles.resumeAnimation();
    }else{
        document.getElementById("pausePlay").classList.remove('fa-pause');
        document.getElementById("pausePlay").classList.add('fa-play');
        particles.pauseAnimation();
    }
}
$(function() {
    var navbar = $(".navbar");
    var tabs = $(".tabs");
    var rightEffect = $(".rightEffect");
    var downArrow = $(".down-arrow");

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        
        if (scroll >= 350) {
            navbar.removeClass('navbar').addClass('navbar-alt');
            tabs.removeClass('tab').addClass('tab-alt');
            rightEffect.removeClass('rightEffect').addClass('pullUp');
            downArrow.removeClass('.down-arrow').addClass('invisible');
        } else {
            navbar.removeClass("navbar-alt",'pullUp').addClass('navbar','rightEffect');
            tabs.removeClass('tab-alt').addClass('tab');
            rightEffect.removeClass('pullUp').addClass('rightEffect');
            downArrow.removeClass('.down-arrow').addClass('invisible');
        }
    });
});

$(window).on("load", function(){
    $(".loader-wrapper").fadeOut("slow");
})

document.addEventListener('DOMContentLoaded', function () {
    animateTitle();
  });
  
  function animateTitle() {
    const titleElement = document.getElementById('animatedTitle');
    const text = titleElement.textContent;
    console.log(text)
    titleElement.innerHTML = ''; // Clear the original text
    const characters = text.split('');

    for (let i = 0; i < text.length; i++) {
        const charSpan = document.createElement('span');
        charSpan.textContent = text[i] === ' ' ? '\u00A0' : text[i];
        charSpan.className = 'name-mobile-span';
        charSpan.color = 'white';
        charSpan.style.animationDelay = i * 0.1 + 's';
        titleElement.appendChild(charSpan);
      }
  }