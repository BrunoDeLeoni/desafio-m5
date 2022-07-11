type Gameplay = "0" | "1" | "2";

// STATE
const state = {
    data:{
        currentGame:{
            myPlay: "",
            computerPlay: "",
        },
        history:[
            {
                myScore: 0,
                computerScore: 0,
            }
        ]
    },
    setMove(move: Gameplay){
        const currentState = this.getState();
        currentState.currentGame.myPlay = move;
        const computerMove = () => {
            const x = ["0", "1", "2"]
            return x[Math.floor(Math.random() * 3)]
        }
        currentState.currentGame.computerPlay = computerMove();        
        this.pushToHistory();
    },
    getState(){
        return this.data;
    },
    setState(newState){
        this.data = newState;
    },
    initState(){
        const localData = localStorage.getItem("saved-state")
        if (localData !== null){
            this.setState(JSON.parse(localData))
        }
    },
    pushToHistory(){
        console.log("x");
        
        const resultado = this.whoWins();
        const currentState = this.getState();
        const myScore = currentState.history.myScore;
        const computerScore = currentState.history.computerScore;
    
        if (resultado == "tie") {
            this.setState({
                ...currentState,
                history: {
                    myScore: myScore,
                    computerScore: computerScore
                }           
            })
        } else if (resultado == "win") {
            this.setState({
                ...currentState,
                history: {
                    myScore: myScore + 1,
                    computerScore: computerScore
                }
            })
        } else if (resultado == "lost") {
            this.setState({
                ...currentState,
                history: {
                    myScore: myScore,
                    computerScore: computerScore + 1
                }
            })
        }        
    },
    whoWins(myPlay: Gameplay, computerPlay: Gameplay){
        const empate = myPlay == computerPlay
        const winWhit0 = myPlay == "0" && computerPlay == "2"
        const winWhit1 = myPlay == "1" && computerPlay == "0"
        const winWhit2 = myPlay == "2" && computerPlay == "1"

        if ([empate].includes(true)){
            return "tie";
        } else if ([winWhit0, winWhit1, winWhit2].includes(true)){
            return "win";
        } else {
            return "lost";
        }
    },
    cleanData() {
        localStorage.setItem("data", JSON.stringify({
            myScore: 0,
            computerScore: 0,
        })
    )}
}

// EXPORT
export { state };