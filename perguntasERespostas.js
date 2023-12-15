function verifica(){
    let certo = 0;
    let quant = document.querySelector('span[data-quant-perguntas]').dataset.quantPerguntas;
    let i;
    for(i= 0; i < quant; i++){
        let radio = document.querySelector(`input[name="p${i}"][checked]`);

            if(radio.value === "certa"){
                certo++;
                alert("teste");
            }
    }
    window.alert(certo);
}