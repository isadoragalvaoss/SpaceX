import './App.css';

import { BrowserRouter as Router , Switch, Route } from "react-router-dom"
import { Header } from './components/Header';
import All from './containers/All';
import Upcoming from './containers/Upcoming';
import Past from './containers/Past';
import Next from './containers/Next';
import Latest from './containers/Latest';
import Main from './containers/Main';

function App(){
  return(
    <Router>
      <Header/>
    <div>
    <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/all" component={All}></Route>
          <Route exact path="/upcoming" component={Upcoming}></Route>
          <Route exact path="/past" component={Past}></Route>
          <Route exact path="/next" component={Next}></Route>
          <Route exact path="/latest" component={Latest}></Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
