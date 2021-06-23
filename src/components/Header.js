import { Link } from 'react-router-dom';
import logo from "../imgs/logo.png"

export const Header = ({lauch}) => (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
    <Link to="/" className="navbar-brand" id="logo"><img src={logo} alt=""/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <Link to="/next" className="nav-item nav-link pl-md-5">Next Launch</Link>
    <Link to="/upcoming" className="nav-item nav-link pl-md-5">Upcoming Launches</Link>
    <Link to="/latest" className="nav-item nav-link pl-md-5">Latest Launch</Link>
    <Link to="/past" className="nav-item nav-link pl-md-5">Past Launches</Link>
    </div>
  </div>
      </div>
  
</nav>
);

