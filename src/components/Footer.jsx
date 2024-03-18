import React from "react";

class Footer extends React.Component{
    render() {
        return( 
            <section id="footer">
            <div className = "botteninfo">
                    <div className="centerinfo">
                        <div className="info">        
                                <p><b>Öppettider</b> - Tisdag-Lördag - Klockan 17:00 till 00:00</p>
                                <p><b>Instagram</b> - @lillakrogenumea</p>
                                <p><b>Telefonnummer</b> - 090-13 73 92</p>
                                <p><b>Mail</b> - Info@lillakrogen.se</p>
                                <p><b>Adress</b> - Storgatan 62A</p>
                        </div>

                        <div className="form">
                                <form action="mailto:your-email@example.com" method="post" enctype="text/plain">
                                        <label for="name">Name:</label>
                                        <input type="text" id="name" name="name" required /><br></br><br></br>
                                        
                                        <label for="email">Email:</label>
                                        <input type="email" id="email" name="email" required /><br></br><br></br>
                                        
                                        <label for="message">Message:</label><br></br>
                                        <textarea id="message" name="message" rows="4" required></textarea><br></br><br></br>
                                        
                                        <input type="submit" value="Submit" />
                                </form>
                        </div>
                </div>    
            </div>
            </section>
        );
    }
}
    
export default Footer;