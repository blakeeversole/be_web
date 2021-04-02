import React, {Component} from 'react'
import BE from '../BE.png';


class HeaderComponent extends Component{
    render(){

        return(
            <header>
                <nav className="navbar navbar-expand-md fixed-top">
                    
                    <img src={BE} alt="Blake" style={{width:"60px", height:"60px", "margin-right": "15px"}} />
                    <div className="navbar-brand"><a href="/#about">Blake Eversole</a></div>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {/* <li className="nav-link"><a href="/#home">Home</a></li> */}
                        <li className="nav-link"><a href="/#about">About</a></li>
                        <li className="nav-link"><a href="/#experience">Experience</a></li>
                        <li className="nav-link"><a href="/#projects">Projects</a></li>
                        <li className="nav-link"><a href="/#contact">Contact</a></li>
                        <li className="nav-link"><a>Resume</a></li>
                    </ul>
                </nav>
            </header>   
        )
    }
}

export default HeaderComponent;