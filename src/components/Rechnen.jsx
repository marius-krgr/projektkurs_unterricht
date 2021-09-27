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


    const handleChangeX = (event) => {
        const temp = event.target.value;
        setX(temp);
    }

    const handleChangeY = (event) => {
        const temp = event.target.value;
        setY(temp);
    }


    const handleClick = () => {
        console.log("handleClick");
        return(
            <>
                <div>Halloo</div>
            </>
        )
        //const z = 100;
        //return z;
        
        //alert("Yayy, du hast mich gefunden!!!");
        //return <div>Summe: {+x + +y}</div>
        
    }
    return (<>
        <span>1. Zahl: </span>
        <input value={x} onChange={handleChangeX} />
        <span>2. Zahl: </span>
        <input value={y} onChange={handleChangeY} />
        <div>Summe: {+x + +y}</div>
        <button
            className="ui blue basic button"
            onClick={handleClick}>
            Addiere
        </button>
        </>)
        
    
}

//exportiert ActionButton, um von anderen Dateien darauf zuzugreifen
export default Rechnen;
