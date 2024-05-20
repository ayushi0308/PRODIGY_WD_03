let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-contain");
let msg = document.querySelector("#msg");


let turn0 = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]



const resetGame =()=>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;


}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("clicked");
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;

        }
        box.disabled = true;

        checkWinner();

        count++;

        let iswinner = checkWinner();
        if(count == 9 && !iswinner){
            Draw();
        }
    })
})

const Draw=()=>{
    msg.innerText = "Its a Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const showWinner = (winner)=>{
    msg.innerText = `Congratulations, ${winner} has won the game!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val === pos2Val && pos2Val=== pos3Val){
                console.log("winner");
                showWinner(pos1Val);
                return true;
            }
        }


    }

}

newbtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);


