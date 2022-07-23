import { state } from "../state";

const r = {
    rock: require("url:../assets/rock.png"),
    paper: require("url:../assets/paper.png"),
    scissor: require("url:../assets/scissor.png")
}

export function initResultPage (params){
    
    //VARIABLES
    const div = document.createElement("div")
    const style = document.createElement("style")
    div.className = "resultPage"

    const currentState = state.getState()
    const myPlay = currentState.currentGame.myPlay;
    const computerPlay = currentState.currentGame.computerPlay;
    
    let imgY = ""
    let imgX = ""
    
    if (computerPlay == 0){
        imgY = r.rock
    } else if (computerPlay == 1){
        imgY = r.paper
    } else {
        imgY = r.scissor
    }

    if (myPlay == 0){
        imgX = r.rock
    } else if (myPlay == 1){
        imgX = r.paper
    } else {
        imgX = r.scissor
    }

    //DIV
    div.innerHTML = 
    `
    <h1> RESULTADO </h1>
    <img src=${imgY}>
    <img src=${imgX}>
    `

    //STYLE
    style.innerHTML = 
    `
    .resultPage{
        height: 100vh;
        display: grid;
        justify-items: center;
        align-items: center;
    }
    h1{
        font-size: 40px;
        text-align: center;
    }
    `
    // CONTADOR
    let counter = 0
    const intervalId = setInterval(()=>{
        counter++        
        if (counter > 0){
            clearInterval(intervalId);
            params.goTo("/score")
        }
    },1000)

    div.appendChild(style)
    return div 
}