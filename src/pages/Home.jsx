import React from "react";
import { NavLink, Link } from "react-router-dom";

import lillakrogen from "../images/lillakrogen.png";
import MindreRätter from "../images/MindreRätter.png";
import MellanStoraRätter from "../images/MellanStoraRätter.png";
import Desserter from "../images/Desserter.png";
import Viner from "../images/Viner.png";
import Erbjudanden from "../images/Erbjudande.png";
import insta1 from "../images/insta1.png";
import insta2 from "../images/insta2.png";
import insta3 from "../images/insta3.png";
import insta4 from "../images/insta4.png";


class Home extends React.Component{
    render() {
        return(
            <body>

            <div className = "imgcontainer">
                    <img src={lillakrogen} className = "imgcontainer1" alt="Picture of the restaurant" />
            </div>

            <section id="boka-bord">
                    <div className = "openhours">
                            <p class="openhours1"><b>Öppettider</b> <br></br> Tisdag - Lördag <br></br> Klockan 17:00 till 00:00</p>
                    </div>

                    <div className = "BokaBord">
                            <button className="BokaBord1" id="openCalendarButton"                                                 
                            onmouseover="changeBokaBord(this, true)" onmouseout="changeBokaBord(this, false)"> 
                            Boka Bord </button>
                    </div>

                    <div className="popupOverlay" id="popupOverlay"></div>

                    <div className="popupCalendar" id="popupCalendar">
                            <button className="xButton" id="xButton">&times;</button>
                            <div className="calendar" id="calendar"></div>
                            <button className="nextButton" id="nextButton">Next</button>
                    </div>

                    <div id="popupPersons" className="popupPersons">
                            <h2>Antal personer</h2>
                            <div className="buttons">
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                                <button>5</button>
                                <button>6</button>
                                <button>7</button>
                                <button>8</button>
                            </div>
                    </div>

                    <script src="Lillakrogen.js"></script>               

            </section>

            <section id="menyer">
                    <div className = "menytext">
                            <p className="menytext1">Menyer</p>
                    </div>
                    <div className="menyer">
                            <div className="meny">
                                    <NavLink to="/MindreRätter">
                                            <img src= {MindreRätter} alt="Mindre Rätter"                              
                                            onmouseover="changeImageAppearance(this, true)" onmouseout="changeImageAppearance(this, false)" />
                                    </NavLink>
                                    <NavLink to="/MindreRätter"
                                    onmouseover="changeAppearance(this, true)" onmouseout="changeAppearance(this, false)"> 
                                            <p>Mindre Rätter</p>
                                    </NavLink>
                            </div>
                            <div className="meny">
                                    <NavLink to="/MellanStoraRätter">
                                            <img src={MellanStoraRätter} alt="Mellan Stora Rätter"
                                            onmouseover="changeImageAppearance(this, true)" onmouseout="changeImageAppearance(this, false)" />
                                    </NavLink>
                                    <NavLink to="/MellanStoraRätter"
                                    onmouseover="changeAppearance(this, true)" onmouseout="changeAppearance(this, false)"> 
                                            <p>Mellan Stora Rätter</p>
                                    </NavLink>
                            </div>
                            <div className="meny">
                                    <NavLink to="/Desserter">
                                            <img src={Desserter} alt="Desserter"
                                            onmouseover="changeImageAppearance(this, true)" onmouseout="changeImageAppearance(this, false)" />
                                    </NavLink>
                                    <NavLink to="/Desserter"
                                            onmouseover="changeAppearance(this, true)" onmouseout="changeAppearance(this, false)"> 
                                            <p>Desserter</p>
                                    </NavLink>
                            </div>
                            <div className="meny">
                                    <NavLink to="/Viner">
                                            <img src={Viner} alt="Viner"                                     
                                            onmouseover="changeImageAppearance(this, true)" onmouseout="changeImageAppearance(this, false)" />
                                    </NavLink>
                                    <NavLink to="/Viner" 
                                    onmouseover="changeAppearance(this, true)" onmouseout="changeAppearance(this, false)">
                                            <p>Viner</p>
                                    </NavLink>
                            </div>    
                    </div>
            </section>

            <section id="Erbjudanden">

                    <p className = "Erbjud">Erbjudanden</p>
                    <div className = "ErbjudBild1">
                            <img src={Erbjudanden} className = "ErbjudBild" />
                    </div>
            </section>

            <section id="instagram">
                    <div>
                            <a href="https://www.instagram.com/lillakrogenumea/" className="insta1" 
                            onmouseover="changeAppearance(this, true)" onmouseout="changeAppearance(this, false)">
                                    <p className = "insta">Följ oss på Instagram</p>
                            </a>  
                    </div>
                        
                    <div className="insta2">
                            <a href="https://www.instagram.com/lillakrogenumea/">
                                <img src={insta1} className="insta-image" id="img1" 
                                onmouseover="changeImageAppearance(this, true)" onmouseout="changeImageAppearance(this, false)" />
                            </a>
                            <a href="https://www.instagram.com/lillakrogenumea/">
                                <img src={insta2} className="insta-image" id="img2" 
                                onmouseover="changeImageAppearance(this, true)" onmouseout="changeImageAppearance(this, false)" />
                            </a>
                            <a href="https://www.instagram.com/lillakrogenumea/">
                                <img src={insta3} className="insta-image" id="img3" 
                                onmouseover="changeImageAppearance(this, true)" onmouseout="changeImageAppearance(this, false)" />
                            </a>
                            <a href="https://www.instagram.com/lillakrogenumea/">
                                <img src={insta4} className="insta-image" id="img4" 
                                onmouseover="changeImageAppearance(this, true)" onmouseout="changeImageAppearance(this, false)" />
                            </a>
                        </div>
                    
                    <script src="randomizer.js"></script>
            </section>
            </body>
        );
    }
}

export default Home;