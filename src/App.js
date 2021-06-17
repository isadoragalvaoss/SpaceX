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
    <div className="container">
      <div className="row">
      {this.state.launches.map((lauch)=>(
        <div className="card col-md-4" key={lauch.id} >
        <img className="card-img-top" src="..." alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{lauch.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      ))}
      </div>
    </div>
  );
  }
}

export default App;
