function reproducirVideo(id){
    const ScretURL='http://platzi/videoarchisecreto/'+id
    console.log('Se esta reprodiciendo desde la url '+ ScretURL)
}
function pausarVideo(id){
    const ScretURL='http://platzi/videoarchisecreto/'+id
    console.log('Pausado desde la url '+ ScretURL)
}

/*export */class PlatziClases{
    constructor({name,videoID}){
        this.name = name
        this.videoID=videoID
    }
    reproducir(){
        reproducirVideo(this.videoID)
    }
    pausar(){
        pausarVideo(this.videoID)
    }
}
class Courses{
    constructor({name,classes=[],isFree = false, isInEnglish=false}){
        //La utilización de '_' en la nomenclatura de un nombre es una forma de decir que este atributo no debera ser cambiado de manera manual:
        //Ejemplo: courseHTML._name, sino que mediante los metodos set que se usaran mas adelante(BUENA PRACTICA)
        this._name=name;
        this.classes=classes
        this.isFree=isFree
        this.isInEnglish=isInEnglish
    }
    //getters VISUALIZACIÓN
    //Esta es una forma de VISUALIZACIÓN de los atributos de un objeto de manera compuesta que nos permite poer acceder a dichos atributos de manera mas segura
    get nameComplete(){
        return `${this._name} 2`
    }
    //Setters MODIFICACION
    //Estos son metodos que permiten MODIFICAR un atributo del objeto de una manera más segura siguiendo asi las los propositos del encapsulamiento
    set changeName(newName){
        this._name=newName;
    }
}
const courseHTML = new Courses({name:'Curso Definitivo de HTML Y CSS', isInEnglish:true})
//De esta manera podemos llamar al metodo nameComplete de una manera mas segura
console.log(courseHTML.nameComplete)//Curso Definitivo de HTML Y CSS 2
//Ahora si yo quisiera modificar el elemento nombre de mi objeto no lo reasignaria con sua tributo, sino que usaria la siguiente sintaxis:
courseHTML.changeName='Curso de Creacion de Paginas web'
console.log(courseHTML._name)//Curso de Creacion de Paginas web
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
const courseProgram = new Courses({name:'Curso de Programacion Gratis', isFree:true})

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

const escuelaWeb = new LearningPaths({name:'Escuela de desarrollo Web',courses:[courseAngular,courseHTML,courseReact,courseProgram,courseScope,courseGit]})
const escuelaData = new LearningPaths({name:'Escuela de Data Science',courses:[courseGit,courseProgram,coursePython,courseJupyter,courseExcell]})
const escuelaVideoGames = new LearningPaths({name:'Escuela de Videojuegos',courses:[courseGit,courseDesin,courseMicroC,courseUnity,courseProgram]})
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

class FreeStudent extends Student{
    constructor(props){
        super(props)
    }
    aproveCourse(NewCourse){
        if (NewCourse.isFree){
            this.aprovedCourses.push(NewCourse)
        } else {
            console.error(`Lo sentimos ${this.name} solo puedes tomar cursos abiertos`)
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props)
    }

    aproveCourse(NewCourse){
        if (NewCourse.isInEnglish){
            console.error(`Lo sentimos ${this.name} solo puedes tomar cursos en español`)
        } else {
            this.aprovedCourses.push(NewCourse)
        }
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props)
    }
    aproveCourse(NewCourse){
        this.aprovedCourses.push(NewCourse)
    }
}
const juan = new BasicStudent({
    name: 'juan',
    email: 'juan@platzi.com',
    twitter: 'juaan2x',
    learningPaths:escuelaWeb
})
console.log(juan);//Student {
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
const miguel = new FreeStudent({name:'Miguel',username:'Miguelito123',email:'mgue@gmail.com',learningPaths:[escuelaData, escuelaVideoGames]})
console.log(miguel);


//EJERCICIO CALLBACK
function sumar(a,b){
    console.log(a+b)
}
const func=(num1,num2,callback)=>{
    return callback(num1,num2)
}

func(5,6,sumar)
