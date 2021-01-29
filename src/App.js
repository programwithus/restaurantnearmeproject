import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import CardComponent from "./components/card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { places: [] };
  }

  componentDidMount() {
    axios
      .get("http://164.90.128.51/restaurants")
      .then((response) => this.setState({ places: response.data }));
  }

  render() {
    return (
      <React.Fragment>
        <nav className="bg-dark navbar-dark">
          <div className="container">
            <a href="" className="navbar-brand">
              <i className="fas fa-tree mr-2"></i>Forest
            </a>
          </div>
        </nav>
        <section
          style={{
            backgroundImage: `url(${"https://practicalprogramming.nyc3.digitaloceanspaces.com/cafe-3537801_1920.jpg"}`,
            backgroundRepeat: "no-repeat",
          }}
          className="jumbotron text-center"
        >
          <h1 className="display-3">Restaurants Near Me</h1>
          <p className="lead">Find the best place near you</p>
          <a href="" className="btn btn-primary">
            Click
          </a>
          <a href="" className="btn btn-secondary">
            Click
          </a>
        </section>

        <section id="gallery">
          <div className="container">
            <div className="row">
              {this.state.places.map((r) => (
                <CardComponent
                  key={r.name}
                  name={r.name}
                  city={r.city}
                  state={r.state}
                  photo={r.photo}
                  rating={r.rating}
                />
              ))}
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
