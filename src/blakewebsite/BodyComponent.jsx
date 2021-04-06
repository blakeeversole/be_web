import React, {Component} from 'react'
import ExperienceComponent from './ExperienceComponent'
import ProjectsComponent from './ProjectsComponent'
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';


class BodyComponent extends Component{
    render(){
        return(
            <div style={{padding:"50px"}}>
                <AboutComponent/>
                <ExperienceComponent/>
                <ProjectsComponent/>
                <ContactComponent/>
            </div>         
        )
    }
}

export default BodyComponent