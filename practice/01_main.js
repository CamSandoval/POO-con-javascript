//Ejemplo de objero literal
const natalia = {
    name: 'Natalia',
    age: 20,
    cursosAprobados:['html','css'],
    //Creacion de metodos
        //Los metodos con una forma de reutilizar codigo y ahorrar tiempo a la hora de modificar un objeto
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
}

//Modificaciones a las propiedades
natalia.cursosAprobados.push('Introducción a javascript')
natalia.age +=20
natalia.name= 'Nath'

//Usando el metodo aprobarCurso podemos pasar de natalia.cursosAprobados.push('Introducción a javascript') a:
natalia.aprobarCurso('Css grid')
console.log(natalia);//{name: 'Nath',age: 40,cursosAprobados: [ 'html', 'css', 'Introducción a javascript', 'Css grid' ],aprobarCurso: [Function: aprobarCurso]}

//Funcion constructora
function student(name,age,cursosAprobados){
    this.name = name,
    this.age = age,
    this.cursosAprobados = cursosAprobados
    //Desde las clases o funciones constructoras existen dos formas de crear metodos
    //this.aprobarCurso = function(nuevoCurso){
        //this.cursosAprobados.push(nuevoCurso)
    //}
}
//Otra opcion de creacion de metodos
    //CON ESTA FORMA DE CREAR METODOS LOGRAMOS QUE LA SINTAXIS SEA MAS LIMPIA YA QUE ESTE NO APARECERIA DENTRO DE NUESTRO OBJETO DE MANERA LITERAL
student.prototype.aprobarCurso= function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso)
}
const juan = new student('juan',22,['git'])
juan.aprobarCurso('python')
console.log(juan);//student { name: 'juan', age: 22, cursosAprobados: [ 'git', 'python' ] }
