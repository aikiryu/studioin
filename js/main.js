function mobile(){


let navSwitch = false;
$('.navOpen').click(function(){

    navSwitch = !navSwitch;

    if(navSwitch == true){
       setTimeout(function(){
        $('nav div').css({
            'transform' : 'translateX(0)'
        })
       },200) 
    }else{
        setTimeout(function(){
            $('nav div').css({
                'transform' : 'translateX(-100%)'
            })
           },500) 
    }
    $('nav').stop().slideToggle();
    $(this).toggleClass('close');

});
}//mobile


function pc(){
    let aside = $('aside');
    let btn_aside = $('aside button');

    let offset_s2 = $('#s2').offset().top;
    let offset_s3 = $('#s3').offset().top;
    let offset_s4 = $('#s4').offset().top;
    
    btn_aside.click(function(){

        let i = $(this).index();
        let destination = $('section').eq(i).offset().top;

        $('html,body').stop().animate({
            'scrollTop' : destination
        });

    });


    $(window).on('scroll',function(){
        let scr = $(window).scrollTop();

        if(scr>=offset_s2 && scr<=offset_s3-300){
            $('#s2 .defaultBtn').stop().fadeIn();
        }else{
            $('#s2 .defaultBtn').stop().fadeOut();
        }
        if(scr >= offset_s2){
            aside.fadeIn();
            btn_aside.removeClass('active');
            btn_aside.eq(1).addClass('active');
        }else{
            aside.fadeOut();
        }

        if(scr >= offset_s4){
            btn_aside.removeClass('active');
            btn_aside.eq(3).addClass('active');
        }else if(scr >= offset_s3){
            btn_aside.removeClass('active');
            btn_aside.eq(2).addClass('active');
        }


        $('.obj').each(function(){
            let coPoint = $(this).offset().top;

            if(coPoint < scr){
                let diffrence = (scr - coPoint) / 1.3;
                $(this).css({'transform' : `translateY(${diffrence}px)`})
            }
        
        })

    });


    

}//pc

function common(){

    let logo =$('h1');
    let btn_toContact = $('.toContact');
    let btn_toPortfolio = $('.toPortfolio');

    let offset_contact = $('#s4').offset().top;
    let offset_portfolio = $('#s3').offset().top;

    h1.click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({
            'scrollTop' : 0
        });
    }); //h1.click
    btn_toContact.click(function(){
        $('html,body').stop().animate({
            'scrollTop' : offset_contact
        });
    });

    btn_toPortfolio.click(function(){
        $('html,body').stop().animate({
            'scrollTop' : offset_portfolio
        });
    });

    let menu = $('.menu');
    let menuList = $('.menu a'); 
    let section = $('section');
    menuList.click(function(e){
        e.preventDefault();
        let i = $(this).index();
        let destination = section.eq(i+1).offset().top;
        $('html, body').stop()
        .animate({'scrollTop' : destination});
    });

}//common





//반응형 적용영역 
let winWidth = $(window).width();
if(winWidth >= 1024){
    pc();
}else{
    mobile();
}
common();



$(window).resize(function(){
    let winW = $(window).width();

    if(winWidth <= 1024){
        setTimeout(() => {
            location.reload();
        }, 500);
    }

});