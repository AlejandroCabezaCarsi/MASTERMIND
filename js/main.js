let contenedor1 = document.getElementById ('contenedorColorPickerFacil1') ?? "#AC92EC";
let contenedor2 = document.getElementById ('contenedorColorPickerFacil2');
let contenedor3 = document.getElementById ('contenedorColorPickerFacil3');
let contenedor4 = document.getElementById ('contenedorColorPickerFacil4');

contenedor1.style.backgroundColor = "#AC92EC"; 
contenedor2.style.backgroundColor = "#F6BB42"; 
contenedor3.style.backgroundColor = "#ED5565"; 
contenedor4.style.backgroundColor = "#A0D468"; 

let arrayColores = []

let colorAnterior = document.getElementById('colorAnterior'); 
let colorSiguiente = document.getElementById('colorSiguiente');

const colorPicker = document.querySelector('input');


let contador = 0;



colorPicker.addEventListener('input', () => {

    

    switch (contador) {
        case 0:
            
            contenedor1.style.backgroundColor = colorPicker.value

            break;
        case 1:
            
            contenedor2.style.backgroundColor = colorPicker.value

            break;
        case 2:
            
            contenedor3.style.backgroundColor = colorPicker.value

            break;
        case 3:
            
            contenedor4.style.backgroundColor = colorPicker.value

            break;
    
        
    }

})

colorSiguiente.addEventListener('click', () => {



    switch (contador) {
        case 0:

            arrayColores.push(colorPicker.value)
            contador+=1

            if (arrayColores[0] === '#000000'){
                arrayColores.pop()
                arrayColores.push('#AC92EC')
            }
            console.log(arrayColores)
            console.log(contador)
        
            break;
        case 1:

            arrayColores.push(colorPicker.value)
            contador++
            if (arrayColores[1]=== '#000000'){
                arrayColores.pop()
                arrayColores.push('#F6BB42')
            }
            console.log(arrayColores)
            console.log(contador)
        
        
            break;
        case 2:

            arrayColores.push(colorPicker.value)
            contador+=1
            if (arrayColores[2]=== '#000000'){
                arrayColores.pop()
                arrayColores.push('#ED5565')
            }
            console.log(arrayColores)
            console.log(contador)
        
        
            break;
        case 3:

            arrayColores.push(colorPicker.value)
            contador+=1
            if (arrayColores[3]=== '#000000'){
                arrayColores.pop()
                arrayColores.push('#A0D468')
            } 
            console.log(arrayColores)
            console.log(contador)
        
        
            break;

    }


})

colorAnterior.addEventListener('click', () => { 
    switch (contador) {
        case 4:

        contador--
        arrayColores.pop()
        contenedor4.style.background = '#A0D468';
        console.log(arrayColores)
            
            break;
        case 3:

        contador--
        arrayColores.pop()
        contenedor3.style.background = '#ED5565';
        console.log(arrayColores)
            
            break;
        case 2:

        contador--
        arrayColores.pop()
        contenedor2.style.background = '#F6BB42';
        console.log(arrayColores)
            
            break;
        case 1:

        contador--
        arrayColores.pop()
        contenedor1.style.background = '#AC92EC';
        console.log(arrayColores)
            
            break;
    
        default:
            break;
    }
})





// const colorPickerFacil1 = document.querySelector('#colorPickerFacil1'); 
// const colorPickerFacil2 = document.querySelector('#colorPickerFacil2'); 
// const colorPickerFacil3 = document.querySelector('#colorPickerFacil3'); 
// const colorPickerFacil4 = document.querySelector('#colorPickerFacil4'); 


// colorPickerFacil1.addEventListener('input', () => { 

//     contenedor1.style.backgroundColor = colorPickerFacil1.value

//     console.log(colorPickerFacil1.value)

// })
// colorPickerFacil2.addEventListener('input', () => { 

//     contenedor2.style.backgroundColor = colorPickerFacil2.value

//     console.log(colorPickerFacil1.value)

// })
// colorPickerFacil3.addEventListener('input', () => { 

//     contenedor3.style.backgroundColor = colorPickerFacil3.value

//     console.log(colorPickerFacil1.value)

// })

// colorPickerFacil4.addEventListener('input', () => { 

//     contenedor4.style.backgroundColor = colorPickerFacil4.value

//     console.log(colorPickerFacil1.value)

// })

// console.log(contenedor1.backgroundColor)
// console.log(contenedor2.backgroundColor)
// console.log(contenedor3.backgroundColor)
// console.log(contenedor4.backgroundColor)
// // let colorPickerExistente = false; 



// let guardaArray = document.getElementById('guardaArray')


// guardaArray.addEventListener('click', ()=> {

//     arrayColores.push(colorPickerFacil1.value); 
//     arrayColores.push(contenedor2.value); 
//     arrayColores.push(contenedor3.value); 
//     arrayColores.push(contenedor4.value); 

// })

// console.log(arrayColores)

// const apareceColorPicker = () => { 

//     if (colorPickerExistente == false ){
    
//     const colorPicker = document.getElementById('colorPicker'); 
    
//     const inputColorPicker = document.createElement('input'); 
//     inputColorPicker.type = 'color'; 

//     colorPicker.appendChild(inputColorPicker)

//     colorPicker.style.display = 'block'; }
    
//     colorPickerExistente = true; 

// }







