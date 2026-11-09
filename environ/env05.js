
let count=0;
let colorsCount=0;

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

$("#jackal").hover(
  function () {
    $("#thought").stop(true, true).slideDown(300);
    $("#status").text("The creature revealed a thought.");
  },
  function () {
    $("#thought").stop(true, true).slideUp(300);
    $("#status").text("The thought disappeared.");
  }
);
// Keep the mode outside the handlers so both events can use it.
let following = false;

// .click(...) runs this function when Start following is clicked.
$("#toggle-button").click(function () {
    // ! flips true to false, or false to true.
    following = !following;
    if (following == true) {
        $("#toggle-button").text("Stop following");
    }
    else {
        $("#toggle-button").text("Start following");
    }
});

// event supplies the pointer position for this movement.
$("#stage").mousemove(function (event) {
    if (following == true) {
        // Subtract the area's page position to get coordinates inside it.
        let x = event.pageX - $("#stage").offset().left;
        let y = event.pageY - $("#stage").offset().top;
        $("#dot").css("left", x);
        $("#dot").css("top", y);
    }
});