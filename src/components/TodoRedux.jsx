//Aufgabe: Eine ToDo Liste erstellen!

//neuen Punkt auf der Liste

//irgendeinen Punkt löschen

//Punkt von da nach da verschieben

// Punkt umbenennen
import { useState } from "react";
import React from "react";
import classNames from "classnames";
import styles from "./Todo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleDone,
  editWorking,
} from "../store/todoSlice";
import TodoDetails from "./TodoReduxDetails";

const TodoRedux = () => {
  const dispatch = useDispatch();
  // const [list, setList] = useState([]);
  const [neu, setNeu] = useState();
  const { todos } = useSelector((state) => state.todos);
  const [iplace, setiplace] = useState(false);

  // useEffect(()  => {
  //     const oldListString = localStorage?.getItem("todolist");
  //     if (oldListString) {
  //         setList(JSON.parse(oldListString));
  //     } else {
  //         //eslint-disable-next-line
  //         const l = new Array(
  //             { id: 1, title: 'Beispiel To-Do-Aufgabe', done: false },
  //         );
  //         setList(l);
  //         localStorage.setItem("todolist", JSON.stringify(l));
  //     }
  // }, [])

  const handleToggleDone = (id) => {
    // const newList = JSON.parse(JSON.stringify(list));
    // const item = newList[index];
    // item.done = !item.done;
    // setList(newList);
    // localStorage.setItem("todolist", JSON.stringify(newList));

    dispatch(toggleDone(id));
  };

  const handleDelete = (id) => {
    // const newList = JSON.parse(JSON.stringify(list));
    // newList.splice(index, 1);
    // setList(newList);
    // localStorage.setItem("todolist", JSON.stringify(newList));

    dispatch(removeTodo(id));
  };

  const handleChangeNew = (event) => {
    const temp = event.target.value;
    setNeu(temp);
  };
  const handleClickNew = () => {
    // const newList = JSON.parse(JSON.stringify(list));
    // newList.push({
    //     id: list.length + 1,
    //     title: neu,
    //     done: false,
    // });
    // setList(newList);
    // localStorage.setItem("todolist", JSON.stringify(newList));
    dispatch(addTodo(neu));
    setNeu("");
  };
  const handleClickEdit = (id) => {
    dispatch(editWorking(id));
  };

  const renderItem = (i) => {
    return (
      <div key={i.id} className="item">
        <span className={classNames(styles.item, i.done ? styles.done : null)}>
          {/* ID */}
          <span>{i.id}. </span>

          {console.log(i.edit) /* Title */}

          {i.working && iplace ? (
            <span onClick={() => handleToggleDone(i.id)}>
              {console.log(i.edit && iplace)}
              <TodoDetails todo={i} inittext={i.title}></TodoDetails>
            </span>
          ) : (
            <span onClick={() => handleToggleDone(i.id)}>{i.title}</span>
          )}
        </span>

        {/* Löschen */}
        <div className="ui right floated small basic icon buttons">
          <button className="ui button" onClick={() => handleDelete(i.id)}>
            <i className="trash alternate outline red icon" />
          </button>
        </div>

        {/* Bearbeiten */}
        <div className="ui right floated small basic icon buttons">
          <button className="ui button" onClick={() => handleClickEdit(i.id)}>
            <i className="pencil icon" />
          </button>
        </div>

        {/* Done */}
        <div className="ui right floated small basic icon buttons">
          <button className="ui button" onClick={() => handleToggleDone(i.id)}>
            {i.done ? (
              <i className="check circle outline icon" />
            ) : (
              <i className="circle outline icon" />
            )}
          </button>
        </div>
        {i.working && !iplace ? (
          <TodoDetails todo={i} inittext={i.title} />
        ) : null}
      </div>
    );
  };

  return (
    <>
      <React.Fragment>
        <button
          onClick={() => {
            setiplace(!iplace);
          }}
        >
          {iplace === false ? "x" : "tick"}
        </button>
        <div>
          <div className="ui massive bottom aligned divided list">
            {todos.map((todo) => renderItem(todo))}
          </div>
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
          onClick={handleClickNew}
        >
          <div className="visible content">Hinzufügen</div>
          <div className="hidden content">Go!</div>
        </button>
      </React.Fragment>
    </>
  );
};

export default TodoRedux;
