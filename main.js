const musicArr = [
 new Audio("./sounds/1.wav"),
 new Audio("./sounds/2.wav"),
 new Audio("./sounds/3.wav"),
 new Audio("./sounds/4.wav"),
 new Audio("./sounds/5.wav"),
 new Audio("./sounds/6.wav"),
 new Audio("./sounds/7.wav"),
 new Audio("./sounds/8.wav"),
 new Audio("./sounds/9.wav")];

const music = document.getElementById("music");

function playMusic(bit){  
  bit.pause();
  bit.currentTime = 0;
  bit.play();  
}

document.onkeydown = function(e){
  const index = 49;
  for(let i = 0; i <= musicArr.length; i++){
    switch(e.keyCode){
      case index + i: playMusic(musicArr[i]);
      break;
    }
  }
}