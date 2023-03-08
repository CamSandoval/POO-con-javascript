class Courses{
    constructor({name,classes=[]}){
        this.name=name;
        this.classes=classes
    }
}
const courseHTML = new Courses({name:'Curso Definitivo de HTML Y CSS'})
const courseScope =new Courses({name: 'Curso de closure y scope con javascript'})
const courseReact =new Courses({name: 'Curso practico de React'})
const courseAngular =new Courses({name: 'Curso de introduccion a Angular'})
const courseGit = new Courses({name:'Curso de git y github'})
const coursePython = new Courses({name:'Curso de introduccion a Python'})
const courseJupyter = new Courses({name:'Curso de entorno de trabajo con Jupyter Notebooks'})
const courseExcell = new Courses({name:'Curso de Excel financiero'})
const courseMicroC = new Courses({name:'Curso basico de C#'})
const courseUnity = new Courses({name:'Curso de motores de desarrollo con unity'})
const courseDesin = new Courses({name:'Curso de diseño de personajes para videojuegos'})

 //RETO:
class LearningPaths{
    constructor({
        name,
        courses =[]
    }){
        this.name=name;
        this.courses=courses;
    }
}

const escuelaWeb = new LearningPaths({name:'Escuela de desarrollo Web',courses:[courseAngular,courseHTML,courseReact,courseScope,courseGit]})
const escuelaData = new LearningPaths({name:'Escuela de Data Science',courses:[courseGit,coursePython,courseJupyter,courseExcell]})
const escuelaVideoGames = new LearningPaths({name:'Escuela de Videojuegos',courses:[courseGit,courseDesin,courseMicroC,courseUnity]})
class Student{
    constructor({
        name,
        email,
        username,
        twitter=undefined,
        instagram=undefined,
        facebook=undefined,
        aprovedCourses =[],
        learningPaths=[]
    }){
        this.name=name
        this.email=email
        this.username=username
        this.socialMedia={
            twitter,
            instagram,
            facebook
        }
        this.aprovedCourses =aprovedCourses
        this.learningPaths=learningPaths
    }
}

const Juan2 = new Student({
    name: 'juan',
    email: 'juan@platzi.com',
    twitter: 'juaan2x',
    learningPaths:escuelaWeb
})
console.log(Juan2);//Student {
    //name: 'juan',
    //email: 'juan@platzi.com',
    //username: undefined,
    //socialMedia: { twitter: 'juaan2x', instagram: undefined, facebook: undefined },
    //aprovedCourses: [],
    //learningPaths: LearningPaths {
      //name: 'Escuela de desarrollo Web',
      //courses: [ 'html', 'css', 'scope', 'React', 'angular' ]
    //}
  //}

const miguel = new Student({name:'Miguel',username:'Miguelito123',email:'mgue@gmail.com',learningPaths:[escuelaData, escuelaVideoGames]})
console.log(miguel);
