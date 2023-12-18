var certo;

function verifica(){
    certo = 0;
    let quant = document.querySelector('span[data-quant-perguntas]').dataset.quantPerguntas;
    for(let i = 0; i<quant; i++){
        let nome = "p" + i;
        let radios = document.querySelectorAll(`input[name="${nome}"]`);
        for(let radio of radios){
            if(radio.checked){
                if(radio.value === "certa"){
                    certo++;
                }
            }
        }
    }
    //Agora falta ter o lugar de enviar o quiz no html para eu poder linkar com o valor de certo
}


/* 
temos duas opções:
 -> Colocar uma classe em todas as corretas
 -> Colocar um laço sempre que quiser pegar as corretas (pode gerar um delay para aparecer as cores)
*/

function correcao(){
    let quant = document.querySelector('span[data-quant-perguntas]').dataset.quantPerguntas;
    for(let i = 0; i<quant; i++){
        let nome = "p" + i;
        let radios = document.querySelectorAll(`input[name="${nome}"]`);
        for(let radio of radios){
            if(radio.value == "certa"){
                radio.parentElement.style.backgroundColor = "#34FF37"; //estou pegando o input, mas preciso pegar toda label ao redor do input
            }
            else{
                radio.parentElement.style.backgroundColor = "#E71D1D";
            }
        }
    }

    const labels = document.querySelectorAll("label");
    document.getElementById("pontuacao").innerHTML = `Pontuação: ${certo}/${quant}`;
}