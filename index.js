function sound(e)
{
  switch(e)
  {
    case "w": var audio=new Audio("sounds/crash.mp3");
              audio.play();
              break;
    case "a": var audio=new Audio("sounds/kick-bass.mp3");
              audio.play();
              break;
    case "s": var audio=new Audio("sounds/snare.mp3");
              audio.play();
              break;
    case "d": var audio=new Audio("sounds/tom-1.mp3");
              audio.play();
              break;
    case "j": var audio=new Audio("sounds/tom-2.mp3");
              audio.play();
              break;
    case "k": var audio=new Audio("sounds/tom-3.mp3");
              audio.play();
              break;
    case "l": var audio=new Audio("sounds/tom-4.mp3");
              audio.play();
              break;
  }
}
function button_animation(key){

var button_active = document.querySelector("."+key);

button_active.classList.add("pressed");

setTimeout(function()
{
  button_active.classList.remove("pressed");
},100);
}

for(var i = 0; i < 7; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonhtml = this.innerHTML;
    sound(buttonhtml);
    button_animation(buttonhtml);
  });

}
document.addEventListener("keydown", function(event)
{
  sound(event.key);
  button_animation(event.key);
}
);
