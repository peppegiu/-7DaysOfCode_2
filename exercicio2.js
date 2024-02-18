let nome = prompt("Qual seu nome?")
let idade = prompt("Quantos anos você tem?")
let linguagem = prompt("qual linguagem de programação você está estudando?");

window.alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)

let pergunta = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)

if (pergunta == 1) {
    window.alert("Muito bom! Contine estudando e você tera muito sucesso.")
}

if (pergunta == 2) {
    window.alert("Ahh que pena... Já tentou aprender outras linguagens?")
}

