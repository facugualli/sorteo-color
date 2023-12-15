
// const ROJO = "Rojo";
// const VERDE = "Verde";
// const AZUL = "Azul";
// const AMARILLO = "Amarillo";
// const MAGENTA = "Magenta";

// // Array de colores
// const colores = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"];

// // Función para cambiar el color y mostrar SweetAlert2
// function cambiarColor() {
//     // Obtener un índice aleatorio del array de colores
//     const indice = Math.floor(Math.random() * colores.length);
    
//     // Obtener el nombre del color correspondiente al índice
//     const nombreColor = obtenerNombreColor(colores[indice]);

//     // Mostrar SweetAlert2 con el nombre del color y el mensaje original
//     Swal.fire({
//         title: `¡Tu color es ${nombreColor}!`,
//         text: '¿Quieres conservar este color o intentar uno nuevo?',
//         icon: 'question',
//         showCancelButton: true,
//         confirmButtonText: 'Conservar',
//         cancelButtonText: 'Intentar uno nuevo',
//     }).then((result) => {
//         if (result.value) {
//             // El usuario eligió conservar el color
//             Swal.fire('¡Color conservado!', '', 'success');
//         } else {
//             // El usuario eligió intentar uno nuevo
//             cambiarColor();
//         }
//     });
// }

// // Función para obtener el nombre del color a partir del código hexadecimal
// function obtenerNombreColor(hex) {
//     // Asignar nombres a los colores según el código hexadecimal
//     switch (hex) {
//         case "#ff0000":
//             return ROJO;
//         case "#00ff00":
//             return VERDE;
//         case "#0000ff":
//             return AZUL;
//         case "#ffff00":
//             return AMARILLO;
//         case "#ff00ff":
//             return MAGENTA;
//         default:
//             return "Desconocido";
//     }
// }


// Definir constantes para los nombres de los colores
const ROJO = "Rojo";
const VERDE = "Verde";
const AZUL = "Azul";
const AMARILLO = "Amarillo";
const ROSA = "Rosa";
const BLANCO = "Blanco";
const NEGRO = "Negro";

// Array de colores
const colores = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#FF69B4", "#ffffff", "#000000"];

// Variable para rastrear si se ha cambiado el color
let colorCambiado = false;

// Variable para almacenar el color inicial
let colorInicial = null;

// Función para cambiar el color y mostrar SweetAlert2
function cambiarColor() {
    if (colorCambiado) {
        // Si el color ya ha sido cambiado, mostrar el color definitivo
        mostrarColorDefinitivo(obtenerColorDiferente(colorInicial));
    } else {
        // Si el color no ha sido cambiado, proceder con cambiar el color y mostrar opciones
        cambiarColorYMostrarOpciones();
    }
}

// Función para cambiar el color y mostrar SweetAlert2 con opciones
function cambiarColorYMostrarOpciones() {
    // Obtener un índice aleatorio del array de colores
    const indice = Math.floor(Math.random() * colores.length);
    
    // Obtener el nombre del color correspondiente al índice
    const nombreColor = obtenerNombreColor(colores[indice]);

    // Almacenar el color inicial si aún no ha sido cambiado
    if (!colorCambiado) {
        colorInicial = colores[indice];
    }

    // Mostrar SweetAlert2 con el nombre del color y opciones
    Swal.fire({
        title: `¡Tu color es ${nombreColor}!`,
        text: '¿Queres conservar este color o intentar uno nuevo?',
        showCancelButton: true,
        confirmButtonText: 'Conservar',
        cancelButtonText: 'Intentar uno nuevo',
    }).then((result) => {
        if (result.value) {
            // El usuario eligió conservar el color
            Swal.fire(`¡Tu color es ${nombreColor}!`, '', 'success');
            // Marcar que el color ha sido cambiado
            colorCambiado = true;
        } else {
            // El usuario eligió intentar uno nuevo
            mostrarColorDefinitivo(obtenerColorDiferente(colorInicial));
        }
    });
}

// Función para mostrar SweetAlert2 solo con la opción de conservar
function mostrarColorDefinitivo(color) {
    Swal.fire({
        title: `Tu color es ${obtenerNombreColor(color)}!`,
        icon: 'success',
    });
}

// Función para obtener el nombre del color a partir del código hexadecimal
function obtenerNombreColor(hex) {
    // Asignar nombres a los colores según el código hexadecimal
    switch (hex) {
        case "#ff0000":
            return ROJO;
        case "#00ff00":
            return VERDE;
        case "#0000ff":
            return AZUL;
        case "#ffff00":
            return AMARILLO;
        case "#FF69B4":
            return ROSA;
        case "#ffffff":
            return BLANCO;
        case "#000000":
            return NEGRO;
        default:
            return "Desconocido";
    }
}

// Función para obtener un color diferente al color inicial
function obtenerColorDiferente(colorInicial) {
    let nuevoColor;
    do {
        // Obtener un índice aleatorio que no sea el mismo que el color inicial
        const indice = Math.floor(Math.random() * colores.length);
        nuevoColor = colores[indice];
    } while (nuevoColor === colorInicial);
    return nuevoColor;
}



