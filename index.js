var colors=["green","red","yellow","blue"];

var sequence=[];
var userSeq=[];
var level=0;
var toggle=true;

$(document).keydown(function (event) {
  if (toggle === true) {
    nextSequence();
  }
});

function nextSequence(){
    level++;
    toggle=false;
    var number = Math.random() * 4;
    number = Math.floor(number);
    var nextColor = colors[number];
    sequence.push(nextColor);
    animation(nextColor);

}

$(".btn").click(function () {
  var color = $(this).attr("id");
  animation(color);
  userSeq.push(color);
  for(var i=0; i<userSeq.length; i++){
    check(i);
  }
});

function animation(event){
    
    $("h1").text("Level "+level);
    var sound = "./sounds/" + event + ".mp3";
    var audio = new Audio(sound);
    audio.play();
    $("#" + event)
      .fadeOut(100)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);

    
}


function check(currentIndex){

    if(sequence[currentIndex]===userSeq[currentIndex]){
        if(userSeq.length===sequence.length){
            setTimeout(nextSequence,1000);
            userSeq=[];
        }
    }
    else{
        $("h1").text("Game OverGame Over, Press Any Key to Restart");
        var audio=new Audio("./sounds/wrong.mp3");
        audio.play();

        level=0;
        toggle=true;
        userSeq=[];
        sequence=[];
        gameOver();
    }
}

function gameOver(){

    $("body").addClass("wrong");
    setTimeout(function(){
        $("body").removeClass("wrong");
    },100)

}