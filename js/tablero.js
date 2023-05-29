// Me traigo el array de colores del session storage

const arrayColores = ["#80E5EB","#16F35D","#D5F507","#F50707"]; /**/
const combinacionGanadora = ["#80E5EB","#16F35D","#D5F507","#F50707"];
const combinacionUsuario = []; 

let contadorFilas = 1; 

// const contenedor1 = document.getElementById(`posicion${contadorFilas}1`);
// const contenedor2 = document.getElementById(`posicion${contadorFilas}2`);
// const contenedor3 = document.getElementById(`posicion${contadorFilas}3`);
// const contenedor4 = document.getElementById(`posicion${contadorFilas}4`);
    let contenedor1; 
    let contenedor2; 
    let contenedor3; 
    let contenedor4; 
    let botonCheck;




let contador1 = 3;
let contador2 = 3;
let contador3 = 3;
let contador4 = 3;

let confirmarClick1 = false;
let confirmarClick2 = false;
let confirmarClick3 = false;
let confirmarClick4 = false;



const Ganador = (arrayA,arrayB) => { 

    if (arrayA.join("")===arrayB.join("")){
        alert('ENHORABUENA HAS GANADO')
    }
}

const Comprobador = (arrayA,arrayB) => { 
        
    for ( i=0 ; i<4; i++){ 
        
        if (arrayA.includes(arrayB[i])){ 
            let fichaComprobacion = document.getElementById("fichaComprobacion" + i);
            fichaComprobacion.style.background = '#FFFFFF'
            
        }

        if(arrayA[i]===arrayB[i]){
            
            let fichaComprobacion = document.getElementById("fichaComprobacion" + i);
            fichaComprobacion.style.backgroundColor = '#FF0000'
        }
    }
}

const ActualizaContenedores = () => { 

    contadorFilas++

    contenedor1 = document.getElementById(`posicion${contadorFilas}1`);
    contenedor2 = document.getElementById(`posicion${contadorFilas}2`);
    contenedor3 = document.getElementById(`posicion${contadorFilas}3`);
    contenedor4 = document.getElementById(`posicion${contadorFilas}4`);
    botonCheck = document.getElementById(`botonComprobar${contadorFilas}1`);

    contenedor1.id = `posicion${contadorFilas}1`;
    contenedor2.id = `posicion${contadorFilas}2`;
    contenedor3.id = `posicion${contadorFilas}3`;
    contenedor4.id = `posicion${contadorFilas}4`;
    botonCheck.id = `botonComprobar${contadorFilas}1`;
    

}


// //GENERACION ARRAY COMBINACION GANADORA


// // for ( i=0; i<4 ; i++){

// //     let posicionRandom = Math.floor(Math.random()*arrayColores.length);

// //     combinacionGanadora.push(arrayColores[posicionRandom]); 

// // }

// console.log('Combinacion ganadora: ', combinacionGanadora)



// //CAMBIO DE COLOR EN LOS DIVS AL HACER CLICK


document.addEventListener('DOMContentLoaded', () =>{

    let contenedor1 = document.getElementById(`posicion${contadorFilas}1`);
    let contenedor2 = document.getElementById(`posicion${contadorFilas}2`);
    let contenedor3 = document.getElementById(`posicion${contadorFilas}3`);
    let contenedor4 = document.getElementById(`posicion${contadorFilas}4`);
    let botonCheck = document.getElementById(`botonComprobar${contadorFilas}1`);



contenedor1.addEventListener('click', () => {
    contador1++;
    if (contador1 > 3){contador1 = 0;};
    contenedor1.style.backgroundColor = arrayColores[contador1];
    confirmarClick1 = true; 
})
contenedor2.addEventListener('click', () => {   
    contador2++;
    if (contador2 > 3){contador2=0;};
    contenedor2.style.backgroundColor = arrayColores[contador2];
    confirmarClick2 = true
})
contenedor3.addEventListener('click', () => {
    contador3++;
    if (contador3 > 3){contador3=0;};
    contenedor3.style.backgroundColor = arrayColores[contador3];
    confirmarClick3 = true;
})
contenedor4.addEventListener('click', () => {
    contador4++;
    if (contador4 > 3){contador4=0;};
    contenedor4.style.backgroundColor = arrayColores[contador4];
    confirmarClick4 = true;
})



// //BOTON COMPROBAR

botonCheck.addEventListener('click', () => {

    if(confirmarClick1 == false || confirmarClick2 == false || confirmarClick3 == false || confirmarClick4 == false){

            console.log('combinacion usuario: ' + combinacionUsuario)
            alert ('TIENES QUE TENER CUATRO COLORES EN LA COMBINACION')    
            return;

            }else {
                
                combinacionUsuario.push(
                        arrayColores[contador1],
                        arrayColores[contador2],
                        arrayColores[contador3],
                        arrayColores[contador4])

                        console.log('combinacion usuario: ' + combinacionUsuario)
                        const filaMovil = document.getElementsByClassName('filaMovil')[contadorFilas - 1];
                        filaMovil.classList.add('filaInhabilitada');
                        
            }


Ganador(combinacionGanadora,combinacionUsuario);

Comprobador(combinacionGanadora,combinacionUsuario);

ActualizaContenedores(); 

console.log(contadorFilas)
console.log(contenedor1.id,contenedor2.id)

})

});
