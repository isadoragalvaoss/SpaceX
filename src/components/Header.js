import { Link } from 'react-router-dom';
import logo from "../imgs/logo.png"

export const Header = ({lauch}) => (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
      <a className="navbar-brand " href="/" id="logo"><img src={logo} alt=""/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <Link to="/" className="nav-item nav-link pl-md-5">Next Launch</Link>
    <Link to="/" className="nav-item nav-link pl-md-5">Upcoming Launches</Link>
    <Link to="/" className="nav-item nav-link pl-md-5">Latest Launch</Link>
    <Link to="/" className="nav-item nav-link pl-md-5">Past Launches</Link>
    </div>
  </div>
      </div>
  
</nav>
);

