//Aufgabe: Eine ToDo Liste erstellen!

//neuen Punkt auf der Liste

//irgendeinen Punkt löschen

//Punkt von da nach da verschieben

// Punkt umbenennen
import { useState } from "react";
import React from 'react';
const Todo = () => {


    let a = [];
    a.push("Simon");
    const [neu, setNeu] = useState();
    const [list, seList] = useState(Array());
    // const [listeee, setListe] = useState();
    // const [list, setList] = useState();

    // const [y, setY] = useState();


    const handleChangeNeu = (event) => {
        const temp = event.target.value;
        setNeu(temp);
    }
    const handleClickNeu = () => {
        a.push(neu);
        console.log("Ich bin in handleClickLog!");
    }

    const renderItem = () => {
        return <div>[i]</div>
    }

    const handleList = () => {
        console.log("Ich bin in der Liste!");
        // const list = a.map((e, i) => `${e}`);
        // console.log(list);
        {a.map(i => renderItem(i))}
        this.setState({
            todo: this.state["todo"].filter((e) => a !== e),
        });

    }
    
    //<li>{e}</li>
    // const b = a.map((e, i) => `<div key=${i}>${e}</div>`);
    

    return (<>
        <React.Fragment>
        <div className="ui input">
            <input
                type="text"
                placeholder="Neue Todo"
                value={neu}
                onChange={handleChangeNeu}
            />
        </div>
        <button
            className="ui animated fade teal button"
            tabIndex="0"
            onClick={handleClickNeu}>
                <div className="visible content">Hinzufügen</div>
                <div className="hidden content">Go!</div>
        </button>
        
        <button
            className="ui animated fade teal button"
            tabIndex="0"
            onClick={handleList}>
                <div className="visible content">Zeige Liste an!</div>
                <div className="hidden content">Show me!</div>
        </button>

        {/* {setListe}
        <ul>{listeee}</ul> */}

        
    
        </React.Fragment>
    </>)
}

export default Todo;
