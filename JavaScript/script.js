//setion active/inactive
//document.addEventListener("contextmenu", e=> e.preventDefault(), false);
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

//USERNAMES//
var Users=[
    {
        username : "ToMMyStudios",
        password : "SoTo1209!"
    },
    {
        username : " ",
        password : " "
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
    },
    {
        username : "Gregor_Skill",
        password : "igj4o7Ur8"
    }
]

var NextIndex = 0;
var LastIndex = 0;
var Button =[$("#1"),$("#2"),$("#3"),$("#4"),$("#5"),$("#6"),$("#7"),$("#8"),$("#9"),$("#10")];
var Panels = [$("#Kathegorie1"),$("#Kathegorie2"),$("#Kathegorie3"),$("#Kathegorie4"),$("#Kathegorie5"),$("#Kathegorie6"),$("#Kathegorie7"),$("#Kathegorie8"),$("#Kathegorie9"),$("#Kathegorie10")];


$(Button[0]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[0].addClass("section-active");
    NextIndex = 1;
    LastIndex = -1;
})
$(Button[1]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[1].addClass("section-active");
    NextIndex = 2;
    LastIndex = 0;
})
$(Button[2]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[2].addClass("section-active");
    NextIndex = 3;
    LastIndex = 1;
})
$(Button[3]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[3].addClass("section-active");
    NextIndex = 4;
    LastIndex = 2;
})
$(Button[4]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[4].addClass("section-active");
    NextIndex = 5;
    LastIndex = 3;
})
$(Button[5]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[5].addClass("section-active");
    NextIndex = 6;
    LastIndex = 4;
})
$(Button[6]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[6].addClass("section-active");
    NextIndex = 7;
    LastIndex = 5;
})
$(Button[7]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[7].addClass("section-active");
    NextIndex = 8;
    LastIndex = 6;
})
$(Button[8]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[8].addClass("section-active");
    NextIndex = 9;
    LastIndex = 7;
})
$(Button[9]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[9].addClass("section-active");
    NextIndex = -1;
    LastIndex = 9;
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
                    $("#anmeldebutton").text("Kurs");
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

$(".Next").click(function(){
    console.log("Next:" + NextIndex);
    for(var i = 0; i<Panels.length; i++)
        {
            Panels[i].removeClass("section-active");
        }
    Panels[NextIndex].addClass("section-active");
    switch(NextIndex)
                {       
                    case 9:
                    NextIndex = 0;
                    LastIndex = 8;
                        break;
                    case 8:
                    NextIndex = 9;
                    LastIndex = 7;
                        break;
                    case 7:
                    NextIndex = 8;
                    LastIndex = 6;
                        break;
                    case 6:
                    NextIndex = 7;
                    LastIndex = 5;
                        break;
                    case 5:
                    NextIndex = 6;
                    LastIndex = 4;
                        break;
                    case 4:
                    NextIndex = 5;
                    LastIndex = 3;
                        break;
                    case 3:
                    NextIndex = 4;
                    LastIndex = 2;
                        break;
                    case 2:
                    NextIndex = 3;
                    LastIndex = 1;
                        break;
                    case 1:
                    NextIndex = 2;
                    LastIndex = 0;
                        break;
                }
    console.log("Next:" + NextIndex);
})
$(".Last").click(function(){
    console.log("Last"+ LastIndex);
    for(var i = 0; i<Panels.length; i++)
        {
            Panels[i].removeClass("section-active");
        }
    Panels[LastIndex].addClass("section-active");
                switch(LastIndex)
                {       
                    case 9:
                    LastIndex = 8;
                    NextIndex = 0;
                        break;
                    case 8:
                    LastIndex = 7;
                    NextIndex =9;
                        break;
                    case 7:
                    LastIndex = 6;
                    NextIndex = 8;
                        break;
                    case 6:
                    LastIndex = 5;
                    NextIndex = 7;
                        break;
                    case 5:
                    LastIndex = 4;
                    NextIndex = 6;
                        break;
                    case 4:
                    LastIndex = 3;
                    NextIndex = 5;
                        break;
                    case 3:
                    LastIndex = 2;
                    NextIndex = 4;
                        break;
                    case 2:
                    LastIndex = 1;
                    NextIndex = 3;
                        break;
                    case 1:
                    LastIndex = 0;
                    NextIndex = 2;
                        break;
                        case 0:
                    LastIndex = -1;
                    NextIndex = 1;
                        break;
                }
    console.log("Last:" + LastIndex);
    
})