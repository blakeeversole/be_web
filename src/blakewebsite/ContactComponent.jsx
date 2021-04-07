import React, {Component} from 'react'
import githubIcon from '../github-icon.png';
import linkedinIcon from '../linkedin-icon.png';
import emailIcon from '../email-icon.png';

class ContactComponent extends Component{

    render(){
        return(
            <div id="contact" className="paddingTop60">
                    <div className="blueBackgroundColor contactBox">
                        <div className="row h-100">
                            <div className="col-sm-12 autoMargin1">
                                <div className="mulishRegular whiteColor font40 text-center">Contact</div>
                                <div className="row text-center paddingTop60">
                                    <div className="col-3"></div>
                                    <div className="col-2">
                                        <a href="mailto:blakeeversole@pm.me" target="_blank" rel="noreferrer"><img className="float-right blueBackgroundColor blackColor" src={emailIcon} alt="email" style={{width:"55px", height:"55px"}}/></a>
                                    </div>
                                    <div className="col-2">
                                    <a href="https://www.github.com/blakeeversole" target="_blank" rel="noreferrer"><img className="blueBackgroundColor blackColor" src={githubIcon} alt="github" /></a>
                                    </div>
                                    <div className="col-2">
                                        <a href="https://www.linkedin.com/in/blakeeversole" target="_blank" rel="noreferrer"><img className="float-left blueBackgroundColor blackColor" src={linkedinIcon} alt="linkedin" style={{width:"45px", "marginTop":"9px"}} /></a>
                                    </div>                         
                                </div>
                            </div>
                        </div>                         
                    </div>                        
                </div>
                
        )
    }
}

export default ContactComponent