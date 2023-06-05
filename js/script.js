function convidadoSelecao(event, id) {
  const convidadoPainel = document.getElementById('painel-convidados-pocket')
  if (id == "box-AH") {
    convidadoPainel.classList.add('AH')
    if (convidadoPainel.classList == 'JP', 'CH', 'LB', 'PDT', 'AC') {
      convidadoPainel.classList.remove('JP', 'CH', 'LB', 'PDT', 'AC')
    }
  }
  else if (id == "box-JP") {
    convidadoPainel.classList.add('JP')
    if (convidadoPainel.classList == 'AH', 'CH', 'LB', 'PDT', 'AC'){
      convidadoPainel.classList.remove('AH', 'CH', 'LB', 'PDT', 'AC')
    }
  }
  else if (id == "box-CH"){
    convidadoPainel.classList.add('CH')
    if (convidadoPainel.classList == 'AH', 'JP', 'LB', 'PDT', 'AC'){
      convidadoPainel.classList.remove('AH', 'JP', 'LB', 'PDT', 'AC')
    }
  }
  else if (id == "box-LB"){
    convidadoPainel.classList.add('LB')
    if (convidadoPainel.classList == 'AH', 'JP', 'CH', 'PDT', 'AC'){
      convidadoPainel.classList.remove('AH', 'JP', 'CH', 'PDT', 'AC')
    }
  }
  else if (id == "box-PDT"){
    convidadoPainel.classList.add('PDT')
    if (convidadoPainel.classList != 'AH', 'JP', 'CH', 'LB', 'AC'){
      convidadoPainel.classList.remove('AH', 'JP', 'CH', 'LB', 'AC')
    }
  }
  else if (id == "box-AC"){
    convidadoPainel.classList.add('AC')
    if (convidadoPainel.classList != 'AH', 'JP', 'CH', 'LB', 'PDT'){
      convidadoPainel.classList.remove('AH', 'JP', 'CH', 'LB', 'PDT')
    }
  }
}

function cadastroCosplayInfoProximo() {
  const infoCosplayDiv1 = document.getElementById('info-cosplay-div-1')
  const infoCosplayDiv2 = document.getElementById('info-cosplay-div-2')
  const infoCosplayDiv3 = document.getElementById('info-cosplay-div-3')
  const btnAnterior = document.getElementById('btn-anterior-cosplay')
  const btnProximo = document.getElementById('btn-proximo-cosplay')

  if (infoCosplayDiv1.classList == 'row') {
    infoCosplayDiv1.classList.add('d-none')
    infoCosplayDiv2.classList.remove('d-none')
    if (infoCosplayDiv1.classList == 'row', 'd-none') {
      btnAnterior.classList.remove('d-none')
    }
  }
  else if (infoCosplayDiv2.classList == 'row') {
    infoCosplayDiv2.classList.add('d-none')
    infoCosplayDiv3.classList.remove('d-none')
    if (infoCosplayDiv3.classList == 'row') {
      btnProximo.classList.add('d-none')
    }
  }
}
function cadastroCosplayInfoAnterior() {
  const infoCosplayDiv1 = document.getElementById('info-cosplay-div-1')
  const infoCosplayDiv2 = document.getElementById('info-cosplay-div-2')
  const infoCosplayDiv3 = document.getElementById('info-cosplay-div-3')
  const btnAnterior = document.getElementById('btn-anterior-cosplay')
  const btnProximo = document.getElementById('btn-proximo-cosplay')

  if (infoCosplayDiv2.classList == 'row') {
    infoCosplayDiv1.classList.remove('d-none')
    infoCosplayDiv2.classList.add('d-none')
    if (infoCosplayDiv1.classList == 'row') {
      btnAnterior.classList.add('d-none')
    }
    else if (infoCosplayDiv2.classList == 'row') {
      btnAnterior.classList.remove('d-none')
      btnAnterior.classList.add('d-block')
    }
  }
  else if (infoCosplayDiv3.classList == 'row') {
    infoCosplayDiv3.classList.add('d-none')
    infoCosplayDiv2.classList.remove('d-none')
    if (infoCosplayDiv2.classList == 'row') {
      btnProximo.classList.remove('d-none')
    }
  }
}


//MEDIA QUERIES E ALTERAÇÃO DE FUNÇÕES
const mediaQuery = window.matchMedia("(max-width: 768px)");

//window.addEventListener("DOMContentLoaded", (event) => {
//    const btnCospMob = document.getElementById('cosplay-btn-mob')
//    btnCosp.addEventListener('click', function(event){
//      event.preventDefault();
//    })
//  })

function abrirPopUp(divId) {
  var url = "about:blank";
    var nomeJanela = "TESTE POPUP";
    var largura = 500;
    var altura = 300;
    var posicaoEsquerda = (window.screen.width - largura) / 2;
    var posicaoTopo = (window.screen.height - altura) / 2;

    var janelaPopUp = window.open(url, nomeJanela, "width=" + largura + ", height=" + altura + ", left=" + posicaoEsquerda + ", top=" + posicaoTopo);

    if (janelaPopUp === null || typeof(janelaPopUp) === "undefined") {
        alert("O pop-up foi bloqueado pelo navegador. Por favor, habilite pop-ups para este site.");
    } else {
        // Personalize o conteúdo da janela pop-up aqui
        janelaPopUp.document.write("<h1>Este é o conteúdo do pop-up</h1>");
    }
}

function switchInfos(divId) {
  var div = document.getElementById(divId);
  if (window.matchMedia("(max-width:800px)").matches) {
    abrirPopUp()
  } else {
    if (div.style.display === 'none') {
      div.style.display = 'block';
      const divCosplay = document.getElementById('cosplay-infos')
      const divKpop = document.getElementById('kpop-infos')
      const divBeco = document.getElementById('beco-infos')
      if (div === divCosplay) {
        if (divKpop.style.display === 'block') {
          divKpop.style.display = 'none'
        } else if (divBeco.style.display === 'block') {
          divBeco.style.display = 'none'
        }
        
      }
      else if (div === divKpop) {
        if (divBeco.style.display === 'block') {
          divBeco.style.display = 'none'
        } else if (divCosplay.style.display === 'block') {
          divCosplay.style.display = 'none'
        }
        
      }
      else if (div === divBeco) {
        if (divCosplay.style.display === 'block') {
          divCosplay.style.display = 'none'
        } else if (divKpop.style.display === 'block') {
          divKpop.style.display = 'none'
        }
      }
    } else {
      div.style.display = 'none';
    }
  }
};