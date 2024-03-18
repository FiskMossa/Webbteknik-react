import React from "react";
import { NavLink, Link } from "react-router-dom";

import Logga from "../images/Logga.png"
import menu from "../images/menu.png"
import search from "../images/search.png"

class Header extends React.Component{
    render() {
        return( 
            <div className = "headborder">
                    
                    <NavLink to="/">
                        <img src={Logga} className = "Logga" />
                    </NavLink>

                    <img src={search} className="imgsearch" alt="Picture of search icon" id="searchIcon" />
                    
                    <div className="search-bar" id="searchBar">
                            <input type="text" placeholder="Search..." />
                            <button onclick="closeSearch()">Close</button>
                    </div>
                    <script src="Lillakrogen.js"></script>

                    <img src={menu} className="imgmenu" alt="Picture of Burgermenu icon" id="menuIcon" />

                    <div className="popupMenu" id="popupMenu">
                            <button id="closeButton">&times;</button>
                            <ul>
                                    <li><NavLink to="#boka-bord">Boka bord</NavLink></li>
                                    <li><hr /></li>
                                    <li><NavLink to="#menyer">Menyer</NavLink></li>
                                    <li><hr /></li>
                                    <li><NavLink to="#Erbjudanden">Erbjudanden</NavLink></li>
                                    <li><hr /></li>
                                    <li><NavLink to="#instagram">Instagram</NavLink></li>
                                    <li><hr /></li>
                                    <li><NavLink to="#footer">Kontaktinfo</NavLink></li>
                            </ul>
                            <div className="infoMenu">        
                                    <p><b>Öppettider</b> - Tisdag-Lördag - Klockan 17:00 till 00:00</p>
                                    <p><b>Instagram</b> - @lillakrogenumea</p>
                                    <p><b>Telefonnummer</b> - 090-13 73 92</p>
                                    <p><b>Mail</b> - Info@lillakrogen.se</p>
                                    <p><b>Adress</b> - Storgatan 62A</p>
                            </div>
                    </div>
                    <script src="Lillakrogen.js"></script>               
            </div>
        );
    }
}
    
export default Header;
