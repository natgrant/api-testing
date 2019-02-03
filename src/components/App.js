import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  componentDidMount() {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = "https://www.metaweather.com/api/location/search/?query=san";
    fetch(proxyUrl + targetUrl)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }
  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="App">
        <ul>
          {items.map(item => (
            <li key={item.id}>
              City: {item.title} | Where: {item.location_type}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
