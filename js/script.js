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

window.addEventListener("DOMContentLoaded", (event) => {
  const btnCospMob = document.getElementById('cosplay-btn-mob')
    btnCospMob.addEventListener('click', function(event){
  })
  const btnKpopMob = document.getElementById('kpop-btn-mob')
    btnKpopMob.addEventListener('click', function(event){
  })
  const btnBecoMob = document.getElementById('beco-btn-mob')
    btnBecoMob.addEventListener('click', function(event){
  })
})

function abrirPopUp(divId) {
    var url = "about:blank";
    var nomeJanela = "";
    var largura = 800;
    var altura = 600;
    var posicaoEsquerda = (window.screen.width - largura) / 2;
    var posicaoTopo = (window.screen.height - altura) / 2;

    var janelaPopUp = window.open(url, nomeJanela, "width=" + largura + ", height=" + altura + ", left=" + posicaoEsquerda + ", top=" + posicaoTopo);

    if (janelaPopUp === null || typeof(janelaPopUp) === "undefined") {
        alert("O pop-up foi bloqueado pelo navegador. Por favor, habilite pop-ups para este site.");
    } else {
      if (divId == 'cosplay-infos') {
        nomeJanela = "REGULAMENTO DESFILE COSPLAY"
        janelaPopUp.document.write("<div style='width: 100%; font-size: 1.2rem; font-family: sans-serif;'><h1 style='color: #3d137f; font-weight: bold;'>REGULAMENTO</h1><h2 style='color: #3d137f; font-weight: bold;'>DESFILE COSPLAY</h2><p><strong style='color: #3d137f;'>INTRODUÇÃO</strong><br>O Desfile Cosplay é uma das atrações mais esperadas em eventos geek. Esta atração promove um concurso entre pessoas, chamadas de cosplayers, que usarão trajes e acessórios, com o objetivo de interpretar personagens fictícios existentes em animes/mangás, HQs/Comics, Séries, Filmes, Games e tudo que envolve a cultura pop. A intenção é, através desta disputa, estimular o cosplayer a desenvolver novas habilidades e premiá-los, desde que se destaquem na avaliação do júri, indicado pelo evento.</p>" + "<p><strong style='color: #3d137f;'>MÍDIAS DE ORIGEM</strong><br>Anime/Mangá;<br>HQ/Comics;<br>Games;<br>Séries e Filmes;<br>As inscrições se iniciarão no dia 13/01 e se encerrarão no dia 8/03. Os participantes deverão comparecer, sem atrasos, 30 minutos antes do horário previsto para o desfile. Em caso de desistência, informar 48 horas antes do dia do evento.<br><br><strong style='color: #3d137f;'>DESFILE</strong><br>O candidato terá 60 segundos para fazer o seu desfile. O mesmo subirá ao palco após ter seu nome declarado, ir até ao local indicado, fazer um pose para o júri, de frente, costas e lado, agradecer ao público e se retirar;Armas de metal, objetos cortantes estarão proibidos;Pular do palco e arremessar objetos ou materiais que possam representar perigo às pessoas acarretarão a desclassificação do candidato, bem como apresentação de materiais promocionais não autorizados pela organização e possíveis ofensas e/ou discriminações de qualquer espécie.</p>" + "<p><strong style='color: #3d137f;'>JÚRI / JULGAMENTO</strong><br>Os participantes serão julgados com notas de 5 (cinco) a 10 (dez), com intervalos de 0,1 (um décimo). Nota zero significa desclassificação. <br>O júri será composto por pessoas escolhidas pela organização, cujas decisões serão soberanas, e serão divulgadas logo após a confirmação dos mesmos.<br><br><strong style='color: #3d137f;'>MÉTODOS DE AVALIAÇÃO</strong><br>VESTIMENTA: Refere-se à qualidade e nível de detalhes dos trajes apresentados pelo cosplayer, bem como a maquiagem, estilização e acessórios/armas;<br>PERSONALIDADE: Refere-se quão fiel a apresentação feita pelo cosplayer está similar ao personagem;<br>Em ambos os casos o biótipo do candidato não será considerado.<br><br><strong style='color: #3d137f;'>PREMIAÇÕES</strong><br>Desfile Principal: Troféu para o primeiro colocado, medalha para o segundo e terceiro colocado;<br>Desfile Kids: Brindes para os três primeiros colocados;</p>" + "<p><strong style='color: #3d137f;'>DISPOSIÇÕES FINAIS</strong><br>Os participantes do desfile concordam em liberar o uso da sua imagem para fins de divulgação.Com a vigência da LGPD, fazer uma inscrição onde conste que os dados utilizados serão de uso exclusivo do evento, sendo descartados após a finalização e que todo e qualquer cosplayer autorize o uso da imagem pelo evento e que está ciente das regras.</p></div>");
      }
      else if (divId == 'kpop-infos') {
        nomeJanela = "REGULAMENTO K-POP"
        janelaPopUp.document.write("<div style='width: 100%; font-size: 1.2rem; font-family: sans-serif;'></div>")
      }
      else if (divId == 'beco-infos') {
        nomeJanela = "REGULAMENTO BECO DOS ARTISTAS"
        janelaPopUp.document.write("<div style='width: 100%; font-size: 1.2rem; font-family: sans-serif;'><h1 style='color: #3d137f; font-weight: bold;'>REGULAMENTO</h1><h2 style='color: #3d137f; font-weight: bold;'>BECO DOS ARTISTAS</h2><p><strong style='color: #3d137f;'>INTRODUÇÕES</strong><br>Está Interessado em levar sua arte para o evento?<br><br><strong style='color: #3d137f;'>CRITERIO PARA AVALIAÇÃO:</strong><br>O material de exposição deverá ser de produção original trabalho de escritores, ilustrados e artesões.<br><br><strong style='color: #3d137f;'>Produtos vetados:</strong> canecas, doces, quadros industrializados, prints de arte de terceiros, almofadas miniaturas.<br><br><strong style='color: #3d137f;'>Produtos autorizados:</strong> Hqs, livros, posters, adesivos  bottons e artesanato.<br><br>Após o cadastro estaremos fazendo a seleção, o preenchimento do formulário não garante a sua participação.</p></div>")
      }
    }
}

function switchInfos(divId) {
  var div = document.getElementById(divId);
  if (window.matchMedia("(max-width:800px)").matches) {
    abrirPopUp(divId)
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