import React from "react";

import Meny1 from "../images/Meny1.png"

class MindreRätter extends React.Component{
    render() {
        return( 
            <div className = "meny">
                <img src={Meny1} className="meny1" />            
            </div>
        );
    }
}
    
export default MindreRätter;