export function initWelcomePage (params){
    
    //VARIABLES
    const div = document.createElement("div")
    const style = document.createElement("style")
    div.className = "welcomePage"

    //DIV
    div.innerHTML = 
    `
    <h1> PIEDRA, PAPEL O TIJERA </h1>
    <button-component class="play">PLAY</button-component>
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
    `

    //CLICK
    const buttonPlay: any = div.querySelector(".play")
    buttonPlay.addEventListener("click", ()=>{
        params.goTo("/instruccion")
    })

    div.appendChild(style)
    return div 
}