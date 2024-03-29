function mostra(frase) {
    document.write(frase)
    pulaLinha()
}

pulaLinha = () => {
    document.write('<br>')
}

sorteia = n => {
    let numSorteado = Math.round(Math.random() * n)
    return numSorteado
}

let chances = 0
let numeroPensado = parseInt(
    prompt('Digite até que número a partir de 0 você quer que eu pense:')
)
let numSort = sorteia(numeroPensado)
console.log(numSort)
while (chances < 5) {
    let chute = parseInt(
        prompt(
            'Já pensei! Que número de 0 a ' + numeroPensado + ' você acha que é?'
        )
    )
    if (chute === numSort) {
        mostra(
            'Parabéns! Você acertou, pois o número que pensei foi ' + numSort + '.'
        )
        chances = 5
    } else {
        alert('Você errou! Você ainda tem ' + (4 - chances) + ' chances.')
    }
    chances++
    if (chances == 5) {
        mostra(
            'Você errou todas as vezes! Eu pensei no número ' +
            numSort +
            '. Mais sorte da próxima vez... :)'
        )
    }
}