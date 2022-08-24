import { NavLink,useNavigate } from "react-router-dom"

export const HeaderBar=()=>{
    
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <a href="#"  className="nav-link">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}