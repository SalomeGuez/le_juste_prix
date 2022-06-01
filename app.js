
const form = document.querySelector('#formulaire');
const input = document.querySelector('#prix');
const error = document.querySelector('small');
const instructions = document.querySelector('#instruction');
let trials = 0;
let choosedNumber;

error.style.display = 'none';


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const randomNumber = getRandomInt(100000);

function check(number) {
  let instruction = document.createElement('div');
  instruction.className = 'instruction';
    
  if(number < randomNumber) {
   instruction.classList.add('plus');
   instruction.innerHTML = `(${choosedNumber}) C'est plus` ;
   var myImage = new Image(50, 50);
   myImage.src = './image/fleche-haut.jpeg';
   console.log(myImage);

  } else if(number > randomNumber) {
   instruction.classList.add('moins');
   instruction.innerHTML = `(${choosedNumber}) C'est moins`;
   var myImage = new Image(50, 50);
   myImage.src = './image/flch.jpeg';
   console.log(myImage);
   
  } else {
   instruction.classList.add('justeprix');
   instruction.innerHTML = `(${choosedNumber}) BINGO`;
    input.disabled = true;
    var myImage = new Image(50, 50);
   myImage.src = './image/troph.png';
   console.log(myImage); // j'ai essayé de faire apparaitre l'image mais je n'y arrive pas 
  }
   instructions.prepend(instruction);
}

input.addEventListener('keyup', (e) => {
  if(isNaN(input.value)) {
    error.style.display = 'inline-block';
    
  } else {
    error.style.display = 'none';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(isNaN(input.value) || !input.value) {
    error.style.display = 'inline-block';
  } else {
    trials++;
    choosedNumber = input.value;
    check(Number(choosedNumber));
    input.value = '';
  }
});