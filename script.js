$(document).ready(function() {
    $(".black").click(function(){
        $("html").css({
        "background": "black",
        "color": "white"
        });
        $("a").css("color", "white");
    });

    $(".red").click(function(){
        $("html").css({
        "background": "rgb(63, 31, 240)",
        "color": "black"
        });
        $("a").css("color", "black");
    });

    $(".green").click(function(){
        $("html").css({
        "background": "rgb(64, 89, 230)",
        "color": "black"
        });
        $("a").css("color", "black");
    });

    $(".blue").click(function(){
        $("html").css({
        "background": "rgb(173, 173, 212)",
        "color": "black"
        });
        $("a").css("color", "black");
    });

    $(".white").click(function(){
        $("html").css({
        "background": "rgb(255, 255, 255)",
        "color": "black"
        });
        $("a").css("color", "black");
    });
    
});