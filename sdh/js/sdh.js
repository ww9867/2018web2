var num = 0;
$(document).ready(function () {
    setInterval(slide,3000);
});
function slide() {
    // .animate( animaate내용 , animate동작시간? , function() { animate완료후 실행 });
    // .eq()=선택자중에서 번호로 선택함( 0= 첫번째)
    // siblings()=형제
    $("#slide>ul>li").eq(num).siblings().css({'left':'100%'});
    $("#slide>ul>li").eq(num).animate({left:'-100%'},300,function () {
        $(this).css({left:'100%'});
    });
    num++;
    if(num >= $("#slide>ul>li").length )
        num = 0;
    $("#slide>ul>li").eq(num).animate({left:0},300);
    /*
        $('table').asdasdasc({
            $(this) this=부모랑비슷한뜻=table
        })
     */
    // $("#slide>ul>li").eq(num-1).animate({left:1000},300);
    // $("#slide>ul>li").eq(num).animate({left:0},300);
    // num++;
    // if(num >= $("#slide>ul>li").length )
    //     num = 0;
}

