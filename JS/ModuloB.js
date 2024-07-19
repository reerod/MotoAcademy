// const {nome, idade, soma, areaCirculo, PI} = require('./ModuloA')
// console.log(nome)
// console.log(idade)

// console.log(soma(2, 2))

// console.log(areaCirculo(2));
// console.log(PI);

// const objeto = {
//     name: "Euclides"
// }

// let {name} = objeto

// name = "felipe"
// console.log(objeto)
// console.log("Meu nome eh: "+nome)

const ModuloA = require("./ModuloA")


// console.log(ModuloA)
// console.log(ModuloA.nome)
// console.log(ModuloA.idade)
// console.log(ModuloA.cidade)

ModuloA.map((item) => {
    console.log(item.time)
})

