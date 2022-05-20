//Valor del ticket
const ticket = 200;

//Porcentajes de descuento segun categoria
const descEstudiante = 80;
const descTrainne = 50;
const descJunior = 15;

//Elementos en variables
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let correo = document.getElementById('correo');
let cantidad = document.getElementById('cantidad');
let categoria = document.getElementById('categoria');
let total = document.getElementById('total');
let resumen = document.getElementById('resumen');

//Calcular el total a pagar
function total_a_pagar(){    
    let cant = Number(cantidad.value);
    let cat = categoria.value;
    let descuento = 0;
    switch (cat) {
        case '1':
            descuento = descEstudiante;
            break;
        case '2':
            descuento = descTrainne;
            break;
        case '3':
            descuento = descJunior;
            break;
        default:
            break;
    }

    let calculo = ticket * cant * ((100 - descuento)/100);
    total.innerHTML = calculo;
}

resumen.addEventListener('click', total_a_pagar);