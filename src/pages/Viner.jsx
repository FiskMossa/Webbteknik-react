import React from "react";

import WinePour from "../WinePour.mp4";

class Viner extends React.Component{
    render() {
        return( 
            <div>
                <div className = "Viner">
                    <p className = "viner2">
                        <b>Viner</b><br></br>
                        Spansk Grenache och Syrah från Montsant – 169:-<br></br>
                        Lätt spritsig Barbera – 219:-<br></br>
                        Fantastiska Friandise från Jérôme Arnoux – 189:-<br></br>
                        En frisk och fruktig Chablis från Christophe et Fils – 259:-<br></br>
                        En syrlig och krispig Chardonnay från François de Nicolay – 199:-
                    </p>
                </div>
                <div className="Video-container">
                    <video className="VinVideo" controls>
                            <source src={WinePour} type="video/mp4" />
                            Your browser does not support the video tag.
                    </video>
                </div> 
            </div> 
        );
    }
}
    
export default Viner;