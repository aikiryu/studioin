

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