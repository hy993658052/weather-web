$(document).ready(function(){
    $(".tq-hours .btn-next").click(function(){
        var mleft = $(".tq-hours #ct-weather").css("margin-left");
        mleft = mleft.slice(0,mleft.length-2);
        mleft = mleft - 1100 < -1400 ? -1400 : mleft - 1100;
        $(".tq-hours #ct-weather").css("margin-left",mleft + "px");
    });
    $(".tq-hours .btn-prev").click(function(){
        var mright = $(".tq-hours #ct-weather").css("margin-left");
        mright = mright.slice(0,mright.length-2);
        mright = Number(mright) + 1100 > 0 ? 0 : Number(mright) + 1100;
        $(".tq-hours #ct-weather").css("margin-left",mright + "px");
    });
    $("#ct-index .btn-next").click(function(){
        $("#ct-index #ct-content").css("margin-left","-440px");
    });
    $("#ct-index .btn-prev").click(function(){
        $("#ct-index #ct-content").css("margin-left","0px");
    });
});