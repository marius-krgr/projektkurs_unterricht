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
        <div class="ui input focus">
            <input
                type="text"
                placeholder="String input"
                value={s}
                onChange={handleChangeS}
            />
        </div>

        <font color="white">penis</font>

        <button
            className="ui animated fade teal button"
            tabIndex="0"
            onClick={handleClick}>
                <div class="visible content">Verdopple</div>
                <div class="hidden content">Go!</div>
        </button>

        <div>
            <font size="4"><br/>Doppelte:  {ergebnis}<br/></font>
        </div>
        
    </>)
        
        //Fragen:
        // wie krieg ich den Button aktiviert, sodass ich in der const handleClick etwas ausgeben lassen kann (das Ergebnis)
 
        //React Komponente:
        // 1. Props (Infos an unterkomponente)
        // 2. State (Innerhalb einer componente)
        // 3. userinfo (Infos überall drauf zugreifen) (redux)

}

export default Verdoppeln;