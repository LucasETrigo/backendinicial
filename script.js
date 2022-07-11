// DESAFIO 1 - LUCAS EZEQUIEL TRIGO

class Usuario {

    mascotas = [];

    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addBook(title, author) {
        this.libros.push(title, author);
        void this.libros;
    }

    getBookNames() {
        let bookNames = [];
        this.libros.forEach(book => bookNames.push(book));
        return bookNames;
    }

    addMascotas(mascota) {
        this.mascotas.push(mascota);
        void this.mascotas;
    }

    countMascotas() {
        return this.mascotas.length;
    }

}

const usuarioUno = new Usuario('Lucas', 'Trigo', [{Titulo: 'Harry Potter', Autor:'J. K. Rowling'}], ['Perro', 'Gato']);
const usuarioDos = new Usuario('Leo', 'Messi', [{Titulo: 'Codigo Da Vinci', Autor: 'Dan Brown'}], ['Delfin', 'Leon']);

console.log(`Nombre Usuario 1: ${usuarioUno.getFullName()}`);
usuarioUno.addMascotas('Loro');
console.log(usuarioUno.mascotas);
console.log(`Cantidad de mascotas: ${usuarioUno.countMascotas()}`);
console.log(usuarioUno.getBookNames());


console.log(`Nombre Usuario 2: ${usuarioDos.getFullName()}`);
usuarioDos.addMascotas('Pato');
console.log(usuarioDos.mascotas);
console.log(`Cantidad de mascotas: ${usuarioDos.countMascotas()}`);
console.log(usuarioDos.getBookNames());
