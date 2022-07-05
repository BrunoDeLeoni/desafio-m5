type Gameplay = "0" | "1" | "2";
type Game = {
    computerPlay: Gameplay,
    myPlay: Gameplay,
}

const state = {
    data:{
        currentGame:{
            myPlay: "",
            computerPlay: "",
        },
        history:[
            {

            }
        ]
    },
    setMove(move: Gameplay){
        const currentState = this.getState();
        currentState.currentGame.myPlay;
    },
    getState(){

    },
    setState(){

    },
    init(){

    },
    suscribe(){

    },
    changeItemState(){

    },
    pushToHistory(play: Game){
        const currentState = this.getState();
        currentState.history({play})
    },
    whoWins(myPlay: Gameplay, computerPlay: Gameplay){
        const empate = myPlay == computerPlay
        const winWhit0 = myPlay == "0" && computerPlay == "2"
        const winWhit1 = myPlay == "1" && computerPlay == "0"
        const winWhit2 = myPlay == "2" && computerPlay == "1"
        // const lostWhit0 = myPlay == "0" && computerPlay == "1"
        // const lostWhit1 = myPlay == "1" && computerPlay == "2"
        // const lostWhit2 = myPlay == "2" && computerPlay == "0"
        // const win = [winWhit0, winWhit1, winWhit2].includes(true)
        // const lost = [lostWhit0, lostWhit1, lostWhit2].includes(true)
        if ([empate].includes(true)){
            return console.log("empate");
        } else if ([winWhit0, winWhit1, winWhit2].includes(true)){
            return console.log("win");
        } else {
            return console.log("lost");
        }
    }
}

// state.setMove()
state.pushToHistory({
    computerPlay: "0",
    myPlay: "2",
})