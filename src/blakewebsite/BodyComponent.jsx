import React, {Component} from 'react'
import ExperienceComponent from './ExperienceComponent'
import ProjectsComponent from './ProjectsComponent'
import githubIcon from '../github-icon.png';
import linkedinIcon from '../linkedin-icon.png';
import emailIcon from '../email-icon.png';


class BodyComponent extends Component{
    render(){
        return(
            <div>
                <div id="about" className="background2 paddingTop60">
                    <div className="text-center blackColor bigFont">
                        Experienced Full Stack Software Developer with a passion for problem solving and creating 
                        solutions. Utilizes excellent communication to work collaboratively within a team. 
                        Knowledgeable on object-oriented programming principles. Positive attitude.
                    </div>
                </div>
                <ExperienceComponent/>
                <ProjectsComponent/>
                <div id="contact" className="background1 paddingTop60">
                <div className="blackBackgroundColor contactBox parentTriangle">
                    
                    <div class="childTriangle text-center"></div>
                        <div className="row" style={{"padding-top": "210px", "margin-left": "40%"}}>
                            <div className="whiteBackgroundColor blackColor padding5 margin15">
                                <img src={emailIcon} alt="email" style={{width:"60px", height:"60px"}}/>
                            </div>
                            <div className="whiteBackgroundColor blackColor padding5 margin15">
                                <img src={githubIcon} alt="github" style={{"margin-top":"5px"}} />
                            </div>
                            <div className="whiteBackgroundColor blackColor padding5 margin15">
                                <img src={linkedinIcon} alt="linkedin" />
                            </div>                         
                        </div>                           
                </div>
                    
                </div>
            </div>         
        )
    }
}

export default BodyComponent