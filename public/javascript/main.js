$(document).ready(function(){

    history.pushState({page: 1}, "../public/home.html")
    history.pushState({page: 2}, "../public/about.html")
    history.pushState({page: 3}, "../public/wickerFamily.html")
    history.pushState({page: 4}, "../public/projects.html")
    history.pushState({page: 5}, "../public/womenChildren.html")
    history.pushState({page: 5}, "../public/youthProjects.html")

    $(window).load("../public/home.html")

    $(".logo-home").click(function(){
        url = "../public/home.html"
        window.location.replace(url)
    })

    $(".homeTop").click(function(){
        url = "../public/home.html"
        window.location.replace(url)
    })

    $(".aboutTop").click(function(){
        url = "../public/about.html"
        window.location.replace(url)
    })

    $("#aboutHome").click(function(){
        url = "../public/about.html"
        window.location.replace(url)
    })

    $(".wickerFamilyTop").click(function(){
        url = "../public/wickerFamily.html"
        window.location.replace(url)
    })

    $(".projectsTop").click(function(){
        url = "../public/projects.html"
        window.location.replace(url)
    })

    $("#projectsHome").click(function(){
        url = "../public/projects.html"
        window.location.replace(url)
    })

    $(".womenChildrenTop").click(function(){
        url = "../public/womenChildren.html"
        window.location.replace(url)
    })

    $(".womenChildren").click(function(){
        url = "../public/womenChildren.html"
        window.location.replace(url)
    })

    $(".youthTop").click(function(){
        url = "../public/youthProjects.html"
        window.location.replace(url)
    })

    $(".youth").click(function(){
        url = "../public/youthProjects.html"
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

