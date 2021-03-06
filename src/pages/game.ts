import { state } from "../state";

export function initGamePage (params){
    
    //VARIABLES
    const div = document.createElement("div")
    const style = document.createElement("style")
    div.className = "gamePage"

    // CONTADOR
    let counter = 1
    const intervalId = setInterval(()=>{
        counter--
        const counterEl: any = div.querySelector(".counter");
        counterEl.textContent = String(counter);
        if (counter < 0){
            clearInterval(intervalId);
            params.goTo("/result")
        }
    },1000)
    
    //DIV
    div.innerHTML = 
    `
    <h1> GAME </h1>
    <div class="counter">${counter}</div>
    <options-component></options-component>
    `

    //STYLE
    style.innerHTML = 
    `
    .gamePage{
        height: 100vh;
        display: grid;
        justify-items: center;
        align-items: center;
    }
    h1{
        font-size: 40px;
        text-align: center;
    }
    .counter{
        font-size: 300px;
        text-align: center;
    }
    `

    state.pushToHistory()

    div.appendChild(style)
    return div 
}

