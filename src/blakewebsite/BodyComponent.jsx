import React, {Component} from 'react'
import ExperienceComponent from './ExperienceComponent'
import ProjectsComponent from './ProjectsComponent'
import githubIcon from '../github-icon.png';
import linkedinIcon from '../linkedin-icon.png';
import emailIcon from '../email-icon.png';


class BodyComponent extends Component{
    render(){
        return(
            <div style={{padding:"50px"}}>
                <div id="about" className="background2 padding60">
                    <div className="text-center blackColor font40">
                        Experienced Full Stack Software Developer with a passion for problem solving and creating 
                        solutions. Utilizes excellent communication to work collaboratively within a team. 
                        Knowledgeable on object-oriented programming principles. Positive attitude.
                    </div>
                </div>
                <ExperienceComponent/>
                <ProjectsComponent/>
                <div id="contact" className="background1 padding60">
                    <div className="blackBackgroundColor contactBox">
                        <div class="row h-100">
                            <div class="col-sm-12 autoMargin1">
                                <div className="mulishRegular whiteColor font40 text-center">Contact</div>
                                <div className="row text-center paddingTop60">
                                    <div className="col-3"></div>
                                    <div className="col-2">
                                        <img className="float-right whiteBackgroundColor blackColor" src={emailIcon} alt="email" style={{width:"55px", height:"55px"}}/>
                                    </div>
                                    <div className="col-2">
                                        <img className="whiteBackgroundColor blackColor" src={githubIcon} alt="github" style={{"margin-top":"3px"}} />
                                    </div>
                                    <div className="col-2">
                                        <img className="float-left whiteBackgroundColor blackColor" src={linkedinIcon} alt="linkedin" />
                                    </div>                         
                                </div>
                            </div>
                        </div>                         
                    </div>                        
                </div>
            </div>         
        )
    }
}

export default BodyComponent