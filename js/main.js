$(function(){function e(){clearInterval(a),$(".active-slider").hasClass("main__slider-item-1")?$("#slider_2").click():$(".active-slider").hasClass("main__slider-item-2")?$("#slider_3").click():$(".active-slider").hasClass("main__slider-item-3")&&$("#slider_1").click(),s=!0,setTimeout(function(){s=!1,a=setInterval(e,n)},n)}function i(e){var i=e.find(".main__slider-title"),n=e.find(".main__slider-subtitle").first(),s=e.find(".main__slider-subtitle").last();$(".main__slider-item").removeClass("active-slider"),e.addClass("active-slider"),i.fadeOut("0"),i.fadeIn(t+500),n.css("top","-1000px"),n.animate({top:0},t+500),s.css("right","-10000px"),s.animate({right:0},t+500)}var t=1e3,n=6e3,s=!1,a=setInterval(e,n);$(".main__slider-item").css("transition-duration",t),$("#slider_1").click(function(){s||(s=!0,$(".main__slider-item").stop().animate({left:"0vw"},t),i($(".main__slider-item-1")),setTimeout(function(){s=!1},t))}),$("#slider_2").click(function(){s||(s=!0,$(".main__slider-item").stop().animate({left:"-100vw"},t),i($(".main__slider-item-2")),setTimeout(function(){s=!1},t))}),$("#slider_3").click(function(){s||(s=!0,$(".main__slider-item").stop().animate({left:"-200vw"},t),i($(".main__slider-item-3")),setTimeout(function(){s=!1},t))});var l=$(".form__main-info");l.val().length>11&&l.css("font-size","40px"),l.val().length>15&&l.css("font-size","25px"),$(".form__main-info").on("change",function(){l.val().length>11&&l.css("font-size","40px")}),$(".copy-icon").click(function(e){var i=document.createRange();i.selectNode(document.querySelector(".form__copy")),window.getSelection().addRange(i);try{var t=document.execCommand("copy")?"successful":"unsuccessful";console.log("Copy email command was "+t)}catch(e){console.log("Oops, unable to copy")}window.getSelection().removeAllRanges()})});