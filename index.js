function VerificarClave() {
  const password = document.getElementById("clave");
  const confirmPassword = document.getElementById("confirma-clave");
  const error = document.getElementById("error");

  if (password.value !== confirmPassword.value) {
    error.textContent = "Las contraseñas no coinciden";
    return false;
  } else {
    error.textContent = "";
  }
}

const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const clave = document.getElementById('clave');
const confirmaClave = document.getElementById('confirma-clave');
const elementosValidacion = document.getElementsByClassName('icono-validacion');

nombre.addEventListener('input', validarNombre);
email.addEventListener('input', validarEmail);
clave.addEventListener('input', validarClave);
confirmaClave.addEventListener('input', validarConfirmaClave);

function validarNombre() {
  if (nombre.validity.valid) {
    elementosValidacion[0].textContent = '';
    nombre.classList.remove('invalido');
    nombre.classList.add('valido');
    elementosValidacion[0].classList.remove('Validacion-incorrecto');
    elementosValidacion[0].classList.add('Validacion-correcto');
  } else {
    elementosValidacion[0].textContent = 'Nombre no válido';
    nombre.classList.remove('valido');
    nombre.classList.add('invalido');
    elementosValidacion[0].classList.remove('Validacion-correcto');
    elementosValidacion[0].classList.add('Validacion-incorrecto');
  }
}

function validarEmail() {
  if (email.validity.valid) {
    elementosValidacion[1].textContent = '';
    email.classList.remove('invalido');
    email.classList.add('valido');
    elementosValidacion[1].classList.remove('Validacion-incorrecto');
    elementosValidacion[1].classList.add('Validacion-correcto');
  } else {
    elementosValidacion[1].textContent = 'E-Mail no válido';
    email.classList.remove('valido');
    email.classList.add('invalido');
    elementosValidacion[1].classList.remove('Validacion-correcto');
    elementosValidacion[1].classList.add('Validacion-incorrecto');
  }
}

function validarClave() {
  if (clave.validity.valid) {
    elementosValidacion[2].textContent = '';
    clave.classList.remove('invalido');
    clave.classList.add('valido');
    elementosValidacion[2].classList.remove('Validacion-incorrecto');
    elementosValidacion[2].classList.add('Validacion-correcto');
  } else {
    elementosValidacion[2].textContent = 'La contraseña debe tener al menos 8 caracteres';
    clave.classList.remove('valido');
    clave.classList.add('invalido');
    elementosValidacion[2].classList.remove('Validacion-correcto');
    elementosValidacion[2].classList.add('Validacion-incorrecto');
  }
  VerificarClave();
}

