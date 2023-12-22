var dados = [
    ["LEAGUE OF LEGENDS", "👬", "⚔️", "🏰", "🧚"],
    ["THE LEGENDS OF ZELDA", "🐎", "🧝", "🎭", "🏹"],
    ["WE HAPPY FEW", "😁", "😞", "🎭", "💊"],
    ["MINECRAFT", "⛏️", "🌎", "🏕️", "🧟"],
    ["VALORANT", "👬", "🧚", "🔫", "💣"],
    ["ROCKET LEAGUE", "🚀", "🥅", "⚽", "🚗"],
    ["FIFA", "👬", "🏃🏻", "🥅", "⚽"],
    ["JOGO DO TIGRINHO", "🎰", "💸", "🐅", "🐯"],
    ["THE SIMS", "🧑", "🏠", "👶", "💼"],
    ["BLOONS TD 6", "🎯", "🍌", "🐵", "🎈"],
    ["BORDERLANDS", "🪐", "👾", "🔫", "👽"],
    ["GTA 5", "🔫", "🚗", "💸", "👮"],
    ["GOD OF WAR", "🏛️", "👶", "🛡️", "🪓"],
    ["SPIDER-MAN", "🐙", "🦸‍♂️", "🕷️", "🕸️"],
    ["POKEMON", "👜", "⚡", "🔮", "👾"],
    ["RED DEAD REDEMPTION", "🌵", "🔫", "🐎", "🤠"],
    ["CS", "👬", "💥", "💣", "🔫"],
    ["AMONG US", "🎭", "🛸", "🤥", "👽"],
    ["FORTNITE", "⛏️", "🏗️", "🔫", "🚌"],
    ["FORZA", "🛣️", "🏁", "💨", "🚗"],
    ["PAC-MAN", "🍒", "👻", "🟡", ":V"],
    ["FIVE NIGHTS AT FREDDY'S", "🤖", "📷", "🦊", "🐻"],
    ["THE LAST OF US", "🍄", "🔫", "🧬", "🦠"],
    ["MARIO", "🐲", "👸", "⭐", "🍄"]
  ];
  
  var jogo;
  var emojis = [];

  function selecionaJogo(){
    let id = Math.floor(Math.random()*24);
    jogo = dados[id][0];
    emojis = [dados[id][1], dados[id][2], dados[id][3], dados[id][4]];
  }
  

  var p = 0;
  function verifica(){
    let resposta = document.querySelector(`input[id="resposta"]`).value.toUpperCase();
    
    if(resposta != jogo){
      if(p<4){
        document.getElementById("emojis").innerHTML += emojis[p];
        p++;
      }
    }
    else{
      document.getElementById("emojis").innerHTML = emojis[0] + emojis[1] + emojis[2] + emojis[3];
      document.getElementById("caixa").style.backgroundColor = "rgb(109, 252, 145)";
      document.getElementById("resultado").innerHTML = "PARABÉNS! VOCÊ ACERTOU!";
    }
  }
  
  function verificaEnter(event){
    if(event.key === "Enter"){
      verifica();
      document.getElementById("resposta").value = "";
    }
  }
  
