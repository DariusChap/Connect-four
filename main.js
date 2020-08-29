let tableRow = document.getElementsByTagName('tr')
let tableCell = document.getElementsByTagName('td')
let tableSlot = document.querySelector('.slot')
const playerTurn = document.querySelector('.player-turn')
const reset = document.querySelector('.reset-game')

for(let i = 0; i < tableCell.length; i++) {
    tableCell[i].addEventListener('click', function (event) {
        console.log('${e.target.parentElement.rowIndex}, ${e.target.cellIndex}')
    })
}

