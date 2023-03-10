import LearningPaths from './Principal.mjs';

//HERENCIA
//Esta es una caracteristica de la POO que permite a los objetos heredar los atributos o valores de otro.
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
    constructor(props,age){
        super(props);
        this.edad=age
    }
}

class BasicStudent extends Student{
    
}

class ExpertStudent extends Student{
    
}


const Juan2 = new FreeStudent({
    name: 'juan',
    email: 'juan@platzi.com',
    twitter: 'juaan2x',
    learningPaths:escuelaWeb
},25)
const miguel = new Student({name:'Miguel',username:'Miguelito123',email:'mgue@gmail.com',learningPaths:[escuelaData, escuelaVideoGames]})

console.log(Juan2);

export default Student