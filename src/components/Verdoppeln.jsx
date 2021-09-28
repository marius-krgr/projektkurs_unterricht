import { useState } from "react";
function Verdoppeln() {
    
    
        const [s, setS] = useState("");
        const [ergebnis, setErgebnis] = useState("");
    

    const handleChangeS = (event) => {
        const temp = event.target.value;
        setS(temp);
    }


    const handleClick = () => {
        setErgebnis(s+s);
    }

    return (<>
        <div></div>
        <span>1. String: </span>
        <input value={s} onChange={handleChangeS} />
        <div>Doppelte: {ergebnis}</div>
        <button
            className="ui blue basic button"
            onClick={handleClick}>
            Verdoppeln
        </button>
        </>)
        
        //Fragen:
        // wie krieg ich den Button aktiviert, sodass ich in der const handleClick etwas ausgeben lassen kann (das Ergebnis)
 
        //React Komponente:
        // 1. Props (Infos an unterkomponente)
        // 2. State (Innerhalb einer componente)
        // 3. userinfo (Infos überall drauf zugreifen) (redux)

}

export default Verdoppeln;