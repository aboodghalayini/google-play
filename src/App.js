import React from 'react';
import {Header ,Container ,Footer ,Kids } from './Components/index';
import search from './assets/images/search.svg';
import logo from './assets/images/Screenshot_20221114_110120.png';
import './App.css';
const App = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="Games">
      <img src={logo} alt="google play"></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="Games">Games</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Apps">Apps</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" href=" Movies-&-TV" >
            Movies & TV
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="Books" >Books</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="Kids" >Kids</a>
        </li>
      </ul>
      <form className="d-flex">
        <img src={search} alt='search'/>
      </form>
    </div>
  </div>
</nav>
      <Kids/>
    </>
  )
}
export default App;