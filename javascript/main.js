$(document).ready(function(){
    window.location = "https://ngomacenterinc.com"
    // Menu Bars when screen is under X amount of pixels
    $(".small-menu").click(function(){
        if (!$(".links").hasClass("active")) {
            $(".links").addClass("active")
        } else {
            $(".links").removeClass("active")
            window.location.scrollTop()
        }
    })
})

