
var menu = document.getElementById("myTopnav");
var ham = document.getElementById("ham");
var goup = document.getElementById("totop");
var head = document.getElementById("stathead");
var scrolbool;

var sections = $('section'), nav = $('.navbar'), nav_height = nav.outerHeight();
 
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $(".static_header").addClass("scrolled")
        goup.style.display = "block"
        scrolbool = true;
    }else{
        $(".static_header").removeClass("scrolled")
        goup.style.display = "none"
        scrolbool = false;
    }
});

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('.nav-item').removeClass('active');
      sections.removeClass('active');
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});


function myFunction() {
    if(menu.style.display === 'block'){
        if(!scrolbool){
            $(".static_header").removeClass("scrolled");
             scrolbool = false;
        }
        menu.style.display = "none"; 
    }else{
        menu.style.display = "block"; 
        head.style.background = "rgb(16, 30, 39)";
        head.style.borderBottom =" 3px solid #f04c22ff";
    }     
}

function closedrawer(){
    menu.style.display = "none"; 
}

$('.quote-form').submit (function (e){
    name = document.getElementById('inputName')
    location = document.getElementById('companylocation')
    contact = document.getElementById('contactperson')
    designation = document.getElementById('contactpersondesignation')
    email = document.getElementById('email')
    phone = document.getElementById('phone')
    product = document.getElementById('productname')
    description = document.getElementById('inputEmail')
    if (!name.value || !email.value || !product.value){
        alertify.error ('Please check your entries')
        return false
    }
    else{
        $.ajax({
        method: 'POST',
        url: 'https://formspree.io/contact@indusbot.com',
        data: $('#contact-form').serialize(),
        datatype: 'json'
        });
        
      e.preventDefault()
      $(this).get(0).reset()
      alertify.success ('Message sent')
    }
});
    
$(document).ready(function(){
    $(".fa-caret-up").click(function(ev){
        ev.preventDefault()
        $("html, .main_container").animate({scrollTop:0},500)
        return false;
    });
});