import { state } from "../state"

const o = {
    rock: require("url:../assets/rock.png"),
    paper: require("url:../assets/paper.png"),
    scissor: require("url:../assets/scissor.png")
}

export function OptionsGame(){
    class Options extends HTMLElement{
        constructor(){
            super(),
            this.render()
        }
        render(){
            var shadow = this.attachShadow({mode: "open"})
            const div = document.createElement("div")
            const style = document.createElement("style")
            div.classList.add("root__options")

            div.innerHTML =
            `
            <img variant="selected" class="rock" src=${o.rock}>
            <img variant="selected" class="paper" src=${o.paper}>
            <img variant="selected" class="scissor" src=${o.scissor}>
            `
            style.innerHTML =
            `
            .root__options{
                display: flex;
                gap: 25px;
            }
            img{
                width: 90px;
                height: 90px;
            }
            .trasnparent{
                opacity: 0.5;
            }
            `

            const rock: any = div.querySelector(".rock")
            const paper: any = div.querySelector(".paper")
            const scissor: any = div.querySelector(".scissor")

            state.setMove("0")
            
            shadow.appendChild(style)
            shadow.appendChild(div)
            }
    }
    customElements.define("options-component", Options)
}