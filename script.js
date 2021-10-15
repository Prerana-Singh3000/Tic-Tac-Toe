console.log("Welcome to Tic Tac Toe");
let music = new Audio("music/audio1.mp3");
let turnChange = new Audio("music/tick.wav");
let gameover = new Audio("music/win.wav");
let turn = "X";
let win = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}

// Function to check win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2, 3, 5, 0, 25],
        [3, 4, 5, 3, 15, 0, 25],
        [6, 7, 8, 3, 25, 0, 25],
        [0, 3, 6, -7.5, 14.5, 90, 25],
        [1, 4, 7, 2.5, 14.5, 90, 25],
        [2, 5, 8, 12.5, 14.5, 90, 25],
        [0, 4, 8, -1, 15, 45, 32],
        [2, 4, 6, -1, 15, 135, 32]
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) 
        && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) 
        && boxtexts[e[0]].innerText !== ''){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " has Won !! Press ->";
            win = true;
            document.getElementById("displayimg").src="img/yay.gif";
            music.pause();
            gameover.play();
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = `${e[6]}vw`;
        }
    })
}



// Game Logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnChange.play();
            checkWin();
            if(!win){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add event listner to reset button
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxText');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    turn = 'X';
    win = false;
    document.querySelector(".line").style.width = 0;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.getElementById("displayimg").src="img/go.gif";
    music.play();
})

