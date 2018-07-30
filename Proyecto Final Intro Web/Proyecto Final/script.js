//Preguntamos si desea realizar la compra, si sí contimuamos, si no, termina el programa.

let question = prompt('¿Desea realizar una compra? Ingrese "Si" para facturar o "q" para salir.');

if (question != 'q' && question != 'Q') {

    while (question != 'q' && question != 'Q') {

        let name = prompt('Indique su nombre completo');
        let id = parseInt(prompt('Indique su número de identificación(ID)'));
        let tipo = parseInt(prompt('Indique su tipo de cliente en números (1, 2, 3)'));
        let cantMat = parseInt(prompt('¿Cuántos libros de matemática desea comprar? Si no desea ninguno ingrese 0.'));
        let cantFisica = parseInt(prompt('¿Cuántos libros de física desea comprar? Si no desea ninguno ingrese 0.'))
        let cantEstSoc = parseInt(prompt('¿Cuántos libros de estudios sociales desea comprar? Si no desea ninguno ingrese 0.'));

        if (isNaN(id) || isNaN(tipo) || isNaN(cantMat) || isNaN(cantFisica) || isNaN(cantEstSoc)) {
            window.alert('Error! Los valores de número de identificación (ID), tipo de cliente y cantidad de cada tipo de libro deben ser números.');
            question = prompt('¿Desea realizar una compra? Ingrese "si" para facturar o "q" para salir.');

        } else if(cantMat <= 0 && cantEstSoc <= 0 && cantFisica <= 0){
            window.alert('No lleva ningún libro por lo tanto no se realiza la facturación, gracias por su visita. :)');
            question = prompt('¿Desea realizar una compra? Ingrese "si" para facturar o "q" para salir.');

        }else {

            let precioMat = 2000;
            let precioFisica = 4000;
            let precioEstSoc = 5000;

            let desc;
            let porcentaje;

            cantTotal = cantMat + cantFisica + cantEstSoc;

            subtotal = (cantMat * precioMat) + (cantFisica * precioFisica) + (cantEstSoc * precioEstSoc);

            switch (tipo) {
                case 1:
                    desc = (30 * subtotal) / 100;
                    porcentaje = '30%';
                    break;

                case 2:
                    desc = (20 * subtotal) / 100;
                    porcentaje = '20%';

                    break;

                case 3:
                    desc = (10 * subtotal) / 100;
                    porcentaje = '10%';
                    break;

                default:
                    desc = 0;
                    porcentaje = '0';
                    break;
            }


            total = subtotal - desc;

            console.log(`Nombre: ${name}\nCantidad de libros a comprar: ${cantTotal}\nSubtotal: ${subtotal}\nDescuento: ${porcentaje}\nTotal: ${total} `);

            question = prompt('Desea realizar otra compra? Ingrese "si" para facturar o "q" para salir.');

            console.log('¡Gracias por su compra!');
        }
    }
} else {
    console.log('Si desea realizar una compra vuelva a cargar la página. :)');
}

