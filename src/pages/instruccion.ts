export function initInstruccionPage (params){
    
    //VARIABLES
    const div = document.createElement("div")
    const style = document.createElement("style")
    div.className = "instruccionPage"

    //DIV
    div.innerHTML = 
    `
    <h1> Presiona Jugar y elegí tu jugada entre Piedra, Papel o Tijera dentro del tiempo! </h1>
    <div class="button-game">
        <button-component class="start">Jugar</button-component>
        <button-component class="inicio">Inicio</button-component>
    </div>
    `

    //STYLE
    style.innerHTML = 
    `
    .instruccionPage{
        height: 100vh;
        display: grid;
        justify-items: center;
        align-items: center;
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
    const buttonStart: any = div.querySelector(".start")
    buttonStart.addEventListener("click", ()=>{
        params.goTo("/game")
    })
    const buttonInicio: any = div.querySelector(".inicio")
    buttonInicio.addEventListener("click", ()=>{
        params.goTo("/welcome")
    })
    
    div.appendChild(style)
    return div 
}