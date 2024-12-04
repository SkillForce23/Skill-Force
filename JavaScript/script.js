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

let Videos = new Array();
Videos[0] = new Array("false","false","false","false");
Videos[1] = new Array("false","false","false");
Videos[2] = new Array("false","false","false");
Videos[3] = new Array("false","false","false");
Videos[4] = new Array("false","false","false");
Videos[5] = new Array("false","false","false");
Videos[6] = new Array("false","false","false");
Videos[7] = new Array("false","false","false");
Videos[8] = new Array("false","false","false");
Videos[9] = new Array("false","false","false");

let did = new Array();
did[0] = new Array("false","false","false","false");
did[1] = new Array("false","false","false");
did[2] = new Array("false","false","false");
did[3] = new Array("false","false","false");
did[4] = new Array("false","false","false");
did[5] = new Array("false","false","false");
did[6] = new Array("false","false","false");
did[7] = new Array("false","false","false");
did[8] = new Array("false","false","false");
did[9] = new Array("false","false","false");

var MaxVideos = [4,3,3,3,3,3,3,3,3,3];

var CurrentVideos = [0,0,0,0,0,0,0,0,0,0];

var WatchedAll = ["false","false","false","false","false","false","false","false","false","false"];

var ActiveKathegorie = 0;

var progressbars = [$("#Progress0"),$("#Progress1"),$("#Progress2"),$("#Progress3"),$("#Progress4"),$("#Progress5"),$("#Progress6"),$("#Progress7"),$("#Progress8"),$("#Progress9")];



$(Button[0]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[0].addClass("section-active");
     $(progressbars[0]).attr("data-label","Fortschritt" + "(" + CurrentVideos[0] + "/" + MaxVideos[0] + ")");
    NextIndex = 1;
    LastIndex = -1;
    ActiveKathegorie = 0;
})
$(Button[1]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[1].addClass("section-active");
    $(progressbars[1]).attr("data-label","Fortschritt" + "(" + CurrentVideos[1] + "/" + MaxVideos[1] + ")");
    NextIndex = 2;
    LastIndex = 0;
    ActiveKathegorie = 1;
})
$(Button[2]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[2].addClass("section-active");
    $(progressbars[2]).attr("data-label","Fortschritt" + "(" + CurrentVideos[2] + "/" + MaxVideos[2] + ")");
    NextIndex = 3;
    LastIndex = 1;
    ActiveKathegorie = 2;
})
$(Button[3]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[3].addClass("section-active");
    $(progressbars[3]).attr("data-label","Fortschritt" + "(" + CurrentVideos[3] + "/" + MaxVideos[3] + ")");
    NextIndex = 4;
    LastIndex = 2;
    ActiveKathegorie = 3;
})
$(Button[4]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[4].addClass("section-active");
    $(progressbars[4]).attr("data-label","Fortschritt" + "(" + CurrentVideos[4] + "/" + MaxVideos[4] + ")");
    NextIndex = 5;
    LastIndex = 3;
    ActiveKathegorie = 4;
})
$(Button[5]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[5].addClass("section-active");
    $(progressbars[5]).attr("data-label","Fortschritt" + "(" + CurrentVideos[5] + "/" + MaxVideos[5] + ")");
    NextIndex = 6;
    LastIndex = 4;
    
    ActiveKathegorie = 5;
})
$(Button[6]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[6].addClass("section-active");
    $(progressbars[6]).attr("data-label","Fortschritt" + "(" + CurrentVideos[6] + "/" + MaxVideos[6] + ")");
    NextIndex = 7;
    LastIndex = 5;
    
    ActiveKathegorie = 6;
})
$(Button[7]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[7].addClass("section-active");
    $(progressbars[7]).attr("data-label","Fortschritt" + "(" + CurrentVideos[7] + "/" + MaxVideos[7] + ")");
    NextIndex = 8;
    LastIndex = 6;
    Videos = 3;
    ActiveKathegorie = 7;
})
$(Button[8]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[8].addClass("section-active");
    $(progressbars[8]).attr("data-label","Fortschritt" + "(" + CurrentVideos[8] + "/" + MaxVideos[8] + ")");
    NextIndex = 9;
    LastIndex = 7;
    Videos = 3;
    
    ActiveKathegorie = 8;
})
$(Button[9]).click(function(){
    $("#VideoKurs").removeClass("section-active");
    Panels[9].addClass("section-active");
    $(progressbars[9]).attr("data-label","Fortschritt" + "(" + CurrentVideos[9] + "/" + MaxVideos[9] + ")");
    NextIndex = -1;
    LastIndex = 9;
    Videos = 3;
    
    ActiveKathegorie = 9;
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


var vid = document.getElementById("Video");
vid.onplay = function() {
    console.log("Started");
    Video();
};

function Video()
{
    var progress = 0;
    var completed = "false";
    vid.addEventListener("ended", () => {
        progress = 100;
        completed = "true";
        console.log("Ended");
        if(vid.classList.contains("v1"))
        {
            VideoWatched(0);
        }
        if(vid.classList.contains("v2"))
        {
            VideoWatched(1);
        }
        if(vid.classList.contains("v3"))
        {
            VideoWatched(2);
        }
        if(vid.classList.contains("v4"))
        {
            VideoWatched(3);
        }
    });
}

function VideoWatched(id)
{
    console.log("VideoWatched"+ id);
    Videos[ActiveKathegorie][id] = "true";
    for(var i = 0; i < Videos[ActiveKathegorie].length; i++)
        {
            if(Videos[ActiveKathegorie][i] == "true")
               {
                   if(did[ActiveKathegorie][id] == "false")
                    {
                        CurrentVideos[ActiveKathegorie]++;
                        ProgressPlus();
                    }
                    did[ActiveKathegorie][id] = "true";
                   for(var i = 0; i < progressbars.length; i++)
                       {
                           $(progressbars[ActiveKathegorie]).attr("data-label","Fortschritt" + "(" + CurrentVideos[ActiveKathegorie] + "/" + MaxVideos[ActiveKathegorie] + ")");
                       }
               }
        }
    if(Videos[ActiveKathegorie].length == CurrentVideos[ActiveKathegorie])
        {
            WatchedAll[ActiveKathegorie] = "true";
            
        }
    console.log(Video[ActiveKathegorie[id]]);
    console.log(MaxVideos[id]);
    console.log(WatchedAll[id]);
}

const progressBar = document.getElementsByClassName('progress-bar')[0];

function ProgressPlus(){
    console.log("progress");
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    if(ActiveKathegorie == 0)
        {
            console.log("Active0");
            progressBar.style.setProperty('--width',width + 14);
            
            console.log("Added0");
        }
    if(ActiveKathegorie == 1)
        {
            console.log("Active1");
            progressBar[1].style.setProperty('--width',width + 34);
            console.log("Added1");
        }
}
  