import React from 'react'
import './Header.css'
import logo from '../../assets/images/Screenshot_20221114_110120.png'
import search from '../../assets/images/search.svg';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="google play"></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">Games</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Apps</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" href="#" >
            Movies & TV
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" >Books</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#" >Kids</a>
        </li>
      </ul>
      <form className="d-flex">
        <img src={search} alt='search'/>
      </form>
    </div>
  </div>
</nav>
  )
}
export default Header