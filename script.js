let character = document.getElementById('character');
let block = document.getElementById('block');
function jump() {
  if(character.classList !== 'animate'){
    character.classList.add('animate');
  }
  setTimeout(function(){
    character.classList.remove('animate');
  }, 500);
}

let checkDead = setInterval(function(){
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
}, 10);