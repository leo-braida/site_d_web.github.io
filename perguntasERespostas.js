function verifica(){
    let certo = 0;
    let quant = document.querySelector('span[data-quant-perguntas]').dataset.quantPerguntas;
    let i;
    let inputs = document.querySelectorAll("input[name='p']");

    for(i = 0; i<quant; i++){
        let nome = "p" + i;
        const radio = document.querySelector(`input[name="${nome}"]`);
        if(radio.checked){
            if(radio.value === "certa"){
                certo++;
            }
        }
    }

    //Agora falta ter o lugar de enviar o quiz no html para eu poder linkar com o valor de certo
}