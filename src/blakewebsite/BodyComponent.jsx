import React, {Component} from 'react'


class BodyComponent extends Component{
    render(){
        return(
            <div>
                <div id="home" className="paddingTop60">
                HOME HERE
                </div>
                <div id="about" className="paddingTop60">
                    <div className="text-center whiteText">
                        Blake Eversole
                    </div>
                </div>
                <div id="contact" className="paddingTop60">
                    <div className="text-center whiteText bigFont">
                        Blake Eversole
                    </div>
                </div>
            </div>         
        )
    }
}

export default BodyComponent