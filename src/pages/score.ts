import { state } from "../state"

export function initScorePage (params){
    
    //VARIABLES
    const div = document.createElement("div")
    const style = document.createElement("style")
    div.className = "scorePage"

    const currentState = state.getState()
    const myScore = currentState.history[0].myScore;
    const computerScore = currentState.history[0].computerScore;
    const myPlay = currentState.currentGame.myPlay;
    const computerPlay = currentState.currentGame.computerPlay;
    const resultado = state.whoWins(myPlay, computerPlay)
    
    
    //DIV
    div.innerHTML = 
    `
    <h1> PUNTAJE </h1>
    <div>${resultado}</div>
    <div>
        <h2>MyScore: ${myScore}</h2>
        <h2>PcScore: ${computerScore}</h2>
    </div>
    <div>
        <button-component class="back">Jugar</button-component>
        <button-component class="inicio">Inicio</button-component>
    </div>
    `

    //STYLE
    style.innerHTML = 
    `
    .scorePage{
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
    //CLICK
    const buttonReturn: any = div.querySelector(".back")
    buttonReturn.addEventListener("click", ()=>{
        params.goTo("/instruccion")
    })
    const buttonInicio: any = div.querySelector(".inicio")
    buttonInicio.addEventListener("click", ()=>{
        params.goTo("/welcome")
    })

    div.appendChild(style)
    return div 
}