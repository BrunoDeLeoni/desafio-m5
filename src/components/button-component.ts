export function ButtonComponent(){
    class Button extends HTMLElement{
        constructor(){
            super(),
            this.render()
        }
        render(){
            var shadow = this.attachShadow({mode: "open"})
            const button = document.createElement("button")
            const style = document.createElement("style")
            button.classList.add("root__button")

            button.innerHTML = 
            `
            ${this.textContent}
            `

            style.innerHTML = 
            `
            .root__button{
                min-height: 40px;
                min-width: 120px;
                border: none;
                border-radius: 5px;
                background-color: lightslategray;
                font-size: 25px;
                font-family: 'Poppins', sans-serif;
                color: black;
            }
            `
            
            shadow.appendChild(button)
            shadow.appendChild(style)
        }
    }
    customElements.define("button-component", Button)
}
