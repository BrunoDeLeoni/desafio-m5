import { initRouter } from "./router";
import { ButtonComponent } from "./components/button-component"

(function () {
    ButtonComponent();
    const root = document.querySelector(".root")
    initRouter(root)
})();