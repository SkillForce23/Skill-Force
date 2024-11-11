//setion active/inactive//
var AnmeldungSucceeded = false;
$("#navlist li a").click(function(e){
    e.preventDefault();
    var section = $(this).attr("href");
    $("section").removeClass("section-active");
    if(section =="#Anmeldung")
    {
        if(AnmeldungSucceeded==true)
            {
                section = $("#VideoKurs");
                console.log(section);
            }
        $(section).addClass("section-active");
    }
    else
    {
        $(section).addClass("section-active");
    }
    $("#navlist li a").removeClass("tab-active");
    $(this).addClass("tab-active");
});
var Users=[
    {
        username : "ToMMyStudios",
        password : "SoTo1209!"
    },
    {
        username : "SchmierÖl",
        password : "DeineMum"
    },
    {
        username : "Hero24",
        password : "j8cs9ad2"
    },
    {
        username : "Islam",
        password : "l67ds89e"
    }
]
function getInfo()
{
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    
    for ( var i = 0; i< Users.length; i++)
        {
            if(username==Users[i].username&& password==Users[i].password)
               {
                    console.log("Anmeldung Erfolgreich!");
                   AnmeldungSucceeded = true;
                   ChangeView();
                   return;
               }
            console.log("Anmledung Fehlgeschlagen!")
            $("#username").val("");
            $("#password").val("");
            
        }
}
function ChangeView()
{
    $("#Anmeldung").removeClass("section-active");
    $("#VideoKurs").addClass("section-active");
    $("#AnmeldeÜberschrift").text("Video-Kurs");
}