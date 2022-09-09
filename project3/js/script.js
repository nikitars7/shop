 $('.icon-menu').click(function(event){
$(this).toggleClass('active');
$('.menu__body').toggleClass('_active');
$('body').toggleClass('lock');
});


let user_icon = document.querySelector('.user-header__icon ');
user_icon.addEventListener("click",function(e){
let user_menu = document.querySelector('.user-header__menu ');
user_menu.classList.toggle('_active');
});

document.documentElement.addEventListener("click", function(e){
if(!e.target.closest('.user-header')){
    let user_menu = document.querySelector('.user-header__menu ');
    user_menu.classList.remove('_active');
}
});

function ibg(){

$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}

ibg();

if($('.main-slider__body').length>0){
    $('.main-slider__body').slick({
        //autoplay :true,
        // infinite :false,
        arrows:true,
        accessibility:false,
        slidesToShow:1,
        slidesToScroll:1,
        autoplaySpeed:2000,
        adaptiveHeight:true,
        nextArrow:'.control-main-slider__arrow_next',
        prevArrow:'.control-main-slider__arrow_prev',
        responsive:[{
            breakpoint:768,
            settings:{
                
            }
        }]
    });
}


$('.slider-lots__body').slick({
        arrows:true,
        accessibility:false,
        slidesToShow:3,
        slidesToScroll:1,
        autoplaySpeed:2000,
        adaptiveHeight:true,
        nextArrow:'.control-slider-lots__arrow_next',
        prevArrow:'.control-slider-lots__arrow_prev',
        responsive:[
        {
            breakpoint:768,
        settings:{
          slidesToShow:2
            }

        },{
            breakpoint:550,
            settings:{
                slidesToShow:1
            }
        }
        ]
    });

$('.slider-quotes__body').slick({
        arrows:true,
        accessibility:false,
        slidesToShow:1,
        slidesToScroll:1,
        autoplaySpeed:2000,
        adaptiveHeight:true,
        nextArrow:'.control-slider-quotes__circle',
        effect:'fade',
        responsive:[
        {
            breakpoint:320,
            settings:{
                autoHeight:true,
            },
            breakpoint:570,
            settings:{
                autoHeight:false,
            }
        }
        ]
    });
 
 
