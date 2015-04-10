$(function(){
    positionCenter($(".write-us"));
    /*открытие окна*/
    $("#write-us").on("click", function(){
        $(".write-us").fadeIn(300);
    });
    /*закрытие окна*/
    $("#close-pop-up").on("click", function(){
        $(".write-us").fadeOut(300);
    });

    /*позиционирование окна*/
    function positionCenter(elem) {
        elem.css({
            marginTop: "-"  + elem.height() / 2 + "px",
            marginLeft: "-" + elem.width()  / 2 + "px"

        });
    }
});

$(function(){

    $(".top-menu-icon").on("click", function(){
        $(".account-menu").slideToggle(300);
    });

    $(window).resize(function(){
    	$("body *").removeAttr("style");
    });

    $(".drop-down-menu").on("click", function(){
        $("nav ul").slideToggle(300);
    });


});
