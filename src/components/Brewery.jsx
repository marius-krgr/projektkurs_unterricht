import React, { Component } from "react";


class Brauhause extends Component {
  constructor(props) {
    super(props);
    this.state = { brew: null };
  }
  render() {
    return (<>
        <h1>List of Brewerys in USA</h1>

        {(this.state.brew == null ? undefined :
        <table className="ui single line table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Size</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Website</th>
            </tr>
            </thead>
            <tbody>{this.state.brew.map(x => this.marping(x))}</tbody>
        </table>)
        }
    </>);
  }

  async componentDidMount() {
    const a = await fetch("https://api.openbrewerydb.org/breweries");
    const b = await a.json();
    console.log(b);

    this.setState({ brew: b });
  }

  marping(x) {
    return (
      <tr key={x.id}>
        <td>{x.name}</td>
        <td>{x.brewery_type}</td>
        <td><address>{x.street}, {x.city} {x.state}</address></td>
        <td><a href={"tel:"+ x.phone}>{x.phone}</a></td>
        <td><a href={x.website_url}>{x.website_url}</a></td>
      </tr>
    );
  }
}

export default Brauhause;
