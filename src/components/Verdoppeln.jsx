import { useState } from "react";
function Verdoppeln() {
    

    let [x, setX] = useState();

    const handleChangeX = (event) => {
        const temp = event.target.value;
        setX(temp);
    }


    const handleClick = () => {
        console.log("handleClick");
    }

    return (<>
        <div></div>
        <span>1. Zahl: </span>
        <input value={x} onChange={handleChangeX} />
        <div>Doppelte: {+x * 2}</div>
        <button
            className="ui blue basic button"
            onClick={handleClick}>
            Verdoppeln
        </button>
        </>)
        
        //Fragen:
        // wie krieg ich den Button aktiviert, sodass ich in der const handleClick etwas ausgeben lassen kann (das Ergebnis)
 

}

export default Verdoppeln;