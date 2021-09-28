import { useState } from "react";
function Temperaturen() {
    
    
        const [celsius, setS] = useState("");
        const [ergebnis, setErgebnis] = useState("");
        const [farbe, setFarbe] = useState("");

        const [fahrenheit, setFahrenheit] = useState("");
        const [ergebnisFahrenheit, setErgebnisFahrenheit] = useState("");
        const [farbeFahrenheit, setFarbeFahrenheit] = useState("");

    const handleChangeCelsius = (event) => {
        const temp = event.target.value;
        setS(temp);
    }
    const handleChangeFahrenheit = (event) => {
        const temp = event.target.value;
        setFahrenheit(temp);
    }


    const handleClick = () => {
        const z = (celsius * 1.8 + 32);
        if (celsius < 0) {
            setFarbe("blue");
        } else if (celsius < 10 && celsius >= 0) {
            setFarbe("cyan");
        } else if (celsius > 10 && celsius < 25) {
            setFarbe("orange");
        } else if (celsius > 25) {
            setFarbe("red");
        }
        setErgebnis(z);
    }

    const handleClickFahrenheit = () => {
        const z = ((fahrenheit - 32) * 5/9);
        if (z < 0) {
            setFarbeFahrenheit("blue");
        } else if (z < 10 && z >= 0) {
            setFarbeFahrenheit("cyan");
        } else if (z > 10 && z < 25) {
            setFarbeFahrenheit("orange");
        } else if (z > 25) {
            setFarbeFahrenheit("red");
        }
        setErgebnisFahrenheit(z);
    }

    return (<>
        <div></div>
        <span>Eingabe C°: </span>

        <input
            value={celsius}
            onChange={handleChangeCelsius}
        />
        <div
            style = {{backgroundColor: farbe}}>
                Temperatur in F°: {ergebnis}
        </div>
        <button
            className="ui blue basic button"
            onClick={handleClick}>
            Konvertieren
        </button>

        <div></div>
        <span>Eingabe F°: </span>

        <input
            value={fahrenheit}
            onChange={handleChangeFahrenheit}
        />
        <div
            style = {{backgroundColor: farbeFahrenheit}}>
            Temperatur in C°: {ergebnisFahrenheit}
        </div>
        <button
            className="ui blue basic button"
            onClick={handleClickFahrenheit}>
            Konvertieren
        </button>
        </>)
        
        //Fragen:
        // wie krieg ich den Button aktiviert, sodass ich in der const handleClick etwas ausgeben lassen kann (das Ergebnis)
 
        //React Komponente:
        // 1. Props (Infos an unterkomponente)
        // 2. State (Innerhalb einer componente)
        // 3. userinfo (Infos überall drauf zugreifen) (redux)

}

export default Temperaturen;