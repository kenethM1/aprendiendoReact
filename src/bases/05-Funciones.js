//Funciones
const saludar = (nombre) => `${nombre}`


console.log(saludar('vegetta'));

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC576',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Rodrigo');

console.log(usuarioActivo);