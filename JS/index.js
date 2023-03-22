let dados = document.querySelectorAll('input[type="text"], Select')

let botao = document.querySelector('button')

let select = document.querySelector('Select')

let arrayCarros = []

botao.addEventListener('click', event => {
    let marca = window.localStorage.getItem("Marca")
    let modelo = window.localStorage.getItem("Modelo")
    let ano = window.localStorage.getItem("Ano")
    let valor = window.localStorage.getItem("Valor")
    let cor = window.localStorage.getItem("Cor")
    let automatico = window.localStorage.getItem("Automatico")

    let Carro = new carro(marca, modelo, ano, valor, cor, automatico)
    window.localStorage.setItem('novoCarro', Carro)
    console.log(Carro)
    arrayCarros.push(Carro)
})

for (let index = 0; index < dados.length; index++) {
    dados[index].addEventListener('change', handleChange)
    function handleChange(e) {
        let chave
        if (index == 0) {
            chave = "Marca"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 1) {
            chave = "Modelo"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 2) {
            chave = "Ano"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 3) {
            chave = "Valor"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 4) {
            chave = "Cor"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 5) {
            chave = "Automatico"
            window.localStorage.setItem(chave, e.target.value);
        }
    }
}

class carro {
    Marca
    Modelo
    Ano
    Valor
    Cor
    Automatico

    constructor(marca, modelo, ano, valor, cor, automatico) {
        this.Marca = marca
        this.Modelo = modelo
        this.Ano = ano
        this.Valor = valor
        this.Cor = cor
        this.Automatico = automatico
    }
}

function CarrosPorMarca(arrayObejetos, marca) {
    let arrayMesmaMarca = []
    for (let index = 0; index < arrayObejetos.length; index++) {
        if (arrayObejetos[index].Marca == marca) {

            arrayMesmaMarca.push(arrayObejetos[index])
        }
    }
    return arrayMesmaMarca
}

function MarcasDisponiveis(arrayObejetos) {
    let ArrayMarcas = []
    for (let index = 0; index < arrayObejetos.length; index++) {
        for (let index2 = 0; index2 < arrayObejetos.length; index2++) {
            if (ArrayMarcas.length != 0) {
                if (arrayObejetos[index].Marca != ArrayMarcas[index2] && ArrayMarcas[index2] != null) {
                    ArrayMarcas.push(arrayObejetos[index].Marca)
                    index2 = arrayObejetos.length
                }

            } else {
                ArrayMarcas.push(arrayObejetos[index].Marca)
                index2 = arrayObejetos.length
            }
        }
    }
    return ArrayMarcas
}

function PropriedadesDesejadas(arrayObejetos, arrayString) {
    let arrayCarros2 = []
    let carroCaracteristica = new carro()
    for (let index = 0; index < arrayObejetos.length; index++) {
        for (let index2 = 0; index2 < arrayString.length; index2++) {

            switch (arrayString[index2]) {
                case "Marca":
                    carroCaracteristica.Marca = arrayObejetos[index].Marca
                    break;
                case "Modelo":
                    carroCaracteristica.Modelo = arrayObejetos[index].Modelo
                    break;
                case "Ano":
                    carroCaracteristica.Ano = arrayObejetos[index].Ano
                    break;
                case "Valor":
                    carroCaracteristica.Valor = arrayObejetos[index].Valor
                    break;
                case "Cor":
                    carroCaracteristica.Cor = arrayObejetos[index].Cor
                    break;
                case "Atomatico":
                    carroCaracteristica.Automatico = arrayObejetos[index].Automatico
                    break;
            }
            if (index2 == arrayString.length - 1) {
                arrayCarros2.push(carroCaracteristica)
            }
        }
    }
    return arrayCarros2
}



