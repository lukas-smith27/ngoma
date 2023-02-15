$(document).ready(function(){

    history.pushState({page: 1}, "../public/home.html")
    history.pushState({page: 2}, "../public/about.html")
    history.pushState({page: 3}, "../public/wickerFamily.html")

    $(window).load("../public/home.html")

    $(".logo-home").click(function(){
        url = "../public/home.html"
        window.location.replace(url)
    })

    $(".homeTop").click(function(){
        url = "../public/home.html"
        window.location.replace(url)
    })

    $(".auTop").click(function(){
        url = "../public/about.html"
        window.location.replace(url)
    })

    $(".wickerFamilyTop").click(function(){
        url = "../public/wickerFamily.html"
        window.location.replace(url)
    })

    // Menu Bars when screen is under X amount of pixels
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

