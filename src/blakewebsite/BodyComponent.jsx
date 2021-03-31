import React, {Component} from 'react'


class BodyComponent extends Component{
    render(){
        return(
            <div>
                <div id="home" className="background1 paddingTop60">
                    <div className="text-center whiteText bigFont">
                        HOME Blake Eversole
                    </div>
                </div>
                <div id="about" className="background2 paddingTop60">
                    <div className="text-center whiteText bigFont">
                        About Blake Eversole
                    </div>
                </div>
                <div id="experience" className="background1 paddingTop60">
                    <div className="text-center whiteText bigFont">
                        Experience Blake Eversole
                    </div>
                </div>
                <div id="projects" className="background2 paddingTop60">
                    <div className="text-center whiteText bigFont">
                        Projects Blake Eversole
                    </div>
                </div>
                <div id="contact" className="background1 paddingTop60">
                    <div className="text-center whiteText bigFont">
                        Contact Blake Eversole
                    </div>
                </div>
            </div>         
        )
    }
}

export default BodyComponent