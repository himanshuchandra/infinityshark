$(document).ready(function() {
        $('#particles').particleground({
            minSpeedX: 0.1,
            maxSpeedX: 0.7,
            minSpeedY: 0.1,
            maxSpeedY: 0.7,
            directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
            directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
            density: 18000, // How many particles will be generated: one particle every n pixels
            dotColor: 'white',
            lineColor: 'rgba(0,0,0,0.5)',
            particleRadius: 7, // Dot size
            lineWidth: 1,
            curvedLines: false,
            proximity: 200, // How close two dots need to be before they join
            parallax: true,
            parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
            onInit: function() {},
            onDestroy: function() {}
        });
           var chck=false;
        $("#btn").click(function(){
           
        $("#main-nav").slideToggle(1000);
          /* if(chck==false)
                {
                    
                
            $("i").replaceWith('<i class="fa fa-times" aria-hidden="true"></i>')
                chck=true;
                } else {
                 
                    $("i").replaceWith('<i class="fa fa-bars" aria-hidden="true"></i>')
                chck=false;
                }*/
        }) ;
    $(window).scroll(function(){
        if($(document).scrollTop()>40){
            $("#header").addClass("move");
        }
        else{
            $("#header").removeClass("move");
        }
    });
    $('.border').click(function(){
            $('.project').fadeIn(1000);
            $('.project').removeClass("hide")
        });
    $('.close span').click(function(){
        $('.project').addClass("hide")
    });
   var owl=$('.owl-carousel');
        owl.owlCarousel({
         items : 4,
         loop:true,
           autoplay:true,
        autoplayTimeout:1000,
            responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  });
});

active = "left";
function shift() {
    var right = document.getElementById("right-arrow");
    var b1 = document.getElementById("project-box-1");
    var b2 = document.getElementById("project-box-2");
    if(active=="right") {
        b1.style.right = 0;
        b2.style.left = "100%";
        active="left";
    } else {
        b1.style.right = "100%";
        b2.style.left = 0;
        active="right";
    }
}