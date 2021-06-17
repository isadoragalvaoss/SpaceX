import { Component } from  'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state= {
      launches : []
    }
  }

  componentDidMount(){
    fetch('https://api.spacexdata.com/v4/launches')
      .then((response) => response.json())
      .then(launches => this.setState({launches : launches}))
  }

  render(){ 
  return (
    <div className="App">
      {this.state.launches.map((lauch)=>(
        <h1>{lauch.name}</h1>
      ))}
    </div>
  );
  }
}

export default App;
