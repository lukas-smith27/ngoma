$(document).ready(function(){

    history.pushState({page: 1}, "../public/home.html")

    $(window).load("../public/home.html")

    $(".logo-home").click(function(){
        url = "../public/home.html"
        window.location.replace(url)
    })

    $(".homeTop").click(function(){
        url = "../public/home.html"
        window.location.replace(url)
    })


    $(".small-menu").click(function(){
        if (!$(".links").hasClass("active")) {
            $(".links").addClass("active")
        } else {
            $(".links").removeClass("active")
            window.location.scrollTop()
        }
    })

    let $anchors = $(".links li")
    let $anchors2 = $(".links li ul li a")
    $(".aboutTop").click(function(){ return false })
    $(".servicesTop").click(function(){ return false })

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

