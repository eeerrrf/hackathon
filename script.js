//background color change
var colors = ['red', 'orange', 'green', 'salmon','gold','gainsboro','navy','aquamarine','silver','copper','blue','magenta','indigo','violet'];

$(".backgroundcolor").click(function() {var randColor = colors[Math.floor(Math.random()*colors.length)];
        $("body").css("background-color", randColor);
});

//timer
var interval;

function stopTimer() {
    clearInterval(interval);
}

interval = setInterval(function() {
    updateTime();
}, 1000);

var day=0;
var hour =0;
var minute=0;
var second=0;

function updateTime(){
    
    second=second+1;

    if(second===60){
        minute=minute+1;
        second=second-60;
    }
    
    if(minute===60){
        hour = hour+1;
        minute =minute-60;
    }
  
  $("#timer").html(second);
$("#minutes").html(minute);
  
}
//if else function to hide and show images


//Shows Content from 1914
function ShowPast() {
  $("#pastDay").fadeIn(400);
  $("#futureDay").fadeOut(100);
  $("#presentday").fadeOut(100);
  $("#independenceAmerica").fadeOut(100);
  $(".time").html("1914CE:");
  second=0;
  minute=0;
}
//shows present day content
function ShowPresent() {
  $("#presentday").fadeIn(400);
  $("#pastDay").fadeOut(100);
  $("#futureDay").fadeOut(100);
  $("#independenceAmerica").fadeOut(100);
  $(".time").html("2018:");
  second=0;
  minute=0;
}
//shows future content
function ShowFuture() {
  $("#futureDay").fadeIn(400);
  $("#presentday").fadeOut(100);
  $("#pastDay").fadeOut(100);
  $("#independenceAmerica").fadeOut(100);
  $(".time").html("Future:");
  second=0;
  minute=0;
}

function ShowIndependenceAmerica() {
  $("#futureDay").fadeOut(100);
  $("#presentday").fadeOut(100);
  $("#pastDay").fadeOut(100);
  $("#independenceAmerica").fadeIn(400);
  $(".time").html("really past:");
  second=0;
  minute=0;
}


ShowPresent();
$("body").css("background-color", "orange");

$("input").on("change", function(event) {
  var input = $("input").val();
    if ( input === "0")  { 
    ShowIndependenceAmerica();
    $("body").addClass("WW1");
    $("body").css("background-color", "#b87333" );
    $("p").css("color", "black");
   }
  else if( input === "10") { 
    ShowPast();
    $("iframe").css("filter","grayscale(1)"); 
    $("body").addClass("WW1");
    $("body").css("background-color","black");
    $("p").css("color","white");
    
    
}
    else if (input === "20")  { 
    ShowPresent();
    $("body").addClass("WW1");
    $("body").css("background-color","orange");
    $("p").css("color", "black");  
     
  }
  
  else if (input === "30") {
    ShowFuture();
    $("body").addClass("WW1");
    $("body").css("background-color","#0047ab");
    $("p").css("color","white");
  }
//shake
  setTimeout(function()
{ $("body").removeClass("WW1");
}, 1000);

  
});

