let statusOfGame = document.querySelector(".status")
let gameRun = true
let xTurn = true
let cells = document.querySelectorAll(".cell")
cells.forEach(cell=>cell.addEventListener('click', playTicTac))

function playTicTac(e){
    const cellIndex = this.getAttribute("id")
    if(e.target.innerText===""&& gameRun){
        if(xTurn){
            e.target.innerText = "X"
            statusOfGame.innerText = "Щас время О"
            options[cellIndex] = "X"
            xTurn = false
        } else {
            e.target.innerText = "O"
            statusOfGame.innerText = "Щас время Х"
            options[cellIndex] = "O"
            xTurn = true
        }
    }   
    checkIfWon()
}

let winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let options = ["","","","","","","","","",]

function checkIfWon(){
    let result = false
    for(let i=0;i<winConditions.length;i++){
        let condition = winConditions[i]
        let cellA = options[condition[0]]
        let cellB = options[condition[1]]
        let cellC = options[condition[2]]

        if(cellA=="" || cellB==="" || cellC===""){
            continue
        }
        if(cellA==cellB && cellB==cellC){
            result=true
            break
        }
    }
    if(result) {
        gameRun=false
        statusOfGame.innerText = "Game Over"
        options = ["","","","","","","","","",]
    } else if(!options.includes("")){
        statusOfGame.innerText = "Draw"
        gameRun=false
        options = ["","","","","","","","","",]
    }
}


document.getElementById("restart").addEventListener('click', restartGame)
function restartGame(){
    cells.forEach(cell=>cell.innerText="")
    xTurn = true
    gameRun = true
    statusOfGame.innerText=""
    
}
