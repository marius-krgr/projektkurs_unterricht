//Aufgabe: Eine ToDo Liste erstellen!

//neuen Punkt auf der Liste

//irgendeinen Punkt löschen

//Punkt von da nach da verschieben

// Punkt umbenennen
import { useEffect, useState } from "react";
import React from "react";
import classNames from "classnames";
import styles from "./Todo.module.scss";

const Todo = () => {
  const [list, setList] = useState([]);
  const [neu, setNeu] = useState();

  useEffect(() => {
    const oldListString = localStorage?.getItem("todolist");
    if (oldListString) {
      setList(JSON.parse(oldListString));
    } else {
      //eslint-disable-next-line
      const l = new Array({
        id: 1,
        title: "Beispiel To-Do-Aufgabe",
        done: false,
      });
      setList(l);
      localStorage.setItem("todolist", JSON.stringify(l));
    }
  }, []);

  const handleToggleDone = (index) => {
    const newList = JSON.parse(JSON.stringify(list));
    const item = newList[index];
    item.done = !item.done;
    setList(newList);
    localStorage.setItem("todolist", JSON.stringify(newList));
  };

  const handleDelete = (index) => {
    const newList = JSON.parse(JSON.stringify(list));
    newList.splice(index, 1);
    setList(newList);
    localStorage.setItem("todolist", JSON.stringify(newList));
  };

  const handleChangeNeu = (event) => {
    const temp = event.target.value;
    setNeu(temp);
  };
  const handleClickNeu = () => {
    const newList = JSON.parse(JSON.stringify(list));
    newList.push({
      id: list.length + 1,
      title: neu,
      done: false,
    });
    setList(newList);
    localStorage.setItem("todolist", JSON.stringify(newList));
    setNeu("");
  };

  const renderItem = (i, index) => {
    return (
      <div key={i.id} className="item">
        <span className={classNames(styles.item, i.done ? styles.done : null)}>
          {/* ID */}
          <span>{i.id}. </span>

          {/* Title */}
          <span onClick={() => handleToggleDone(index)}>{i.title}</span>
        </span>

        {/* Löschen */}
        <div className="ui right floated small basic icon buttons">
          <button className="ui button" onClick={() => handleDelete(index)}>
            <i className="trash alternate outline red icon" />
          </button>
        </div>

        {/* Done */}
        <div className="ui right floated small basic icon buttons">
          <button className="ui button" onClick={() => handleToggleDone(index)}>
            {i.done ? (
              <i className="check circle outline icon" />
            ) : (
              <i className="circle outline icon" />
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <React.Fragment>
        <div>
          <div className="ui massive bottom aligned divided list">
            {list.map((item, index) => renderItem(item, index))}
          </div>
        </div>
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
          onClick={handleClickNeu}
        >
          <div className="visible content">Hinzufügen</div>
          <div className="hidden content">Go!</div>
        </button>
      </React.Fragment>
    </>
  );
};

export default Todo;
