import { useState } from "react";
import styles from './Style.scss';
import classNames from 'classnames';

function Temperaturen() {
    
    
        const [celsius, setS] = useState("");
        const [ergebnis, setErgebnis] = useState("");
        const [farbe, setFarbe] = useState("");
        const [icon, setIcon] = useState("");
        const [image, setImage] = useState("");

        const [fahrenheit, setFahrenheit] = useState("");
        const [ergebnisFahrenheit, setErgebnisFahrenheit] = useState("");
        const [farbeFahrenheit, setFarbeFahrenheit] = useState("");
        const [iconFahrenheit, setIconFahrenheit] = useState("");
        const [imageFahrenheit, setImageFahrenheit] = useState("");

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
            setImage("https://unsplash.com/photos/qQWV91TTBrE/download?force=true&w=1920");
        } else if (celsius <= 15 && celsius >= 0) {
            setFarbe("cyan");
            setIcon("cloud icon");
            setImage("https://unsplash.com/photos/SrACTSOBoCg/download?force=true");
        } else if (celsius >= 15 && celsius < 25) {
            setFarbe("orange");
            setIcon("sun icon");
            setImage("https://unsplash.com/photos/HClKQKUodF4/download?force=true");
        } else if (celsius >= 25) {
            setFarbe("red");
            setIcon("fire icon");
            setImage("https://unsplash.com/photos/Nz-zAt4qiuU/download?force=true");
        }
        setErgebnis(z);
    }

    const handleClickFahrenheit = () => {
        const z = ((fahrenheit - 32) * 5/9);
        if (z < 0) {
            setFarbeFahrenheit("blue");
            setIconFahrenheit("snowflake icon");
            setImageFahrenheit("https://unsplash.com/photos/qQWV91TTBrE/download?force=true&w=1920");
        } else if (z <= 15 && z >= 0) {
            setFarbeFahrenheit("cyan");
            setIconFahrenheit("cloud icon");
            setImageFahrenheit("https://unsplash.com/photos/SrACTSOBoCg/download?force=true");
        } else if (z >= 15 && z < 25) {
            setFarbeFahrenheit("orange");
            setIconFahrenheit("sun icon");
            setImageFahrenheit("https://unsplash.com/photos/HClKQKUodF4/download?force=true");
        } else if (z >= 25) {
            setFarbeFahrenheit("red");
            setIconFahrenheit("fire icon");
            setImageFahrenheit("https://unsplash.com/photos/Nz-zAt4qiuU/download?force=true");
        }
        setErgebnisFahrenheit(z);
    }


    return (<>
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


        <div>
            <p><br/></p>
                <font color={farbe} size="4">
                    Temperatur in F°: {ergebnis} <i class={icon}/> <img src={image} alt="" className={classNames('ui medium circular image', styles.hintergrund)}/>
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
                <font color={farbeFahrenheit} size="4" type="">
                    Temperatur in C°: {ergebnisFahrenheit} <i class={iconFahrenheit}/> <img src={imageFahrenheit} alt="" className={classNames('ui medium circular image', styles.hintergrund)}/>
                </font>
         </div>
        
    </>)
        
        
        //React Komponente:
        // 1. Props (Infos an unterkomponente)
        // 2. State (Innerhalb einer componente)
        // 3. userinfo (Infos überall drauf zugreifen) (redux)
        
    }
    
    export default Temperaturen;