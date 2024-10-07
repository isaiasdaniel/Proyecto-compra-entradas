function comprar(){
let tipo = document.getElementById('tipo-ingresso')
let qtd = parseInt(document.getElementById('qtd').value);

  if(tipo.value == 'pista') {
     comprarPista(qtd);
  }
  if(tipo.value == 'inferior'){
    comprarInferior(qtd);
  }
  if(tipo.value == 'superior'){
    comprarSuperior(qtd);
  }
}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista){
        alert('Quantidade Indisponivel para tipo Pista');
        
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert ('Compra realizada con sucesso');
    }


}

function comprarInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior){
        alert('Quantidade Indisponivel para tipo Inferior');
        
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert ('Compra realizada con sucesso');
    }


}

function comprarSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior){
        alert('Quantidade Indisponivel para tipo Superior');
        
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert ('Compra realizada con sucesso');
    }


}