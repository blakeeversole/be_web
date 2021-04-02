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
                    <div className="row text-center">
                        
                    </div>

                    <div className="row padding15">
                        <div className="col-4 text-center">
                            <button className="col-8" onClick={()=>{this.setState({show1:true, show2:false, show3: false})}}>Junior Full Stack Developer</button>
                            <div className="col-4"></div>
                            <button className="col-8" onClick={()=>{this.setState({show2:true, show1:false, show3: false})}}>Account Service</button>
                            <div className="col-4"></div>
                            <button className="col-8" onClick={()=>{this.setState({show3:true, show1:false, show2: false})}}>CSR</button>
                            <div className="col-4"></div>
                        </div>
                        <div className="col-8">
                        {
                            this.state.show1? 
                            <div>
                                <div className="col-6" style={{float:"left"}}>Junior Software Developer</div>
                                <div className="col-6" style={{float:"right"}}>MyStudentsProgress.com</div>
                                <div className="col-12" style={{float:"left"}}>Oct 2018 – Jun 2020</div>
                                <div className="col-12" style={{float:"left"}}>
                                    Contributed to development team utilizing C# and .NET Core to build out several modules for re-write of legacy product.<br></br>
                                    Designed database tables for relational database using normalization best practices.<br></br>
                                    Wrote stored procedures in SQL Server to facilitate CRUD operations as well as custom reports.<br></br>
                                    Utilized JavaScript via jQuery and AJAX to provide responsive web design without reloading the entire page.
                                </div>
                            </div> : null
                        }
                        {
                            this.state.show2? 
                            <div>
                                <div className="col-6" style={{float:"left"}}>Account Services</div>
                                <div className="col-6" style={{float:"right"}}>DATA ACCESS SOLUTIONS, INC</div>
                                <div className="col-12" style={{float:"left"}}>Jul 2016 – Oct 2018</div>
                                <div className="col-12" style={{float:"left"}}>
                                    Worked with a development team through the entire SDLC to build a CRM application for the Girl Scouts of Middle Tennessee.<br></br>
                                    Met with client to understand product needs and worked with software developers to help design product architecture.<br></br>
                                    Created specification documents for client which were later used as product specs for the development team.<br></br>
                                    Manually tested client specs before user testing. Created use case testing documentation.
                                </div>
                            </div> : null
                        }
                        {
                            this.state.show3? 
                            <div>
                                <div className="col-6" style={{float:"left"}}>Customer Service Representative</div>
                                <div className="col-6" style={{float:"right"}}>MyStudentsProgress.com</div>
                                <div className="col-12" style={{float:"left"}}>Feb 2016 – Jul 2016</div>
                                <div className="col-12" style={{float:"left"}}>
                                    Solved customer support questions via email and phone for the MyStudentsProgress school information system product.<br></br>
                                    Trained new customers on how to use the product.
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