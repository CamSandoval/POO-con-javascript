function presentar(ruta,Ndecursos){
    console.log(`Bienvenido a la ${ruta}, en esta ruta contamos con ${Ndecursos.length} nuevos cursos para ti`)
}

export class LearningPaths{
    constructor({name,courses=[]}){
        this._name=name
        this.courses=courses
    }
    get seeCourses(){
        return this.courses
    }
    get seeNames(){
        return this._name
    }
    set changeNames(NewName){
        this._name=NewName
    }
    set changeCourses(NewCourse){
        this.courses=NewCourse
    }

    introducingPath(){
        presentar(this._name,this.courses)
    }
}

class Courses{
    constructor({name,clases}){
        this._name=name
        this.clases=clases
    }
    get seeNames(){
        return this._name
    }
    set changeNames(NewName){
        this._name=NewName
    }
}
const courseAngular = new Courses({name:'Curso de Angular', clases:[]})
const courseExcell = new Courses({name:'Curso de excell', clases:[]})
const courseGit = new Courses({name:'Curso de git y github', clases:[]})
const courseHTML = new Courses({name:'Curso definitivo de HTML y CSS', clases:[]})
const courseJupyter = new Courses({name:'Curso de jupyter notebooks para ciencia de datos', clases:[]})
const coursePython = new Courses({name:'Curso basico de python', clases:[]})
const courseReact = new Courses({name:'Curso definitivo de React', clases:[]})
const courseScope = new Courses({name:'Curso de scope con javascript', clases:[]})

const dataScience = new LearningPaths({name:'Escuela de data science e inteligencia artificial',courses:[coursePython,courseExcell,courseGit,courseJupyter]})
const webDevelopment = new LearningPaths({name:'Escuela de desarrollo web',courses:[courseAngular,courseGit,courseHTML,courseReact,courseScope]})

console.log(dataScience)
console.log(webDevelopment)

dataScience.introducingPath()//Bienvenido a la Escuela de data science e inteligencia artificial, en esta ruta contamos con 4 nuevos cursos para ti
webDevelopment.introducingPath()//Bienvenido a la Escuela de desarrollo web, en esta ruta contamos con 5 nuevos cursos para ti