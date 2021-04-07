import React, {Component} from 'react'
import BE from '../BE.png';


class HeaderComponent extends Component{
    render(){

        return(
            <header>
                <nav className="navbar navbar-expand-md fixed-top">
                    
                    {/* <img src={BE} alt="Blake" style={{width:"60px", height:"60px", "marginRight": "15px"}} /> */}
                    <div className="navbar-brand mulishSemiBold"><a href="/#about" style={{"fontSize":"35px"}}>Blake Eversole<br/>
                    <p className="mulishRegular" style={{"fontSize":"15px"}}>Full Stack Developer</p></a></div>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {/* <li className="nav-link"><a href="/#home">Home</a></li> */}
                        {/* <li className="nav-link mulishRegular"><a href="/#about">About</a></li> */}
                        <li className="nav-link mulishRegular hoverBlue"><a href="/#experience">Experience</a></li>
                        <li className="nav-link mulishRegular hoverBlue"><a href="/#projects">Projects</a></li>
                        <li className="nav-link mulishRegular hoverBlue"><a href="/#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>   
        )
    }
}

export default HeaderComponent;