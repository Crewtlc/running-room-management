import { useNavigate } from "react-router-dom"
import "./CSS/Nav.css"
import { useEffect, useState } from "react";

function Nav(){
    const [home,setHome] = useState(false)
    const navigate =useNavigate();
    useEffect(
        ()=>{
            if(home == true){
                navigate("/home");
            }
        }
    ),[home,navigate]

    const handleSetHome = () => {
        // This sets `home` to true only when the function is explicitly called
        setHome(true);
    };

    return(
        <>
    <div className="navbar-main">
        <div className="left-nav">
            <img src="/logo.jpg" alt="logo" className="app-logo"></img>
            <h1 className="app-name">R.R Governance</h1>
        </div>
        <div className="right-nav">
            <button className="nav-buttons" onClick={handleSetHome}>Home</button>
            
            <div className="dropdown">
                <button className="nav-buttons dropdown-button">
                    Forms
                    <span>   </span>
                    <span className="dropdown-icon">▼</span>
                </button>
                <div className="dropdown-content">
                    <a href="#form1" onClick={navigate("/form-1")}>Form 1</a>
                    <a href="#form2">Form 2</a>
                    <a href="#form3">Form 3</a>
                </div>
            </div>
            
            <div className="dropdown">
                <button className="nav-buttons dropdown-button">
                    Reports
                    <span>   </span>
                    <span className="dropdown-icon">▼</span>
                </button>
                <div className="dropdown-content">
                    <a href="#report1">Report 1</a>
                    <a href="#report2">Report 2</a>
                    <a href="#report3">Report 3</a>
                </div>
            </div>
            
            <button className="nav-buttons">About Us</button>
        </div>
    </div>
</>
)
}

export default Nav