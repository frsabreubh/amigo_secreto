let listaDeAmigos = [];
let idCampoNomeDoAmigo = document.getElementById('amigo');
let idListaAmigos = document.getElementById('listaAmigos');
let idResultado = document.getElementById('resultado');

function adicionarAmigo() {
  let nomeDoAmigo = idCampoNomeDoAmigo.value;

  if (nomeDoAmigo == '') {
    alert('Por favor, insira um nome válido');    
  } else {
    if (nomeInclusoNaLista(nomeDoAmigo)) {
      alert('O nome informado já existe na lista');      
    } else {
      listaDeAmigos.push(nomeDoAmigo);
      //console.log(listaDeAmigos)
    }
  }
  
  atualizarListaDeAmigos();
  limpaCampo(idCampoNomeDoAmigo);
}

function nomeInclusoNaLista(nome) {
  return listaDeAmigos.some(amigo => amigo.toLowerCase() === nome.toLowerCase());
}

function limpaCampo(idCampo) {
  idCampo.value = '';
}

function atualizarListaDeAmigos() {
  let listaHTML = idListaAmigos;
  listaHTML.innerHTML = '';
  
  listaDeAmigos.forEach(amigo => {
    let item = document.createElement('li');
    item.textContent = amigo;
    listaHTML.appendChild(item);
  });
}

function sortearAmigo() {
  if (listaDeAmigos.length === 0) {
    alert('Você precisa adicionar amigos antes de fazer o sorteio!');
  } else {    
    let indexSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let nomeSorteado = listaDeAmigos.splice(indexSorteado, 1)[0];
    
    let li = document.createElement('li');
    
    idResultado.innerHTML = '';
    li.innerHTML = `O amigo secreto sorteado é: ${nomeSorteado}`;

    idResultado.appendChild(li);
    
    if (listaDeAmigos.length === 0) {      
      setTimeout(() => {
        alert('Todos os amigos foram sorteados!');
      }, 100);
    }
  }
}
