$("#navlist li a").click(function(e){
    e.preventDefault();
    var section = $(this).attr("href");
    $("section").removeClass("section-active");
    $(section).addClass("section-active");
    $("#navlist li a").removeClass("tab-active");
    $(this).addClass("tab-active");
});