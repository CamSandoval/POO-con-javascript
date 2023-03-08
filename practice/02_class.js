//Las clases son otra forma de crear protitipos o instancias para poder hacer objetos a partir de este
class student{
    constructor(name,age,cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
}
//student.prototype.aprobarCurso= function(nuevoCurso){
    //this.cursosAprobados.push(nuevoCurso)
//}

const juan = new student('juan',22,['git'])
console.log(juan);//student { name: 'juan', age: 22, cursosAprobados: [ 'git' ] }
juan.aprobarCurso('python')
console.log(juan);//student { name: 'juan', age: 22, cursosAprobados: [ 'git', 'python' ] }