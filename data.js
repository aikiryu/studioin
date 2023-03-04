let data = [
    {
        name : '동의동락 온택트 프로그램',
        describtion : '동의대학교 지역봉사 프로젝트',
        link : '8tWsh9IuSiY'
    },
    {
        name : '논문 cg',
        describtion : 'TV 프로그램 내 CG',
        link : 'I-9CN3K7MIs'
    },
    {
        name : '라보엠 SB',
        describtion : '오페라-라보엠 홍보 SB',
        link : 'S_kqKUPxhHU'
    },
    {
        name : '아라 쇼츠',
        describtion : '기업(아라F&D)홍보영상',
        link : 'U9iFYgINOZo'
    },
    {
        name : '아라 홍보영상',
        describtion : '기업(아라F&D)홍보영상',
        link : 'JYm-jDtiovc'
    },
];

data.forEach(function(a,b){
    console.log(a);
    let container = document.querySelector('#portfolio');
    let item = document.createElement('div');
    let figure = document.createElement('figure');
    let figcaption = document.createElement('figcaption');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    let span = document.createElement('span');
    item.classList.add('item');
    item.append(figure);
    h4.innerText = a.name;
    p.innerText = a.describtion;
    span.innerText = 'VIEW';
    btn.append(span);
    btn.classList.add('viewBtn');
    figcaption.append(h4);
    figcaption.append(p);
    figcaption.append(btn);
    item.append(figcaption);

    container.append(item);

});

$('.viewBtn').click(function(){

    let i = $(this).parents('.item').index();
    let vidAddress = data[i].link;
    let tit = data[i].name;

    let iframe = `<iframe src="https://www.youtube.com/embed/${vidAddress}" title="${tit}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
$('#view').fadeIn();
$('#view').css({'display':'flex'});
$('.playBox').html(iframe);
});

$('.closeBox').click(function(){
 $('#view').fadeOut();
 $('.playBox').html('');
});