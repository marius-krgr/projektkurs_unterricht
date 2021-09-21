function Aufgabe1() {
    
    let x = 1;
    let y = 2;

    const handleClick = () => {
        console.log("handleClick");
        alert("Yayy, du hast mich gefunden!!!");
        
    }

    return (
        <>
            <div></div>
            <span>1. Zahhl:</span>
            <input value={x} />
            <span>2. Zahl:</span>
            <input value={y} />
            <div>Summe: {x + y}</div>
            <button onClick={handleClick}>Verdoppeln</button>
           </>
    )
}

export default Aufgabe1;