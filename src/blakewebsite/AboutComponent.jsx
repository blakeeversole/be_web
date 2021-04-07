import React, {Component} from 'react'
import BackgroundImage from '../background.jpg';
import Blake from '../blake.png';

class AboutComponent extends Component{

    render(){
        return(
            <div id="about" className="background1 paddingTop60">
            <div className="row">
            <div className="col-3">
            <img src={Blake} alt="Snow" className="padding60" style={{width:"100%"}}/>
            </div>
            <div className="col-9 blackColor mulishBold font20 padding60">
            Hello! I'm Blake Eversole, a recent graduate with hands on experience building web applications throughout the software development life cycle. 
            I'm a quick learner who enjoys problem solving and building solutions. Checkout my background and projects below!
            </div>
            {/* <img src={BackgroundImage} alt="Snow" className="padding60" style={{width:"100%"}}/> */}
            
            
            {/* Hello, my name is Blake Eversole here is a little bit about me... */}
            {/* "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - Patrick McKenzie */}
            
            </div>          
                    
                    
            </div>
        )
    }
}

export default AboutComponent