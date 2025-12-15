const inputTarea = document.getElementById('input-tarea');
const selectEstado = document.getElementById('select-estado');
const botonAgregar = document.getElementById('btn-agregar');
const contenedorTareas = document.getElementById('lista-tareas');

contenedorTareas.innerHTML = '';

function agregarTarea() {

    const texto = inputTarea.value.trim();
    const estado = selectEstado.value;

    if (texto === "") {
        alert("¡No puedes agregar una tarea vacía!");
        return;
    }

    const nuevaTarjeta = document.createElement('div');
    nuevaTarjeta.textContent = texto; 
    nuevaTarjeta.classList.add('tarjeta', estado); 

    contenedorTareas.append(nuevaTarjeta);

    const totalTareas = contenedorTareas.children.length;

    inputTarea.value = '';
    inputTarea.focus();
}

botonAgregar.addEventListener('click', agregarTarea);