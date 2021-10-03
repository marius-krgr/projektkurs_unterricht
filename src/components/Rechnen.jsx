import { useState } from "react";
function Rechnen() {
    
    //HA: Summe ausrechnen wenn auf Button klicken.
    //let x = 1;
    //let y = 2;

    // eslint-disable-next-line
    // const handleChangeX = (event) => {
    //     const temp = event.target.value;
    //     console.log(temp)
    //     x = temp;
    //     console.log(x);

    // }

    const [x, setX] = useState();
    //let y = 2;

    const [y, setY] = useState();

    const [ergebnis, setErgebnis] = useState("");

    const handleChangeX = (event) => {
        const temp = event.target.value;
        setX(temp);
    }

    const handleChangeY = (event) => {
        const temp = event.target.value;
        setY(temp);
    }


    const handleClick = () => {
        setErgebnis(+x + +y);
    }
    return (<>
        {/* <span>1. Zahl: </span> */}
        <div class="ui input focus">
            <input
                type="text"
                placeholder="1. Zahl"
                value={x}
                onChange={handleChangeX}
            />
        </div>

        <span> </span>
        <i class="plus pink icon"/>

        <div class="ui input focus">
            <input
                type="text"
                placeholder="2. Zahl"
                value={y}
                onChange={handleChangeY}
            />
        </div>
        
        <font size="4" color="red"><b>  =  {ergebnis}</b></font>

        <p><br></br></p>

        <button
            className="ui animated fade teal button"
            tabIndex="0"
            onClick={handleClick}>
                <div class="visible content">Addiere</div>
                <div class="hidden content">Go!</div>
        </button>
        </>)
        
    
}

//exportiert ActionButton, um von anderen Dateien darauf zuzugreifen
export default Rechnen;
