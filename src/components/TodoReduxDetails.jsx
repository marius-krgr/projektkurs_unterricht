import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editWorking, updateTitle } from "../store/todoSlice";
import "./TodoReduxDetails.scss";

function ItemDetails(props) {
  const { todo } = props;
  const [title, setTitle] = useState();
  const dispatch = useDispatch();

  if (todo == null) {
    return <div>What the…?</div>;
  }

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateTitle({ id: todo.id, title }));
    dispatch(editWorking(todo.id));
  };

  return (
    <div className="todoDetails">
      <form onSubmit={handleSubmit}>
        <div className="ui mini input">
          <input
            id="text"
            placeholder="Bearbeiten"
            value={title}
            onChange={handleChange}
          />
        </div>
        <button
          className="ui animated fade teal button"
          type="submit"
          tabIndex="0"
        >
          <div className="visible content">Speichern</div>
          <div className="hidden content">:)</div>
        </button>
      </form>
    </div>
  );
}

export default ItemDetails;
