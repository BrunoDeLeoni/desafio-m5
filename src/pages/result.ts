import { state } from "../state";

export function initResultPage (params){
    
    //VARIABLES
    const div = document.createElement("div")
    const style = document.createElement("style")
    div.className = "resultPage"

    const currentState = state.getState()
    const myPlay = currentState.currentGame.myPlay;
    const computerPlay = currentState.currentGame.computerPlay;
    
    //DIV
    div.innerHTML = 
    `
    <h1> RESULTADO </h1>
    <div>${computerPlay}</div>
    <div>${myPlay}</div>
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
        if (counter > 2){
            clearInterval(intervalId);
            params.goTo("/score")
        }
    },1000)

    div.appendChild(style)
    return div 
}