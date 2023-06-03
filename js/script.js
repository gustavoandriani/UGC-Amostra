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

function switchCosplayInfos() {
  const cosplayInfos = document.getElementById('cosplay-infos')

  if (cosplayInfos.classList == 'container', 'd-none') {
    cosplayInfos.classList.remove('d-none')
    cosplayInfos.classList.add('d-block')
  }
  else {
    cosplayInfos.classList.remove('d-block')
    cosplayInfos.classList.add('d-none') 
  }
}