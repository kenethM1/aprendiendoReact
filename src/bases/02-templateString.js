const nombre = 'Keneth';

const apellido = 'Perez';

const nombreCompleto = `${nombre} ${apellido}`;

function getTextConcatenado(nombre, apellido) {
    return `${nombre} ${apellido}`
}
console.log(`El nombre es ${getTextConcatenado('Keneth', 'Rodriguez')}`);
