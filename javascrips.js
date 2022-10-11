
let nombreCurso = prompt('Ingrese el Curso Del alumno')
let numeroAlumnos = prompt('Ingrese mediante un numero entero el numero de Alumnos a ingresar');


let contador = 0;
let listaAlumno = []

class Curso {
    constructor(nombre, alumno) {

        this._nombre = function () {
            return nombre;
        };

        this._alumno = function () {
            return alumno || [];
        };

    }
    getName() {
        return this._nombre();
    }
    setName(nuevo_nombre) {
        this._nombre = function () {
            return nuevo_nombre;
        };
    }
    agregarAlumno(alumno) {
        this.alumno.push(alumno);
    }

    getAlumnos() {

        this._alumno().forEach(function (elemento, index) {
            console.log(`Numero del Alumno: ${index}`);
            console.log(`Nombre: ${elemento._nombre()}`);
            console.log(`Edad: ${elemento._edad()}`);
            console.log(`RUT: ${elemento._rut()}`);
            console.log(`Estado: ${elemento._estado()}`);
            console.log(`Promedio: ${elemento._promedio()}`);
        });

    }

    getTotalPromedio(){
        let valorPromedio = []
        this._alumno().forEach(function (elemento, index) {
            valorPromedio.push(elemento._promedio());
        });
        console.log('Promedio del Curso', valorPromedio.reduce( ( valorAnterior, valorActual ) => valorAnterior+valorActual/numeroAlumnos, 0 ))
    }

    getAlumnoNombre( busquedaDeNombre ) {

        this._alumno().forEach(function (elemento, index) {

            if (elemento._nombre() == busquedaDeNombre) {

                console.log(`Numero de Alumno: ${index}`);
                console.log(`Nombre: ${elemento._nombre()}`);
                console.log(`Edad: ${elemento._edad()}`);
                console.log(`RUT: ${elemento._rut()}`);
                console.log(`Estado: ${elemento._estado()}`);
                console.log(`Promedio: ${elemento._promedio()}`);

            }

        });

    }
}
 
class Alumno {

    constructor( nombre, edad, rut, estado, valorPromedio ) {

        this._nombre = function () {
            return nombre;
        };

        this._edad = function () {
            return edad;
        };

        this._rut = function () {
            return rut;
        };

        this._estado = function () {
            return estado;
        };

        this._promedio = function () {
            return valorPromedio;
        };

    }
    getName() {
        return this._nombre();
    }
    getEdad() {
        return this._edad();
    }
    getRut() {
        return this._rut();
    }
    getEstado() {
        return this._estado();
    }

    getValortencion() {
        return this._promedio();
    }

    setName(nuevo_nombre) {
        this._nombre = function () {
            return nuevo_nombre;
        };
    }
    setEdad(nueva_edad) {
        this._edad = function () {
            return nueva_edad;
        };
    }
    setRut(nuevo_rut) {
        this._rut = function () {
            return nuevo_rut;
        };
    }
    setEstado(nuevo_estado) {
        this._estado = function () {
            return nuevo_estado;
        };
    }
}


while( contador < numeroAlumnos ){

      
      let nombre = prompt('Ingrese el nombre del alumno')
      let edad = parseInt(prompt('Ingrese la edad'))
      let rut = prompt('Ingrese el rut')
      let estado = prompt('Ingrese estado')
      let valorPromedio = parseInt(prompt('Ingrese el Promedio'))
      let alumno = new Alumno( nombre, edad, rut, estado,valorPromedio )
      
      listaAlumno.push( alumno )
      
   
      contador++

}

let buscar = prompt('Ingrese el nombre del alumno que desea buscar')

const imprimirCurso = ( curso, alumnos, buscar )=>{
    
    console.log( 'Nombre del curso:', curso.getName() )
    console.log('=================NOMBRE DEL ALUMNO====================')
    
    // console.log( 'Salida de ARRAY OBJETOS PACIENTES',alumnos )
    for(let alumno of alumnos){
        console.log('Salida de alumno', alumno._nombre())
    }
    console.log('=================SALIDA DE ALUMNOS POR CONSULTORIO====================')
    curso.getAlumnos() 
    console.log('=================SALIDA DE ALUMNO BUSCADO POR NOMBRE====================')
    curso.getAlumnoNombre(buscar);
    console.log('=================PROMEDIO DEL CURSO ====================')
    curso.getTotalPromedio();
}

let curso = new Curso( nombreCurso, listaAlumno )

imprimirCurso( curso,listaAlumno, buscar )