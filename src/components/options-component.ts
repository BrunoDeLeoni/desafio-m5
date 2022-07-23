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
            <img variant="init" class="rock" src=${o.rock}>
            <img variant="init" class="paper" src=${o.paper}>
            <img variant="init" class="scissor" src=${o.scissor}>
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
            .transparent{
                opacity: 0.5;
            }
            `

            const rock: any = div.querySelector(".rock")
            const paper: any = div.querySelector(".paper")
            const scissor: any = div.querySelector(".scissor")

            console.log("init-click");
            
            if (this.getAttribute("variant") == "selected"){
                rock.addEventListener("click", () => {
                    paper.classList.add("transparent")
                    scissor.classList.add("transparent")
                    state.setMove("0")
                })
            }
            if (this.getAttribute("variant") == "selected"){
                console.log("pre-click");
                paper.addEventListener("click", () => {
                    console.log("post-click");
                    rock.classList.add("transparent")
                    scissor.classList.add("transparent")
                    state.setMove("1")
                })
            }
            if (this.getAttribute("variant") == "selected"){
                scissor.addEventListener("click", () => {
                    rock.classList.add("transparent")
                    paper.classList.add("transparent")
                    state.setMove("2")
                })
            }

            console.log("finish-click");
            
            shadow.appendChild(style)
            shadow.appendChild(div)
        }
    }
    customElements.define("options-component", Options)
}