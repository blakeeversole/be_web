import React, {Component} from 'react'
import ExperienceComponent from './ExperienceComponent'
import ProjectsComponent from './ProjectsComponent'


class BodyComponent extends Component{
    render(){
        return(
            <div>
                <div id="home" className="background1 paddingTop60">
                    <div className="text-center whiteText bigFont">
                        Experienced Full Stack Software Developer with a passion for problem solving and creating 
                        solutions. Utilizes excellent communication to work collaboratively within a team. 
                        Knowledgeable on object-oriented programming principles. Positive attitude.
                    </div>
                </div>
                <div id="about" className="background2 paddingTop60">
                    <div className="text-center whiteText bigFont">
                        Experienced Full Stack Software Developer with a passion for problem solving and creating 
                        solutions. Utilizes excellent communication to work collaboratively within a team. 
                        Knowledgeable on object-oriented programming principles. Positive attitude.
                    </div>
                </div>
                <ExperienceComponent/>
                <ProjectsComponent/>
                <div id="contact" className="background1 paddingTop60">
                    <div className="text-center whiteText bigFont">
                        Email: BlakeEversole@pm.me<br></br>
                        LinkedIn: linkedin.com/in/blakeeversole<br></br>
                        Github: github.com/blakeeversole<br></br>
                    </div>
                </div>
            </div>         
        )
    }
}

export default BodyComponent