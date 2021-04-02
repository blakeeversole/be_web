import React, {Component} from 'react'


class ExperienceComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
           show1: true
           
        }      
    }

    render(){
        return(
                <div id="experience" className="background1 paddingTop60">
                    <div className="text-center bigFont paddingBottom30"><u>Experience</u></div>
                    <div className="row paddingLeft15">
                        <div className="col-4 border-left border-dark text-left fixLine">
                            <button className="col-8 btn buttonClass text-left" onClick={()=>{this.setState({show1:true, show2:false, show3: false})}}>Junior Full Stack Developer</button>
                            <button className="col-8 btn buttonClass text-left" onClick={()=>{this.setState({show2:true, show1:false, show3: false})}}>Account Service</button>
                            <button className="col-8 btn buttonClass text-left" onClick={()=>{this.setState({show3:true, show1:false, show2: false})}}>CSR</button>
                        </div>
                        <div className="col-8">
                        {
                            this.state.show1? 
                            <div className="container">
                                <div className="row">
                                    <div className="col-6 text-left">Junior Software Developer</div>
                                </div>                                
                                <div className="row">
                                    <div className="col-12 text-left">MyStudentsProgress.com | Oct 2018 – Jun 2020</div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-12 text-left">
                                        Contributed to development team utilizing C# and .NET Core to build out several modules for re-write of legacy product.<br></br>
                                        Designed database tables for relational database using normalization best practices.<br></br>
                                        Wrote stored procedures in SQL Server to facilitate CRUD operations as well as custom reports.<br></br>
                                        Utilized JavaScript via jQuery and AJAX to provide responsive web design without reloading the entire page.
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="blackBackgroundColor whiteColor padding5 margin15">C#</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15">.NET Core</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15">SQL Server</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15">JavaScript</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15">jQuery</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15">AJAX</div>
                                </div>    
                            </div> : null
                        }
                        {
                            this.state.show2? 
                            <div>
                                <div className="row">
                                    <div className="col-6 text-left">Account Services</div>
                                </div>                                 
                                <div className="row">
                                    <div className="col-12 text-left">Data Access Solutions Inc. | Jul 2016 – Oct 2018</div>
                                </div>                                
                                <div className="row">
                                    <div className="col-12 text-left">
                                        Worked with a development team through the entire SDLC to build a CRM application for the Girl Scouts of Middle Tennessee.<br></br>
                                        Met with client to understand product needs and worked with software developers to help design product architecture.<br></br>
                                        Created specification documents for client which were later used as product specs for the development team.<br></br>
                                        Manually tested client specs before user testing. Created use case testing documentation.
                                    </div>                                
                                </div>
                            </div> : null
                        }
                        {
                            this.state.show3? 
                            <div>
                                <div className="row">
                                    <div className="col-6 text-left">Customer Service Representative</div>
                                </div>                                
                                <div className="row">
                                    <div className="col-12 text-left">MyStudentsProgress.com | Feb 2016 – Jul 2016</div>
                                </div>
                                <div className="row">
                                    <div className="col-12 text-left">
                                        Solved customer support questions via email and phone for the MyStudentsProgress school information system product.<br></br>
                                        Trained new customers on how to use the product.
                                    </div>                                
                                </div>
                            </div> : null
                        }
                        </div>
                    </div>
                </div>    
        )
    }
}

export default ExperienceComponent