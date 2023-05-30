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