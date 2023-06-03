
const dificultad = parseInt(sessionStorage.getItem('Dificultad'));
let contadorDificultad = dificultad + 1
let arrayColores = JSON.parse(sessionStorage.getItem('Colores'))

let combinacionGanadora = [];
let combinacionUsuario = []; 
let arrayFichasComprobacion = ["0","0","0","0"];
const arrayColoresPredefinidos = ['#A0D468', '#ED5565', '#4FC1E9', '#ec87c0', '#AC92EC', '#f6bb42']


if (dificultad === 10 && arrayColores.length != 4){
    arrayColores = ['#A0D468', '#ED5565', '#4FC1E9', '#ec87c0']
}
if (dificultad === 8 && arrayColores.length != 5){
    arrayColores = ['#A0D468', '#ED5565', '#4FC1E9', '#ec87c0', '#AC92EC']
}
if (dificultad === 6 && arrayColores.length != 6){
    arrayColores = ['#A0D468', '#ED5565', '#4FC1E9', '#ec87c0', '#AC92EC', '#f6bb42']
}


let contadorFilas = 1; 

let contenedor1 = document.getElementById(`posicion1`);
let contenedor2 = document.getElementById(`posicion2`);
let contenedor3 = document.getElementById(`posicion3`);
let contenedor4 = document.getElementById(`posicion4`);
let botonCheck = document.getElementById(`botonComprobar`);

let contador1 = 3;
let contador2 = 3;
let contador3 = 3;
let contador4 = 3;

let confirmarClick1 = false;
let confirmarClick2 = false;
let confirmarClick3 = false;
let confirmarClick4 = false;

// //GENERACION ARRAY COMBINACION GANADORA

for ( i=0; i<4 ; i++){

    let posicionRandom = Math.floor(Math.random()*arrayColores.length);

    combinacionGanadora.push(arrayColores[posicionRandom]); 

}


//CAMBIO DE COLOR EN LOS DIVS AL HACER CLICK

contenedor1.addEventListener('click', () => {
    contador1++;
    if (contador1 > arrayColores.length - 1 ){contador1 = 0;};
    contenedor1.style.backgroundColor = arrayColores[contador1];
    confirmarClick1 = true; 
    
})
contenedor2.addEventListener('click', () => {   
    contador2++;
    if (contador2 > arrayColores.length - 1 ){contador2=0;};
    contenedor2.style.backgroundColor = arrayColores[contador2];
    confirmarClick2 = true
})
contenedor3.addEventListener('click', () => {
    contador3++;
    if (contador3 > arrayColores.length - 1){contador3=0;};
    contenedor3.style.backgroundColor = arrayColores[contador3];
    confirmarClick3 = true;
})
contenedor4.addEventListener('click', () => {
    contador4++;
    if (contador4 > arrayColores.length - 1){contador4=0;};
    contenedor4.style.backgroundColor = arrayColores[contador4];
    confirmarClick4 = true;
})



//BOTON COMPROBAR

botonCheck.addEventListener('click', () => {

    if (dificultad === 10 && contadorFilas === 10 || dificultad === 8 && contadorFilas === 8 || dificultad === 6 && contadorFilas === 6){
            sessionStorage.setItem('resultado', 'perdedor')
            window.location.href = 'pantallaFinal.html'
        }  

    if(confirmarClick1 == false || confirmarClick2 == false || confirmarClick3 == false || confirmarClick4 == false){

            return;

            }else {
                
                combinacionUsuario.push(
                        arrayColores[contador1],
                        arrayColores[contador2],
                        arrayColores[contador3],
                        arrayColores[contador4])                        
            }

Ganador(combinacionGanadora,combinacionUsuario);

Comprobador(combinacionGanadora,combinacionUsuario);

CreaFila()


     

combinacionUsuario.splice(0,4)

contenedor1.style.backgroundColor = '#000000'
contenedor2.style.backgroundColor = '#000000'
contenedor3.style.backgroundColor = '#000000'
contenedor4.style.backgroundColor = '#000000'

contador1 = 3;
contador2 = 3;
contador3 = 3;
contador4 = 3;

confirmarClick1 = false
confirmarClick2 = false
confirmarClick3 = false
confirmarClick4 = false

for (i=0; i<4; i++){
    arrayFichasComprobacion[i] ='#000000'
    let fichaComprobacion = document.getElementById("fichaComprobacion" + i);
    fichaComprobacion.style.background = '#000000'

}

})

