import { state } from "../state"

const r = {
    tie: require("url:../assets/tie.png"),
    winner: require("url:../assets/winner.png"),
    loser: require("url:../assets/loser.png")
}

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
    
    let imgR = ""

    if (resultado == "tie"){
        imgR = r.tie
    } else if (resultado == "win"){
        imgR = r.winner
    } else {
        imgR = r.loser
    }
    
    //DIV
    div.innerHTML = 
    `
    <h1> PUNTAJE </h1>
    <img src=${imgR}>
    <div>
        <h2>My Score: ${myScore}</h2>
        <h2>Pc Score: ${computerScore}</h2>
    </div>
    <div class="button-game">
        <button-component class="back">Jugar</button-component>
        <button-component class="inicio">Inicio</button-component>
        <button-component class="reset">Reset</button-component>
    </div>
    `

    //STYLE
    style.innerHTML = 
    `
    img{
        max-width: 200px;
    }
    .scorePage{
        height: 100vh;
        display: grid;
        justify-items: center;
        align-items: center;
        align-content: space-around;
    }
    h1{
        font-size: 40px;
        text-align: center;
    }
    .button-game{
        display: grid;
        gap: 20px;
    }
    @media (min-width:769px) {
        .button-game{
            display: flex;
            gap: 20px;
        }
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
    const buttonReset: any = div.querySelector(".reset")
    buttonReset.addEventListener("click", ()=>{
        state.cleanData()
        state.getState()
        params.goTo("/welcome")
    })

    div.appendChild(style)
    return div 
}