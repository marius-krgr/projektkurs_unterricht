import { useState } from "react";
function Temperaturen() {
    
    
        const [celsius, setS] = useState("");
        const [ergebnis, setErgebnis] = useState("");
        const [farbe, setFarbe] = useState("");
        const [icon, setIcon] = useState("");

        const [fahrenheit, setFahrenheit] = useState("");
        const [ergebnisFahrenheit, setErgebnisFahrenheit] = useState("");
        const [farbeFahrenheit, setFarbeFahrenheit] = useState("");
        const [iconFahrenheit, setIconFahrenheit] = useState("");

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
            setIcon("snowflake icon");
        } else if (celsius <= 15 && celsius >= 0) {
            setFarbe("cyan");
            setIcon("cloud icon");
        } else if (celsius >= 15 && celsius < 25) {
            setFarbe("orange");
            setIcon("sun icon");
        } else if (celsius >= 25) {
            setFarbe("red");
            setIcon("fire icon");
        }
        setErgebnis(z);
    }

    const handleClickFahrenheit = () => {
        const z = ((fahrenheit - 32) * 5/9);
        if (z < 0) {
            setFarbeFahrenheit("blue");
            setIconFahrenheit("snowflake icon");
        } else if (z <= 15 && z >= 0) {
            setFarbeFahrenheit("cyan");
            setIconFahrenheit("cloud icon");
        } else if (z >= 15 && z < 25) {
            setFarbeFahrenheit("orange");
            setIconFahrenheit("sun icon");
        } else if (z >= 25) {
            setFarbeFahrenheit("red");
            setIconFahrenheit("fire icon");
        }
        setErgebnisFahrenheit(z);
    }

    return (<>
        {/* <span>Eingabe C°: </span> */}

        <div class="ui right labeled input">
            <input
                type="text"
                placeholder="Eingabe"
                value={celsius}
                onChange={handleChangeCelsius}
            />
            <div class="ui basic label">
                C°
            </div>
        </div>

        <font color="white">penis</font>

        <button
            className="ui animated fade teal button"
            tabIndex="0"
            onClick={handleClick}>
                <div class="visible content">Konvertieren</div>
                <div class="hidden content">Go!</div>
        </button>

        {/* <div
            style = {{backgroundColor: farbe, fontSize:20}}>
                <br/>Temperatur in F°: {ergebnis} <i class={farbe}/>
        </div> */}
        <div>
            <p><br/></p>
                <font color={farbe} size="4">
                    Temperatur in F°: {ergebnis} <i class={icon}/>
                </font>
        </div>
        

        <div><br/></div>


        <div class="ui right labeled input">
            <input
                type="text"
                placeholder="Eingabe"
                value={fahrenheit}
                onChange={handleChangeFahrenheit}
            />
            <div class="ui basic label">
                F°
            </div>
        </div>

        <font color="white">penis</font>

        <button
            className="ui animated fade teal button"
            tabIndex="0"
            onClick={handleClickFahrenheit}>
                <div class="visible content">Konvertieren</div>
                <div class="hidden content">Go!</div>
        </button>

        <div>
            <p><br/></p>
                <font color={farbeFahrenheit} size="4">
                    Temperatur in C°: {ergebnisFahrenheit} <i class={iconFahrenheit}/>
                </font>
        </div>

    </>)
        
        //Fragen:
        // wie krieg ich den Button aktiviert, sodass ich in der const handleClick etwas ausgeben lassen kann (das Ergebnis)
 
        //React Komponente:
        // 1. Props (Infos an unterkomponente)
        // 2. State (Innerhalb einer componente)
        // 3. userinfo (Infos überall drauf zugreifen) (redux)

}

export default Temperaturen;