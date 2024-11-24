//setion active/inactive//
document.addEventListener("contextmenu", e=> e.preventDefault(), false);
document.addEventListener("keydown", e => {
    if(e.ctrlKey || e.keyCode == 123)
        {
            e.stopPropagation();
            e.preventDefault();
        }
       
})
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

var Button =[$("#1"),$("#2"),$("#3"),$("#4"),$("#5"),$("#6"),$("#7"),$("#8"),$("#9"),$("#10")];
var Panels = [$("#Kathegorie1"),$("#Kathegorie2"),$("#Kathegorie3"),$("#Kathegorie4"),$("#Kathegorie5"),$("#Kathegorie6"),$("#Kathegorie7"),$("#Kathegorie8"),$("#Kathegorie9"),$("#Kathegorie10")];

$(Button[0]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[0].addClass("section-active");
})
$(Button[1]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[1].addClass("section-active");
})
$(Button[2]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[2].addClass("section-active");
})
$(Button[3]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[3].addClass("section-active");
})
$(Button[4]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[4].addClass("section-active");
})
$(Button[5]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[5].addClass("section-active");
})
$(Button[6]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[6].addClass("section-active");
})
$(Button[7]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[7].addClass("section-active");
})
$(Button[8]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[8].addClass("section-active");
})
$(Button[9]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[9].addClass("section-active");
})


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
                    $("#AnmeldeDatenFalsch").removeClass("section-active");
                    return;
               }
            console.log("Anmledung Fehlgeschlagen!")
            $("#username").val("");
            $("#password").val("");
            $("#AnmeldeDatenFalsch").addClass("section-active");
        }
}
$("#Zurück").click(function(){
    for(var i = 0; i < Panels.length; i++)
        {
            Panels[i].removeClass("section-active");
        }
    $("#VideoKurs").addClass("section-active");
})
function ChangeView()
{
    $("#Anmeldung").removeClass("section-active");
    $("#VideoKurs").addClass("section-active");
    $("#AnmeldeÜberschrift").text("Video-Kurs");
}