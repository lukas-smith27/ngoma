$(document).ready(function(){
    // Menu Bars when screen is under X amount of pixels
    $(".small-menu").click(function(){
        if (!$(".links").hasClass("active")) {
            $(".links").addClass("active")
        } else {
            $(".links").removeClass("active")
            window.location.scrollTop()
        }
    })

    $(".logo-home").click(function(){
        locacation.href = "https://www.ngomacenterinc.com/index.html"
    })
    $(".homeTop").click(function(){
        locacation.href = "https://www.ngomacenterinc.com/index.html"
    })
    $(".aboutTop").click(function(){
        locacation.href = "https://www.ngomacenterinc.com/about.html"
    })
    $(".logo-home").click(function(){
        locacation.href = "https://www.ngomacenterinc.com/index.html"
    })
})

