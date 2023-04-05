import React from 'react'
import{Link} from 'react-router-dom'
export default function NavBar() {
    return (
        <div>
            
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                            <Link to="/" style={{ textDecoration: "none" }}><a className="nav-item nav-link " >Home</a></Link>
                            <Link to="/singers" style={{ textDecoration: "none" }}><a className="nav-item nav-link " >Singers</a></Link>
                            <Link to="/albums" style={{ textDecoration: "none" }}><a className="nav-item nav-link " >Albums</a></Link>



                    </div>
                </div>
    
        </div>
    )
}