import React, {Component} from 'react'
import BE from '../BE.svg';
import HeaderComponent from './HeaderComponent.jsx'
import BodyComponent from './BodyComponent.jsx'

class MainPageComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            myVar : ''
        }
        this.myFunction = this.myFunction.bind(this)
        this.showPage = this.showPage.bind(this)
        
    }    

    myFunction() {
        this.myVar = setTimeout(this.showPage, 2000);
    }
    
    showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
    }

    render(){
        return(
            <div>    
                <div className="App-header" onLoad={this.myFunction}>
                    <div id="loader" className="text-center">
                        <img src={BE} className="App-be" alt="be" />
                    </div>

                    <div id="myDiv" className="animate-bottom displayNone">  
                        
                        <HeaderComponent/>
                        <BodyComponent/>
                        
                    </div>          
            
                </div>
            </div>
        )
    }
}

export default MainPageComponent