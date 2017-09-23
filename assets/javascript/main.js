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
            $("#header").addClass("move scrollheader");
            
        }
        else{
            $("#header").removeClass("move scrollheader");
        }
        
        if($(document).scrollTop()>180){
            $("#scrolltop").addClass("show");
        }
        else{
            $("#scrolltop").removeClass("show");
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

var procard = document.getElementsByClassName("project-card");
active = "left";
j=0;
function shift() {
    var right = document.getElementById("right-arrow");
    var b1 = document.getElementById("project-box-1");
    var b2 = document.getElementById("project-box-2");
    if(active=="right") {
        setTimeout(function(){
        b1.style.left = 0;
        b2.style.left = "100%";
        },270);
        active="left";
//        for(j=3; j<6; j++) {
//            procard[j].style.opacity = "0";
//            procard[j].style.transform = "scale(0.3)";
//        }
//        for(j=0; j<3; j++) {
//            procard[j].style.opacity = "1";
//            procard[j].style.transform = "scale(1)";
//        }
    } else {
        setTimeout(function(){
        if(j==1){
        b1.style.left = "-33%";
        b2.style.left = "66%";
        } else  if(j==2) {
        b1.style.left = "-66%";
        b2.style.left = "33%";
        } else if(j==3) {
        b1.style.left = "100%";
        b2.style.left = "0";
        } else if(j==4){
        b2.style.left = "-33%";
        b1.style.left = "66%";
        } else  if(j==5) {
        b2.style.left = "-66%";
        b1.style.left = "33%";
        } else {
            b2.style.left = "100%";
            b1.style.left = "0";
        }            
         },270);
        if(j==2) {
        setTimeout(function(){
            procard[0].style.opacity = "1";
        procard[0].style.transform = "rotate(0deg) scale(1)";
            procard[1].style.opacity = "1";
        procard[1].style.transform = "rotate(0deg) scale(1)";
            procard[2].style.opacity = "1";
        procard[2].style.transform = "rotate(0deg) scale(1)";
        },2000);
        }
         if(j==5) {
        setTimeout(function(){
            procard[3].style.opacity = "1";
        procard[3].style.transform = "rotate(0deg) scale(1)";
            procard[4].style.opacity = "1";
        procard[4].style.transform = "rotate(0deg) scale(1)";
            procard[5].style.opacity = "1";
        procard[5].style.transform = "rotate(0deg) scale(1)";
        },2000);
        }

//        active="right";
        procard[j].style.opacity = "0";
        procard[j].style.transform = "rotate(70deg) scale(0.3)";
        if(j==5) {
            j=0;
        } else 
            j++;
        
//        for(j=0; j<3; j++) {
//            procard[j].style.opacity = "0";
//            procard[j].style.transform = "scale(0.3)";
//        }
//        for(j=3; j<6; j++) {
//            procard[j].style.opacity = "1";
//            procard[j].style.transform = "scale(1)";
//        }
    }
}

for(i=0;i<6;i++){
procard[i].addEventListener("mouseenter", function() {
    clearInterval(proslide);
});
}

var proslide = setInterval(function(){
    shift();
},4000);

for(i=0;i<6;i++){
procard[i].addEventListener("mouseleave", function() {
   
    proslide = setInterval(function(){
        shift();
    },4000);
});
}

/* scroll bar */
//$(".do-nicescrol4").niceScroll(".wrap"); 

/* testimonial slide */



//
//var righEle = $("right_ele");
//setInterval(function(){
//    console.log("hey");
//   $("right_ele").click();
//},4000);

function scrolltop() {
    $('html, body').animate({ scrollTop: 0 }, 550);
}

var curpage = 1;
var sliding = false;
var click = true;
var left_ele = document.getElementById("left_ele");
var right_ele = document.getElementById("right_ele");
var pagePrefix = "slide";
var pageShift = 500;
var transitionPrefix = "circle";
var svg = true;

function left_eleSlide() {
	if (click) {
		if (curpage == 1) curpage = 5;
		console.log("woek");
		sliding = true;
		curpage--;
		svg = true;
		click = false;
		for (k = 1; k <= 4; k++) {
			var a1 = document.getElementById(pagePrefix + k);
			a1.className += " tran";
		}
		setTimeout(() => {
			move();
		}, 200);
		setTimeout(() => {
			for (k = 1; k <= 4; k++) {
				var a1 = document.getElementById(pagePrefix + k);
				a1.classList.remove("tran");
			}
		}, 1400);
	}
}

function right_eleSlide() {
	if (click) {
		if (curpage == 4) curpage = 0;
		console.log("woek");
		sliding = true;
		curpage++;
		svg = false;
		click = false;
		for (k = 1; k <= 4; k++) {
			var a1 = document.getElementById(pagePrefix + k);
			a1.className += " tran";
		}
		setTimeout(() => {
			move();
		}, 200);
		setTimeout(() => {
			for (k = 1; k <= 4; k++) {
				var a1 = document.getElementById(pagePrefix + k);
				a1.classList.remove("tran");
			}
		}, 1400);
	}
}

function move() {
	if (sliding) {
		sliding = false;
		if (svg) {
			for (j = 1; j <= 9; j++) {
				var c = document.getElementById(transitionPrefix + j);
				c.classList.remove("steap");
				c.setAttribute("class", transitionPrefix + j + " streak");
				console.log("streak");
			}
		} else {
			for (j = 10; j <= 18; j++) {
				var c = document.getElementById(transitionPrefix + j);
				c.classList.remove("steap");
				c.setAttribute("class", transitionPrefix + j + " streak");
				console.log("streak");
			}
		}

		// for(k=1;k<=4;k++){
		//   var a1 = document.getElementById(pagePrefix + k);
		//   a1.className += ' tran';
		// }

		setTimeout(() => {
			for (i = 1; i <= 4; i++) {
				if (i == curpage) {
					var a = document.getElementById(pagePrefix + i);
					a.className += " up1";
				} else {
					var b = document.getElementById(pagePrefix + i);
					b.classList.remove("up1");
				}
			}
			sliding = true;
		}, 600);
		setTimeout(() => {
			click = true;
		}, 1700);
        
		setTimeout(() => {
			if (svg) {
				for (j = 1; j <= 9; j++) {
					var c = document.getElementById(transitionPrefix + j);
					c.classList.remove("streak");
					c.setAttribute("class", transitionPrefix + j + " steap");
				}
			} else {
				for (j = 10; j <= 18; j++) {
					var c = document.getElementById(transitionPrefix + j);
					c.classList.remove("streak");
					c.setAttribute("class", transitionPrefix + j + " steap");
				}
				sliding = true;
			}
		}, 850);
		setTimeout(() => {
			click = true;
		}, 1700);
	}
}

left_ele.onmousedown = () => {
	left_eleSlide();
};

right_ele.onmousedown = () => {
	right_eleSlide();
};

document.onkeydown = e => {
	if (e.keyCode == 37) {
		left_eleSlide();
	} else if (e.keyCode == 39) {
		right_eleSlide();
	}
};

//for codepen header

document.getElementById("slider_test").addEventListener("mouseenter",function(){
    clearInterval(slideStore);
}); 
        
document.getElementById("slider_test").addEventListener("mouseleave",function(){
    var slideStore = setInterval(function(){
   right_eleSlide();
},6000);
});           
   
var slideStore = setInterval(function(){
   right_eleSlide();
},6000);
       