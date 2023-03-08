// en js existen dos tipos de objetos
    // objetos literales
    let car ={
        model:2020,
        reference: 'Camaro',
        brand: 'Chevrolet'
    }

    //Instancias de una clase
    class cars {
    constructor(model, reference,brand) {
        this.model = model;
        this.reference = reference;
        this.brand = brand;
    }
}
    let car2 = new cars(2021,'tesla','x')
    console.log(car2)//cars { model: 2021, reference: 'tesla', brand: 'x' }