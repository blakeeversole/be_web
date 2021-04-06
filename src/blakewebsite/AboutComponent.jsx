import React, {Component} from 'react'
import BackgroundImage from '../background.jpg';

class AboutComponent extends Component{

    render(){
        return(
            <div id="about" className="background1 paddingTop60">
            <img src={BackgroundImage} alt="Snow" className="padding60" style={{width:"100%"}}/>
            <div class="centered whiteColor mulishBold" style={{width:"75%"}}>Driven graduate with hands on experience building web applications throughout the software development life cycle. Skilled in all levels of the software stack. Enjoys problem solving and building solutions.
            </div>          
                    
                    
            </div>
        )
    }
}

export default AboutComponent