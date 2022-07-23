export function initWelcomePage (params){
    
    //VARIABLES
    const div = document.createElement("div")
    const style = document.createElement("style")
    div.className = "welcomePage"

    //DIV
    div.innerHTML = 
    `
    <h1> PIEDRA, PAPEL O TIJERA </h1>
    <div class="button-welcome">
        <button-component class="play">Jugar</button-component>
        <button-component class="score">Puntaje</button-component>
    </div>
    `

    //STYLE
    style.innerHTML = 
    `
    .welcomePage{
        height: 100vh;
        display: grid;
        justify-items: center;
        align-items: center;
    }
    h1{
        font-size: 75px;
        text-align: center;
    }
    .button-welcome{
        display: grid;
        gap: 20px;
    }
    @media (min-width:769px) {
        .button-welcome{
            display: flex;
            gap: 20px;
        }
    }
    `

    //CLICK
    const buttonPlay: any = div.querySelector(".play")
    buttonPlay.addEventListener("click", ()=>{
        params.goTo("/instruccion")
    })

    const buttonScore: any = div.querySelector(".score")
    buttonScore.addEventListener("click", ()=>{
        params.goTo("/score")
    })

    div.appendChild(style)
    return div 
}