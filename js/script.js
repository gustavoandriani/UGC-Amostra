function convidadoSelecao(event, id) {
  const convidadoPainel = document.getElementById('painel-convidados-pocket')
  if (id == "box-AH") {
    convidadoPainel.classList.add('AH')
    if (convidadoPainel.classList == 'JP', 'KB', 'LB', 'PDT', 'AC', 'IB') {
      convidadoPainel.classList.remove('JP', 'KB', 'LB', 'PDT', 'AC', 'IB')
    }
  }
  else if (id == "box-JP") {
    convidadoPainel.classList.add('JP')
    if (convidadoPainel.classList == 'AH', 'KB', 'LB', 'PDT', 'AC', 'IB'){
      convidadoPainel.classList.remove('AH', 'KB', 'LB', 'PDT', 'AC', 'IB')
    }
  }
  else if (id == "box-IB"){
    convidadoPainel.classList.add('IB')
    if (convidadoPainel.classList == 'AH', 'JP', 'LB', 'PDT', 'AC', 'KB'){
      convidadoPainel.classList.remove('AH', 'JP', 'LB', 'PDT', 'AC', 'KB')
    }
  }
  else if (id == "box-LB"){
    convidadoPainel.classList.add('LB')
    if (convidadoPainel.classList == 'AH', 'JP', 'KB', 'PDT', 'AC', 'IB'){
      convidadoPainel.classList.remove('AH', 'JP', 'KB', 'PDT', 'AC', 'IB')
    }
  }
  else if (id == "box-PDT"){
    convidadoPainel.classList.add('PDT')
    if (convidadoPainel.classList != 'AH', 'JP', 'KB', 'LB', 'AC', 'IB'){
      convidadoPainel.classList.remove('AH', 'JP', 'KB', 'LB', 'AC', 'IB')
    }
  }
  else if (id == "box-AC"){
    convidadoPainel.classList.add('AC')
    if (convidadoPainel.classList != 'AH', 'JP', 'KB', 'LB', 'PDT', 'IB'){
      convidadoPainel.classList.remove('AH', 'JP', 'KB', 'LB', 'PDT', 'IB')
    }
  }
  else if (id == "box-KB"){
    convidadoPainel.classList.add('KB')
    if (convidadoPainel.classList == 'AH', 'JP', 'LB', 'PDT', 'AC', 'IB'){
      convidadoPainel.classList.remove('AH', 'JP', 'LB', 'PDT', 'AC', 'IB')
    }
  }
}

//MEDIA QUERIES E ALTERAÇÃO DE FUNÇÕES
const mediaQuery = window.matchMedia("(max-width: 768px)");
//if (window.matchMedia("(max-width:800px)").matches) {
//  abrirPopUp(divId)}

function switchSalas(divId) {
  var div = document.getElementById(divId);
  const divAldeia = document.getElementById('sala-aldeia')
  const divGenshin = document.getElementById('sala-genshin')
  const divComunal = document.getElementById('sala-comunal')
  const divAtelie = document.getElementById('sala-atelie')
  if (div.style.display === 'none') {
    div.style.display = 'block';
    if (div === divAldeia) {
      if (divGenshin.style.display === 'block') {
        divGenshin.style.display = 'none'
      } else if (divComunal.style.display === 'block') {
        divComunal.style.display = 'none'
      } else if (divAtelie.style.display === 'block') {
        divAtelie.style.display = 'none'
      }
    }
    else if (div === divGenshin) {
      if (divAldeia.style.display === 'block') {
        divAldeia.style.display = 'none'
      } else if (divComunal.style.display === 'block') {
        divComunal.style.display = 'none'
      } else if (divAtelie.style.display === 'block') {
        divAtelie.style.display = 'none'
      }
    }
    else if (div === divComunal) {
      if (divAldeia.style.display === 'block') {
        divAldeia.style.display = 'none'
      } else if (divGenshin.style.display === 'block') {
        divGenshin.style.display = 'none'
      } else if (divAtelie.style.display === 'block') {
        divAtelie.style.display = 'none'
      }
    }
    else if (div === divAtelie) {
      if (divAldeia.style.display === 'block') {
        divAldeia.style.display = 'none'
      } else if (divGenshin.style.display === 'block') {
        divGenshin.style.display = 'none'
      } else if (divComunal.style.display === 'block') {
        divComunal.style.display = 'none'
      }
    }
  }
  else {
    div.style.display = 'none';
  }
}

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}

const titulo = document.querySelector('h1.h1-text');
  typeWriter(titulo);