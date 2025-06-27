<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
  const opcionesUsuario = document.getElementById('opciones-usuario');

  if (opcionesUsuario) {
    opcionesUsuario.addEventListener('change', (e) => {
      const option = e.target.value;

      if (option === 'solicitar-turno') {
        window.location.href = '/formulario-turno';  // <--- Asegurate que esta ruta esté definida en tus rutas
      } else if (option === 'cerrar-sesion') {
        window.location.href = '/cerrar-session';
      }

      selector.selectedIndex = 0;
    });
  }
});
=======
const btnUsuario = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

btnUsuario.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  const esClickDentro = btnUsuario.contains(e.target) || dropdownMenu.contains(e.target);
  if (!esClickDentro) {
    dropdownMenu.classList.remove('show');
  }
});
>>>>>>> Nahuel