//FUNCION PARA COMPROBAR SI EL JUGADOR GANA

const Ganador = (arrayA,arrayB) => { 

    if (arrayA.join("")===arrayB.join("")){
        sessionStorage.setItem('resultado', 'ganador')
        window.location.href = 'pantallaFinal.html'
    }
}

//FUNCION PARA PINTAR LOS COLORES DE ACIERTOS


const Comprobador = (arrayA, arrayB) => {

    let arrayAACortado = [];
    let arrayBBCortado = [];
    let arrayAComprobado = []

    for(i = 0; i < 4; i++){
        arrayAComprobado[i] = arrayA[i]
    }


    for ( i = 0; i < 4; i++ ){

        if (arrayA[i] === arrayB[i]){

            arrayFichasComprobacion[i] = '#FF0000';
            arrayAACortado[i]=  i + 10;
            arrayBBCortado[i]= i;    
        }else {
        
            arrayFichasComprobacion[i]= "#000000"
            arrayAACortado[i] = arrayA[i];
            arrayBBCortado[i] = arrayB[i];

        }
        
    }

            console.log("COMBINACION GANADORA " + combinacionGanadora)
            console.log("COMBINACION USUARIO " + combinacionUsuario)

            console.log("ARRAYAA " + arrayAACortado)
            console.log("ARRAYBB " + arrayBBCortado)

            console.log(arrayFichasComprobacion)

    
    
    
        for (i = 0; i < 4; i++){

        
        
        const coincide = arrayAACortado.findIndex (element => element === arrayBBCortado[i])

        console.log(coincide)

        if (coincide >= 0){
            arrayFichasComprobacion[i] = "#FFFFFF";
            arrayBBCortado[i] = i + 20;
            arrayAACortado[coincide] = i + 40   
            
            
        }
        
    }

    

            console.log("ARRAYAA " + arrayAACortado)
            console.log("ARRAYBB " + arrayBBCortado)

            console.log(arrayFichasComprobacion)
    
    arrayAACortado = []
    arrayBBCortado = []

}


//FUNCION QUE CREA LAS FILAS DINAMICAS

const CreaFila = () => {

    if (dificultad === 10 && contadorFilas <= 10 || dificultad === 8 && contadorFilas <= 8 || dificultad === 6 && contadorFilas <= 6){
        let filasDinamicas = document.getElementById('filasDinamicas'); 

        const fila = document.createElement('div'); 
        fila.id = `fila${contadorFilas}`
        fila.className ='filaD';

        const numeroFila = document.createElement('div'); 
        numeroFila.className = 'numeroFilaD'
        numeroFila.innerHTML = `${contadorFilas}`
        fila.appendChild(numeroFila)


        const contenedorCirculos = document.createElement('div'); 
        contenedorCirculos.className = 'contenedorCirculosD'; 
        fila.appendChild(contenedorCirculos)

        for (i = 0; i<4 ; i++){ 
            const div = document.createElement('div'); 
            div.className = "circulosEleccionUsuarioD"
            div.style.backgroundColor = combinacionUsuario[i]; 
            contenedorCirculos.appendChild(div)
        }

        const contenedorComprobacion = document.createElement('div'); 
        contenedorComprobacion.className = 'comprobacionCombinacionD d-flex'
        fila.appendChild(contenedorComprobacion)


        const columnaComprobacion1 = document.createElement('div'); 
        columnaComprobacion1.className = 'columnaComprobacionD'; 
        contenedorComprobacion.appendChild(columnaComprobacion1)


        const columnaComprobacion2 = document.createElement('div'); 
        columnaComprobacion2.className = 'columnaComprobacionD'; 
        contenedorComprobacion.appendChild(columnaComprobacion2)



        for (i=0; i < 2; i++){
          const circulosComprobacion1 = document.createElement('div');
          circulosComprobacion1.className = "circulosComprobacionD";
          circulosComprobacion1.style.backgroundColor = arrayFichasComprobacion[i];
          columnaComprobacion1.appendChild(circulosComprobacion1);
        };

        for (i=2; i < 4; i++){
            const circulosComprobacion2 = document.createElement('div'); 
            circulosComprobacion2.className = "circulosComprobacionD";
            circulosComprobacion2.style.backgroundColor = arrayFichasComprobacion[i];
            columnaComprobacion2.appendChild(circulosComprobacion2);
        }

        filasDinamicas.appendChild(fila)

        contadorFilas++
        
        
        arrayFichasComprobacion = [];
        


    }
}
