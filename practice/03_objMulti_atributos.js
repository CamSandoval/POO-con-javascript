//La sintaxis que hemos visto anteriormente es muy util, pero en casos en el que el objeto tiene muchas propiedades, se puede hacer tediosos tener que aprenderse obligatoriamente el orden dentro del cual se enviaron los parametros o tener que definir un parametro como undefined cuando este no fue proporcionado

//En ese caso se agrega un objeto como parametro del constructor y ahi se definen los parametros
//EJEMPLO
class student{
    constructor({
        name,age,cursosAprobados=[],email,facebook,twetter
    }){
        this.name = name
        this.cursosAprobados = cursosAprobados
        this.age = age
        this.facebook = facebook
        this.email = email
        this.twetter = twetter
    }
}

const sara = new student({name:'sara',email:'sara@hotmail.com',facebook:'Sara Ortiz',age:36,})
console.log(sara);//student {name: 'sara',cursosAprobados: [],age: 36,facebook: 'Sara Ortiz',email: 'sara@hotmail.com',twetter: undefined}
//Como podemos ver esto nos permite mandar parametros por defecto junto con la posivilidad de no mandar datos o mandarlos en desorden sin tener ningun error