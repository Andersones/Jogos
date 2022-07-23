
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const arvore = document.querySelector('.arvore');

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  },800);  
}

const loop = setInterval(() => {
    console.log(loop)

const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
const arvorePosition = arvore.offsetLeft;

console.log(arvorePosition);

if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 83){
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src='Imagem/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    arvore.style.animation = 'none';
    arvore.style.left = `${arvorePosition}px`;

    clearInterval(loop);
}

},10);

  






document.addEventListener('keydown', jump);

console.log(pipe) 