let count=0;
let colorsCount=0;
function paintPage (color) {

$("body").css( "background-color", color );

}


let colors=["The tempature", "Jackals", "The plants", "Other animals"];

let buttonText="";

$("#needy-button") .after ("<p>All is quiet</p>");
$("#needy-button").click( function(){ 
   
    count = count +1; 
  
    console.log(count);
    console.log(colors[colorsCount]);

    buttonText="We will learn about " + colors[colorsCount];

    $("#needy-button").html( buttonText ); 

    $("body").css( "background-color", colors[colorsCount] );

  if( (count >=1) && (count < 2)) { $("#needy-button") .after ("<p>The tempature stays around 70 degrees and is mostly sunny</p>");}
   if( (count >=2) && (count < 3)) { $("#needy-button") .after ("<p>Jackals are pretty timid, but they will approach if you have food</p>");}
    if( (count >=3) && (count < 4)) { $("#needy-button") .after ("<p>There are many plants in this place, all are good food sources</p>");}
     if( (count >=4) && (count < 5)) { $("#needy-button") .after ("<p>Other animals that live here are egrets, which jackals like to hunt</p>");}
 if( (count >=5)) { $("#needy-button") .after ("<p>This is all we know!</p>");}
   
colorsCount = colorsCount +1;

if(colorsCount >= 4) { colorsCount = 0; }

});

 paintPage (colors[colorsCount]);

    $("body").css( "background-color", colors[colorsCount] );

   // $("body").append("<img width+'50' src='" +colors[count-1]  +".jpg'>" );
  if( (count >=5)  && (count < 10)) { $("#needy-button") .after ("<p>My mood is meh</p>");}
    if (count >=10) { $("#needy-button") .after ("<p>My mood is bad</p>");}

colorsCount = colorsCount +1;


   
if(colorsCount >= 8) { colorsCount = 0; }



$("#green").click( function(){ 
paintPage ("lime");})

$("#lavender").click( function(){ 
paintPage ("lavender");})

$("#blue").click( function(){ 
paintPage ("aqua");})


$("#orange").click( function(){ 
paintPage ("orange");


$(".color-circle").click (function(){
    paintPage(this.id);
})

});