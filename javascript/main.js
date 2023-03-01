$(document).ready(function(){
    $(window).load("../public/index.html")

    // Menu Bars when screen is under X amount of pixels
    $(".small-menu").click(function(){
        if (!$(".links").hasClass("active")) {
            $(".links").addClass("active")
        } else {
            $(".links").removeClass("active")
            window.location.scrollTop()
        }
    })

    $($anchors).click(function(){
        $(".links").removeClass("active")
    })
    $($anchors2).click(function(){
        $(".links").removeClass("active")
    })
    $(".logo-home").click(function(){
        $(".links").removeClass("active")
    })
})

