/*Projeto 03 - Dice Game - Crie um programa onde jogadores joguem um dado e tenham resultados 
aleatórios.
*/

const prompt = require('prompt-sync')();

console.log("<<<< Vamos jogar Dice Game!! >>>>\n");

var lista = [];
var jogador = [];

var listaganhador = [];
var jogadorrodada = [];

var listajogador = [];
var nomejogador = {};

let qtdrodadas = +prompt('Quantas rodadas ? ');
let qtdjogadores = +prompt('Quantos jogadores ? ');
console.log();

// Criar lista c nomes dos jogadores 
for (let i = 0; i < qtdjogadores; i++){
    let nomejogador ={
        nome: prompt('Digite o nome: ')
    }

    listajogador.push(nomejogador);
}

// For para número de rodadas
for (let i = 0; i < qtdrodadas; i++){
    lista = [];  // limpando a lista da rodada
    
    console.log();
    console.log(`<< Rodada ${i + 1} >>`);

    // For para número de jogadores
    for (let j = 0;  j < qtdjogadores; j++){
        let jogador ={
            nome: listajogador[j].nome, 
            dado: (Math.floor(Math.random()*6)+1)  // (Math.floor(Math.random()*6) +1) --> VERIFICAR
        }

        console.log(`${jogador.nome} tirou o número --> ${jogador.dado}`);

        lista.push(jogador);
        
        // Ordenar a lista por rodada
        lista.sort((a,b) => {
            if (b.dado < a.dado){
                return -1;
            }else{
                return true;
            }
        }) 
    } 
    // Ganhador da rodada
    console.log();
    console.log(`Parabéns ${lista[0].nome}, você GANHOU a Rodada ${i + 1}, com o número ${lista[0].dado}!!`);
    
    // Acumulando o ganhador da rodada, p calcular o Grande Campeão
    let jogadorrodada = {
        nome: lista[0].nome, 
        dado: lista[0].dado
    }
    
    listaganhador.push(jogadorrodada);

    // Ordenar a lista
    listaganhador.sort((a,b) => {
        if (b.dado < a.dado){
            return -1;
        }else{
            return true;
        }
    }) 
}

// Grande Campeão

console.log();
console.log(`<<<<< Parabéns ${listaganhador[0].nome}, você é o(a) GRANDE CAMPEÃO(A)!! >>>>>`);


