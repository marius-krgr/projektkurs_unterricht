import React, { Component } from "react";

class TodoJ extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: [], a: "", b: "" };
  }
  render() {
    return (
      <>
        {this.renderera()}

        {this.textbutton()}
      </>
    );
  }

  renderera() {
    return this.state.todo.map((a, i) => {
      console.log(a);

      return (
        <div key={i}>
          <h4>{a.titel}</h4>
          <p>{a.discription}</p>
          <button
            onClick={() => {
              this.setState({
                todo: this.state["todo"].filter((e) => a !== e),
              });
            }}
          >
            Löschen
          </button>
          ------------------------------------------------------
        </div>
      );
    });
  }

  textbutton() {
    return (
      <>
        <input
          type="Text"
          placeholder="Titel"
          value={this.state.b}
          onChange={(event) =>
            this.setState((prevstate) => {
              prevstate["b"] = event.target.value;

              return prevstate;
            })
          }
        />

        <input
          type="Text"
          placeholder="Discription"
          value={this.state.a}
          onChange={(event) =>
            this.setState((prevstate) => {
              prevstate["a"] = event.target.value;

              return prevstate;
            })
          }
        />

        <button
          onClick={() => {
            this.setnewTask();
          }}
        >
          Absenden
        </button>
      </>
    );
  }

  setnewTask() {
    this.setState((prevstate) => {
      console.log(prevstate["todo"]);

      prevstate["todo"].push({
        titel: prevstate["b"],
        discription: prevstate["a"],
      });

      prevstate["a"] = "";
      prevstate["b"] = "";
      return prevstate;
    });
  }
}

export default TodoJ;