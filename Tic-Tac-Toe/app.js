const boxes=document.querySelectorAll(".box");
const statusTxt=document.querySelector("#status");
const btnRestart=document.querySelector("#restart");

let x= "<img src='./images/X.png'>";
let o= "<img src='./Images/O.png'>";
console.log(o);
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let options=["","","","","","","","",""];
//let currentPlayer="X";
let player="X";

let  running=false;
init();
function init(){
boxes.forEach(box=>box.addEventListener("click", boxClick ));
running=true;
btnRestart.addEventListener("click", restartGame);
statusTxt.textContent=`${player} Your turn`;
console.log(statusTxt.textContent);

}
function boxClick(){
const index=this.dataset.index;
if(options[index]!=""|| !running){
    return;
}
updateBox(this,index);
checkWinner();
}
function updateBox(box,index){
    console.log(index);
    console.log(box);
    options[index]=player;
    console.log(options[index]);
    box.textContent=player;
    console.log(box.innerHtml);
}
function changePlayer(){
    player=(player=="X")? "O" : "X";
    //currentPlayer=(currentPlayer=="X")? "O" : "X";
    statusTxt.textContent=`${player} Your turn`
}
function checkWinner(){
    let isWon=false;
    for(let i=0;i<win.length;i++){
        const condition=win[i];//win[0]=[0,1,2]  win[1]=[3,4,5]
        const box1=options[condition[0]];//x
        const box2=options[condition[1]];
        const box3=options[condition[2]];
        if(box1=="" || box2=="" || box3==""){
            continue;
        }
        if (box1==box2 && box2==box3){
            isWon=true;
        }
    }
    if(isWon){
        statusTxt.textContent=`${player} won...`;
        running=false;
    }else if(!options.includes("")){
    statusTxt.textContent=`Game Draw!`;
    running=false;
    }else{
        changePlayer();
    }
}
function restartGame(){
    options = ["", "", "", "", "", "", "", "", ""];
    //currentPlayer = "X";
    player = "X";
    running=true;
    statusTxt.textContent=`${player} Your turn`;
    boxes.forEach(box=>{
        box.textContent="";
    });

}