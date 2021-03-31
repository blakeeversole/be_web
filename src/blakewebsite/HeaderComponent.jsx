import React, {Component} from 'react'


class HeaderComponent extends Component{
    render(){

        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <div className="navbar-brand">Blake Eversole</div>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li className="nav-link"><a href="/#home">Home</a></li>
                        <li className="nav-link"><a href="/#about">About</a></li>
                        <li className="nav-link"><a href="/#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent;