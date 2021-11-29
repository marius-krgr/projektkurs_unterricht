//Aufgabe: Eine ToDo Liste erstellen!

//neuen Punkt auf der Liste

//irgendeinen Punkt löschen

//Punkt von da nach da verschieben

// Punkt umbenennen
import { useState } from "react";
import React from 'react';
import classNames from "classnames";
import styles from './Todo.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleDone, editWorking } from '../store/todoSlice';
import TodoDetails from './TodoReduxDetails';

const TodoRedux = () => {

    const dispatch = useDispatch();
    // const [list, setList] = useState([]);
    const [neu, setNeu] = useState();
    const { todos } = useSelector(state => state.todos);
    //Die beiden oberen Zeilen sind fast gleich, wir tun dasselbe, nur wir geben bei den Daten der todos einen useSelector an anstatt einen useState!
    const [iplace, setiplace] = useState(false);

    const handleToggleDone = id => {
        dispatch(toggleDone(id));
    }

    const handleDelete = id => {
        dispatch(removeTodo(id));
    }   
    const handleClickEdit = id => {
        dispatch(editWorking(id));
    }
    const handleChangeNew = (event) => {
        const temp = event.target.value;
        setNeu(temp);
    }
    const handleClickNew = () => {
        //dispatch ist der Postbote, der das überbringt. Liegt daran, dass es oben kein State ist. Also: man braucht immer dispatch!
        dispatch(addTodo(neu));
        setNeu("");
    }
    

    const renderItem = i => {
        return (
            <div
                key={i.id}
                className="item"
            >

                <span className={classNames(styles.item, i.done ? styles.done : null)}>
                    {/* ID */}
                    <span>{i.id}. </span>

                    {/* Title */}
                    {/* <span onClick={() => handleToggleDone(i.id)}>
                        {i.title}
                    </span> */}
                    {i.working && iplace ? (
                        <span onClick={() => handleToggleDone(i.id)}>
                            {console.log(i.edit && iplace)}
                            <TodoDetails todo={i} inittext={i.title}/>
                        </span>
                    ) : (
                        <span onClick={() => handleToggleDone(i.id)}>{i.title}</span>
                    )}
                </span>

                {/* Löschen */}
                <div className = "ui right floated small basic icon buttons">
                    <button
                        className = "ui button"
                        onClick={() => handleDelete(i.id)}
                    >
                        <i className="trash alternate outline red icon"/>
                    </button>
                </div>

                {/* Bearbeiten */}
                <div className = "ui right floated small basic icon buttons">
                    <button
                        className = "ui button"
                        onClick={() => handleClickEdit(i.id)}
                    >
                        <i className="pencil icon"/>
                    </button>
                </div>

                {/* Done */}
                <div className = "ui right floated small basic icon buttons">
                    <button
                        className= "ui button"
                        onClick={() => handleToggleDone(i.id)}
                    >
                        {i.done ? <i className="check circle outline icon"/> : <i className="circle outline icon"/>}
                    </button>
                </div>
                {/* {i.working === true ? <TodoDetails todo={i} />: null} */}
                {i.working && !iplace ? (<TodoDetails todo={i} inittext={i.title} />) : null}
            </div>
        );
    };


    return (<>
        <React.Fragment>
        <div>
            <div className="ui massive bottom aligned divided list">{todos.map(todo => renderItem(todo))}</div>
        </div>
        <div className="ui input">
            <input
                type="text"
                placeholder="Neue Todo"
                value={neu}
                onChange={handleChangeNew}
            />
        </div>
        <button
            className="ui animated fade teal button"
            tabIndex="0"
            onClick={handleClickNew}>
            <div className="visible content">Hinzufügen</div>
            <div className="hidden content">Go!</div>
        </button>
        <div>
            <div class="ui toggle checkbox">
                <input
                    type="checkbox"
                    name="public"
                    onClick={() => {
                        setiplace(!iplace);
                    }}
                />
                <label>Inplace Editing?</label>
            </div>
        </div>

            
        </React.Fragment>
    </>)
}
//Aufgaben:
// next Id, setNextId ersetzen
//localStorage aktivieren

export default TodoRedux;
