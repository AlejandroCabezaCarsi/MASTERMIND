const dificultad = parseInt(sessionStorage.getItem('Dificultad'));
const arrayColoresPredefinidos = ['#A0D468', '#ED5565', '#4FC1E9', '#ec87c0', '#AC92EC', '#f6bb42']
let coloresUsuario = []




// FUNCION QUE CREA DIVS DINAMICAMENTE

const EligeColores = () => {
    
    if (dificultad === 10) {
        for (let i = 0; i < 4; i++) {
            const circulosEleccion = document.createElement('div');
            circulosEleccion.className = 'circulosMedio m-5';
            circulosEleccion.id = 'circulosEleccion' + i;
            circulosEleccion.style.backgroundColor = arrayColoresPredefinidos[i];
            circulosEleccion.style.border = 'solid white 0.2em';
            circulosEleccion.onclick = () => {
                const colorPicker = document.getElementById('colorPickerD');
                circulosEleccion.style.backgroundColor = colorPicker.value;
                const index = parseInt(circulosEleccion.id.slice(-1));
                coloresUsuario[index] = circulosEleccion.style.backgroundColor;
            };
            filaEleccionColor.appendChild(circulosEleccion);
        }
    }

    if (dificultad===8){


        for (i=0; i<5; i++){
            const circulosEleccion = document.createElement('div');
            circulosEleccion.className = 'circulosMedio m-5';
            circulosEleccion.id = 'circulosEleccion' + i;
            circulosEleccion.style.backgroundColor = arrayColoresPredefinidos[i];
            circulosEleccion.style.border = 'solid white 0.2em';
            circulosEleccion.onclick = () => {
                const colorPicker = document.getElementById('colorPickerD');
                circulosEleccion.style.backgroundColor = colorPicker.value;
                const index = parseInt(circulosEleccion.id.slice(-1));
                coloresUsuario[index] = circulosEleccion.style.backgroundColor;
                console.log(coloresUsuario)
                
            };
            filaEleccionColor.appendChild(circulosEleccion);
        }
    }

    if (dificultad===6){

        for (i=0; i<6; i++){
            const circulosEleccion = document.createElement('div');
            circulosEleccion.className = 'circulosMedio m-5';
            circulosEleccion.id = 'circulosEleccion' + i;
            circulosEleccion.style.backgroundColor = arrayColoresPredefinidos[i];;
            circulosEleccion.style.border = 'solid white 0.2em';
            circulosEleccion.onclick = () => {
                const colorPicker = document.getElementById('colorPickerD');
                circulosEleccion.style.backgroundColor = colorPicker.value;
                const index = parseInt(circulosEleccion.id.slice(-1));
                coloresUsuario[index] = circulosEleccion.style.backgroundColor;
            };
            filaEleccionColor.appendChild(circulosEleccion);
        }
    }
}

EligeColores()


const subeArray = () => {

    sessionStorage.setItem('Colores', JSON.stringify(coloresUsuario) )

}

console.log(dificultad)
switch (parseInt(dificultad)) {
    

    case 10:
        
        if (coloresUsuario.length < 4){
            console.log("HOlaaa??")
            console.log(" Array de colores " + coloresUsuario)
        }

        break;

    default:
        break;
}



