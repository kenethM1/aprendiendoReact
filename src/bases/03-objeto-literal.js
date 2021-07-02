const persona = {
    nombre: 'Keneth',
    edad: 21,
    direccion: {
        calle: 33,
        avenida: 14
    }
};
const persona2 = { ...persona };
console.log(persona);
console.log(persona2);