function openNav() {
    document.getElementById("sidenav").style.width = "200px";
	$("#navlinks").fadeIn("slow");
    $("#logo").fadeOut("fast");
    $("#X").fadeIn("slow");
    document.getElementById("navbtn").style.left = "125px";
    document.getElementById("navbtn").setAttribute( "onClick", "javascript: closeNav();");
    document.getElementById("sidenav").removeAttribute( "onClick");
    $("#dimmer").fadeIn("slow");
}

function closeNav() {
    document.getElementById("sidenav").style.width = "5em";
    document.getElementById("main").style.marginLeft= "5em";
    document.getElementById("navbtn").style.left = "0px";
    document.getElementById("navbtn").setAttribute( "onClick", "javascript: openNav();");
    $("#logo").fadeIn("slow");
    document.getElementById("X").style.display = "none";
    $("#navlinks").fadeOut("fast");
    $("#dimmer").fadeOut("fast", function() {
        document.getElementById("sidenav").setAttribute( "onClick", "javascript: openNav();");
    });
}

function scrollTo(hash) {
    $(document.body).animate({
    'scrollTop':   $(hash).offset().top
    }, 500);
}

$(document).ready(function() {
    $("#clicker").click(function () {
        $(".overlay").fadeIn();
    });
    $(".exit").click(function(){
        $(".overlay").fadeOut();
    });
});
