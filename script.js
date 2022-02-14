let character = document.getElementById('character');
let block = document.getElementById('block');
const jump = function() {
  if(character.classList !== 'animate'){
    character.classList.add('animate');
  }
  setTimeout(function(){
    character.classList.remove('animate');
  }, 500);
}

document.addEventListener('click', jump);

let checkDead = setInterval(function(){
  // console.log(window.getComputedStyle(c haracter).getPropertyValue('top'));
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
  let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
  if(blockLeft<20 && blockLeft > 0 && characterTop >= 130){
    block.style.animation = 'none';
    block.style.display = 'none';
    alert('Game Over');
  }
}, 10);