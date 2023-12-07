document.addEventListener('DOMContentLoaded', function () {
    // Realizar la consulta al archivo DGI.txt
    fetch('DGI.CSV')
        .then(response => response.text())
        .then(data => {
            // Procesar los datos del archivo
            const lines = data.split('\n');
            lines.forEach(line => {
                const [rnc, nombre] = line.split('|');
                // Puedes hacer lo que quieras con los datos (por ejemplo, mostrarlos en la consola)
                console.log(`RNC: ${rnc}, Nombre: ${nombre}`);
            });
        })
        .catch(error => console.error('Error al cargar el archivo DGI.CSV:', error));
});
