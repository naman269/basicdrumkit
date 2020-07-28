var numDb=document.querySelectorAll(".drum").length;
for(var i=0;i<numDb;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  var a=this.innerHTML;
  soundm(a);
  });
}
document.addEventListener('keydown',function(event){
  soundm(event.key);
})
function soundm(key){
  switch(key){
    case "w":
    var audio=new Audio("tom-1.mp3");
    audio.play();
    break;
    case "a":
    var t1=new Audio("tom-2.mp3");
    t1.play();
    break;
    case "s":
    var t2=new Audio("tom-3.mp3");
    t2.play();
    break;
    case "d":
    var t3=new Audio("tom-4.mp3");
    t3.play();
    break;
    case "j":
    var t4=new Audio("snare.mp3");
    t4.play();
    break;
    case "k":
    var crash=new Audio("crash.mp3");
    crash.play();
    break;
    case "l":
    var kb=new Audio("kick-bass.mp3");
    kb.play();
    break;
    default:
  }
}
