document.addEventListener('DOMContentLoaded', function() {
  window.character = document.getElementById("character");
  window.block = document.getElementById("block");

  //Don't start the game until we hit the start button
  block.style.webkitAnimationPlayState="paused";
  block.style.display = "none";

  //Jump on spacebar press
  document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        jump();
    }
  }
  //Prevent spacebar from scrolling
  window.addEventListener('keydown', function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
      e.preventDefault();
    }
  });

  window.checkDead = function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  
    if(blockLeft < 20 && blockLeft > 0 && characterTop >=129){
      block.style.webkitAnimationPlayState="paused";
      block.style.display = "none";
      alert("Oh...");
    }

  }
}, false);

function startGame() {
  block.style.webkitAnimationPlayState="running";
  block.style.display = "block";
  window.setInterval(function(){
    window.checkDead();
  }, 10);
}

function jump(){
  if(character.classList != "animate"){
    character.classList.add("animate");
  }
  
  setTimeout(function(){
    character.classList.remove("animate");
  }, 500);
}

