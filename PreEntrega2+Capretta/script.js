class Autos{
    constructor(marca, modelo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}

const autos = []

autos.push(new Autos("Renault", "Alaskan", 8100000))
autos.push(new Autos("Renault", "Logan", 3900000))
autos.push(new Autos("Ford", "Ranger", 7300000))
autos.push(new Autos("Ford", "EcoSport", 5000000))
autos.push(new Autos("Fiat", "500 Abarth", 6800000))
autos.push(new Autos("Fiat", "Argo", 4400000))
autos.push(new Autos("Chevrolet", "S10", 8150000))
autos.push(new Autos("Chevrolet", "Onix", 4500000))

let nuevoAuto = 0
while (nuevoAuto < 2) {
    let agregado = new Autos(prompt("Ingresa la marca"), prompt("Ingresa el modelo"), Number(prompt("Ingresa el precio")))
    autos.push(agregado)
    nuevoAuto++
}

function filtrarPorPrecio(precio) {
    return autos.filter(propiedad => propiedad.precio <= Number(precio))
}

console.log(filtrarPorPrecio(5000000))