let contenedor1 = document.getElementById ('contenedorColorPickerMedio1');
let contenedor2 = document.getElementById ('contenedorColorPickerMedio2');
let contenedor3 = document.getElementById ('contenedorColorPickerMedio3');
let contenedor4 = document.getElementById ('contenedorColorPickerMedio4');
let contenedor5 = document.getElementById ('contenedorColorPickerMedio5');

contenedor1.style.backgroundColor = "#AC92EC"; 
contenedor2.style.backgroundColor = "#F6BB42"; 
contenedor3.style.backgroundColor = "#ED5565"; 
contenedor4.style.backgroundColor = "#A0D468"; 
contenedor5.style.backgroundColor = "#5D9CEC"; 

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
        case 4:
            
            contenedor5.style.backgroundColor = colorPicker.value

            break;
    
        
    }

})

colorSiguiente.addEventListener('click', () => {



    switch (contador) {
        case 0:

            arrayColores.push(colorPicker.value)
            contador+=1
            contenedor1.style.backgroundColor = colorPicker.value


            if (arrayColores[0]=== '#000000'){
                arrayColores.pop()
                arrayColores.push('#AC92EC')
            }
            console.log(arrayColores)
            console.log(contador)
        
            break;
        case 1:

            arrayColores.push(colorPicker.value)
            contador++
            contenedor2.style.backgroundColor = colorPicker.value
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
            contenedor3.style.backgroundColor = colorPicker.value

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
            contenedor4.style.backgroundColor = colorPicker.value

            if (arrayColores[3]=== '#000000'){
                arrayColores.pop()
                arrayColores.push('#A0D468')
            } 
            console.log(arrayColores)
            console.log(contador)
        
        
            break;
        case 4:

            arrayColores.push(colorPicker.value)
            contador+=1
            contenedor5.style.backgroundColor = colorPicker.value

            if (arrayColores[4]=== '#000000'){
                arrayColores.pop()
                arrayColores.push('#5D9CEC')
            } 
            console.log(arrayColores)
            console.log(contador)
        
        
            break;

    }


})

colorAnterior.addEventListener('click', () => { 
    switch (contador) {

        case 5:

        contador--
        arrayColores.pop()
        contenedor5.style.background = '#5D9CEC';
        console.log(arrayColores)
            
            break;

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

