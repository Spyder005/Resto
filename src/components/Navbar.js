import React from 'react'
import {Navbar as manas,Nav} from 'react-bootstrap'
import {Link,BrowserRouter as Router} from 'react-router-dom'
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ faHome,faPlus,faList,faSearch,faUser} from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  return (
     <nav className="navbar navbar-expand-lg bg-body-tertiary " style={{backgroundColor:'black'}}>
      
  <div className="container-fluid" style={{backgroundColor:'black',border:'3pm'}}>
    <h3 className="navbar-brand" style={{color:'white'}}>Restaurant</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
       
      <manas.Collapse id="basic-navbar-nav">

      <Nav className="mr-auto">

      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item m-3" style={{color:'white'}} >
       

        <Link to="/"><FontAwesomeIcon icon={faHome} />Home</Link>
        </li>
        <li className="nav-item m-3">
        <Link to="/create"><FontAwesomeIcon icon={faPlus}/>Create</Link>
        </li>
        
        <li className="nav-item m-3">
        <Link to="/list"><FontAwesomeIcon icon={faList}/>List</Link>
        </li>
        <li className="nav-item m-3">
        <Link to="/update/1">Update</Link>
        </li>
       
        <li className="nav-item  m-3">
        <Link to="/search"><FontAwesomeIcon icon={faSearch}/>Search</Link>
        </li>
        <li className="nav-item  m-3">
        <Link to="/login"><FontAwesomeIcon icon={faUser}/>Login</Link>
        </li>
       
       
      
       
      </ul>
      </Nav>
      </manas.Collapse>
      
      
    </div>
  </div>
</nav> 
  )
}

export default Navbar