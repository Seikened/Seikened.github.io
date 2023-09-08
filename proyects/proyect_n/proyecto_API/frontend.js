document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const entrada = document.getElementById('entrada').value;

    // Buscar el usuario por ID usando la ruta correcta
    fetch(`http://localhost:3000/${entrada}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('salida').innerText = `Usuario encontrado: ${data.name} ${data.lastname}`;
        })
        .catch(error => {
            console.error('Error al buscar el usuario:', error);
            document.getElementById('salida').innerText = 'Usuario no encontrado 😞';
        });
});