import { initWelcomePage } from "./pages/welcome"
import { initInstruccionPage } from "./pages/instruccion"
import { initGamePage } from "./pages/game"
import { initScorePage } from "./pages/score"
import { initResultPage } from "./pages/result"

const routes = [
    {
        path: /\/welcome/,
        component: initWelcomePage
    },
    {
        path: /\/instruccion/,
        component: initInstruccionPage
    },
    {
        path: /\/game/,
        component: initGamePage
    },
    {
        path: /\/result/,
        component: initResultPage
    },
    {
        path: /\/score/,
        component: initScorePage
    }
]

export function initRouter(container: any){
    function goTo(path){
        history.pushState({}, "", path);
        handleRoute(path);
    }

    function handleRoute(route){
        console.log("NewRoute: ", route);
        for (const r of routes) {
            if (r.path.test(route)) {
                const el = r.component({goTo: goTo});
                while (container.firstChild){
                    container.removeChild(container.firstChild)
                }
                container.appendChild(el)
            }
        }
        
    }

    if(location.pathname == "/"){
        goTo("/welcome")
    } else {
        handleRoute(location.pathname)
    }

    window.onpopstate = () => {
        handleRoute(location.pathname)
    }

}