import { initRouter } from "./router";
import { ButtonComponent } from "./components/button-component"
import { OptionsGame } from "./components/options-component"

(function () {
    ButtonComponent();
    OptionsGame();
    const root = document.querySelector(".root")
    initRouter(root)

})();