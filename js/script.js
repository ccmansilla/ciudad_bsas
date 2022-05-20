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
let reset = document.getElementById('reset');

//Funcion para quitar el estilo error de las entradas del formulario
function quitarClaseError(){
    let elementos = document.querySelectorAll(".is-invalid");
    for (let index = 0; index < elementos.length; index++) {
        elementos[index].classList.remove("is-invalid");
    }
}

//Validar email
function validateEmail(email) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
}

//Calcular el total a pagar
function calcularTotal(){    

    quitarClaseError();

    //validaciones de los valores
    if(nombre.value === ""){
        //alert('Debe ingresar un nombre');
        nombre.classList.add('is-invalid');
        return;
    } 

    if(apellido.value === ""){
        //alert('Debe ingresar un apellido');
        apellido.classList.add('is-invalid');
        return;
    } 

    if(correo.value === "" || !validateEmail(correo.value)){
        //alert('Debe ingresar un correo valido');
        correo.classList.add('is-invalid');
        return;
    } 

    if(cantidad.value === ""){
        //alert('Debe ingresar una cantidad');
        cantidad.classList.add('is-invalid');
        return;
    } 

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
    }

    let calculo = ticket * cant * ((100 - descuento)/100);
    total.innerHTML = calculo;
}

resumen.addEventListener('click', calcularTotal);

reset.addEventListener('click', quitarClaseError);