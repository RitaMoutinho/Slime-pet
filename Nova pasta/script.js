let slime = document.getElementById('slime');
let slime2 = document.getElementById('slime2');
let eye = document.getElementById('slimeeye1');
let eye2 = document.getElementById('slimeeye2');
let mouth = document.getElementById('slimemouth');
let aviso = document.getElementById('aviso');

slime.addEventListener('click', clicar);
slime.addEventListener('mouseenter', entrar);
slime.addEventListener('mouseout', sair);


function clicar(){
  slime.style.backgroundColor = 'rgba(235,6,39,255)';
  slime2.style.backgroundColor = 'rgba(200,0,28,255)';

  eye.style.backgroundColor = 'black';

  eye2.style.backgroundColor = 'black';
  mouth.style.height = '0px';
  aviso.innerHTML ='EU AVISEI !!';
  aviso.style.color = 'red';
  setTimeout(() => {
    sair();
  }, 4000);
};


function sair(){
  slime.style.backgroundColor = 'rgba(110,193,89,255)';
  slime2.style.backgroundColor = 'rgba(86,162,62,255)';

  eye.style.backgroundColor = 'rgba(82,135,63,255)';
  aviso.innerHTML ='Não me toque.';
  aviso.style.color = 'black';
  eye2.style.backgroundColor = 'rgba(82,135,63,255)';
  mouth.style.height = '50px';
};