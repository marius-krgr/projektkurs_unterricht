function Rechnen() {
    
    //HA: Summe ausrechnen wenn auf Button klicken.
    let x = 1;
    let y = 2;

    // eslint-disable-next-line
    const handleChangeX = (event) => {
        const temp = event.target.value;
        console.log(temp)
        x = temp;
        console.log(x);

    }

    const handleClick = () => {
        console.log("handleClick");
        alert("Yayy, du hast mich gefunden!!!");
        
    }

    return (
        <>
            <span>1. Zahhl:</span>
            <input value={x} />
            <span>2. Zahl:</span>
            <input value={y} />
            <div>Summe: {x + y}</div>
            <button onClick={handleClick}>Addiere</button>
        </>
        )
    
}

//exportiert ActionButton, um von anderen Dateien darauf zuzugreifen
export default Rechnen;