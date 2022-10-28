// variables
const btnEnviar = document.querySelector('.btnEnviar'),
    formulario = document.querySelector('#enviarMail')
// Variables para campos
const nombre = document.querySelector('#nombre'),
    email = document.querySelector('#email'),
    asunto = document.querySelector('#asunto'),
    mensaje = document.querySelector('#mensaje'),
    er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp)
    nombre.addEventListener('input', validarFormulario)
    email.addEventListener('input', validarFormulario)
    asunto.addEventListener('input', validarFormulario)
    mensaje.addEventListener('input', validarFormulario)
    btnEnviar.addEventListener('click', enviarEmail)
}

// Funciones
function iniciarApp(){
    btnEnviar.disabled = true;
}

function validarFormulario(e){
    const error = document.querySelector('.borderror');

    if (e.target.value.trim() === '') {
        mostrarError('Campos Obligatorios')
        e.target.style.borderBottomColor= '#e84855';
        btnEnviar.disabled = true;
        btnEnviar.classList.remove('activoBtn')
        return
    }

    if (e.target.type === 'email' && !er.test(email.value)) {
        mostrarError('El email no es válido')
        e.target.style.borderBottomColor= '#e84855';
        btnEnviar.disabled = true;
        btnEnviar.classList.remove('activoBtn')
        return
    }

    e.target.style.borderBottomColor= '#58a345';
    limpiarError(error)

    if(nombre.value !== '' && er.test(email.value) && asunto.value !=='' && mensaje.value !==''){
        btnEnviar.classList.add('activoBtn')
        btnEnviar.disabled = false;
        return
    }

}
function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('borderror', 'error')

    const errores = document.querySelectorAll('.error')
    if(errores.length === 0){
        formulario.appendChild(mensajeError)
    }
}

function limpiarError(error) {
    if (error) {
        error.remove();
    }
}

function enviarEmail(){
    Swal.fire(
        'Correo Enviado con Éxito',
        '',
        'success'
    )
    formulario.reset()
    btnEnviar.disabled = true;
    btnEnviar.classList.remove('activoBtn')
}

function menuMobile() {
    let change = 'change';
    let none = 'd-none';
    let appear = 'menuAppear';
    const menuOn = document.querySelector('.i-menu');
    const brand = document.querySelector('.brand');
    const menuEstru = document.querySelector('.navbar .container');
    const items = document.querySelector('.items');
        menuOn.addEventListener('click', () => {
            if (brand.classList.contains(none)) {
                brand.classList.remove(none)
                items.classList.remove(appear)
            } else{
                brand.classList.add(none)
                items.classList.add(appear)
            }
            if (menuEstru.classList.contains(change)) {
                menuEstru.classList.remove(change)
            } else {
                menuEstru.classList.add(change)
            }
    })
}
menuMobile();



$(document).ready(function(){
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');
    });
});