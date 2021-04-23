import React from "react";

function Navbar(props) {
    return (
        <header className="container-fluid fixed-top" >
            <div className="row">
                
                <nav className="col-sm-4">
                    <p>Score: <span>{props.currentScore}</span></p>
                    <p>Top Score: <span>{props.highScore}</span> </p>
                    {props.children}
                </nav>
            </div>
        </header>        
    )
}

export default Navbar;