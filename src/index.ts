import { initRouter } from "./router";
import { ButtonComponent } from "./components/button-component"
import { OptionsGame } from "./components/options-component"
import { state } from "./state"

(function () {
    state.initState();
    const root = document.querySelector(".root")
    initRouter(root);
    ButtonComponent();
    OptionsGame();
})();