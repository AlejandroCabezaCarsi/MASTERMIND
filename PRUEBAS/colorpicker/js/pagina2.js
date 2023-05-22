// Me traigo el array del session storage 

let arrayColores = ["rojo","azul","amarillo","verde","morado","rosa"]; 

let combinacionGanadora = [];

// combinacionUsuario = /*colorPicker del juego*/;

let combinacionUsuario = []

let contador = 0;

for (i=0 ; i < 4; i++){

    let posicionRandom = Math.floor(Math.random()*arrayColores.length); 

    combinacionGanadora.push(arrayColores[posicionRandom]); 

    console.log(combinacionGanadora)



}


if (combinacionUsuario.join("") === combinacionGanadora.join("")){

    console.log("HAS GANADO");
}else {
    
    console.log("sigue intentandolo");
}

