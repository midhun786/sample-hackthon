import React from 'react'
import { Link } from 'react-router-dom'

function Mainnav() {
  return (
    <>
   
    <img src="https://cio.eletsonline.com/wp-content/uploads/2019/12/bookmyshow-1280x720.png" style={{width:"100px",height:"50px"}}></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/home" class="nav-link active text-white" aria-current="page" >Home</Link>
        </li>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle  text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/allmovies" >All Movies</Link></li>
           
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">User Registeration</a></li>
          </ul>
        </li>
        
      </ul>
      <form class="d-flex">
        
        <button class="btn btn-danger" type="submit">Signup</button>
      </form>
    </div>
  
    </>
  )
}

export default Mainnav