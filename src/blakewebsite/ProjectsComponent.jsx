import React, {Component} from 'react'


class ProjectsComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
           show1: true
           
        }      
    }

    render(){
        return(
            <div id="projects" className="background2 paddingTop60">
                <div className="text-center bigFont paddingBottom30"><u>Projects</u></div>
                    <div className="row paddingLeft15">
                        <div className="col-4 border-left border-dark text-left fixLine">
                            <button className="col-8 btn buttonClass text-left" onClick={()=>{this.setState({show1:true, show2:false, show3: false})}}>Property Management Software</button>
                            <button className="col-8 btn buttonClass text-left" onClick={()=>{this.setState({show2:true, show1:false, show3: false})}}>School Information System</button>
                        </div>
                        <div className="col-8">
                        {
                            this.state.show1? 
                            <div className="container">
                                <div className="row">
                                    <div className="col-6 text-left">Property Management Software</div>
                                </div>                                
                                <div className="row">
                                    <div className="col-12 text-left">pmsolutions.xyz</div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-12 text-left">
                                        Web application to facilitate managing rental properties.<br></br>
                                        Users can apply for rentals. Property managers can approve applications and move applicants to tenants.<br></br>
                                        Developed with: Java/Spring Boot REST API, React front end, MYSQL relational database, ORM using Hibernate, Hosted with Microsoft Azure.
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="blackBackgroundColor whiteColor padding5 margin15">Java</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15">Spring Boot REST API</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15">React.js</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15">MYSQL</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15">Hibernate ORM</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15">MS Azure</div>
                                </div>    
                            </div> : null
                        }
                        {
                            this.state.show2? 
                            <div>
                                <div className="row">
                                    <div className="col-6 text-left">MyStudentsProgress.com</div>
                                </div>                                 
                                <div className="row">
                                    <div className="col-12 text-left">MyStudentsProgress.com</div>
                                </div>                                
                                <div className="row">
                                    <div className="col-12 text-left">
                                        Helped parents, teachers, administrators, and students aggregate data and communicate information effectively.<br></br>
                                        Recorded student grades, attendance, class schedule, field trips, tuition payments etc...<br></br>
                                        Developed with: C#/.NET Core backend, Razor/HTML/Bootstrap front end, SQL Server relational database.<br></br>
                                    </div>                                
                                </div>
                                <div className="row">
                                    <div className="blackBackgroundColor whiteColor padding5 margin15">C#</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15">.NET Core</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15">SQL Server</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15">Bootstrap</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15">Razor/HTML</div>
                                </div> 
                            </div> : null
                        }
                        </div>
                    </div>
                </div>
                // <div id="projects" className="background2 paddingTop60">
                //     <div className="row text-center">
                        
                //     </div>

                //     <div className="row padding15">
                //         <div className="col-4 text-center">
                //             <button className="col-8" onClick={()=>{this.setState({show1:true, show2:false, show3: false})}}>Property Management Software</button>
                //             <div className="col-4"></div>
                //             <button className="col-8" onClick={()=>{this.setState({show2:true, show1:false, show3: false})}}>School Information System</button>
                //             <div className="col-4"></div>
                //         </div>
                //         <div className="col-8">
                //         {
                //             this.state.show1? 
                //             <div>
                //                 <div className="col-6" style={{float:"left"}}>Property Management Software</div>
                //                 <div className="col-12" style={{float:"left"}}>
                //                     Web application to facilitate managing rental properties.<br></br>
                //                     Users can apply for rentals. Property managers can approve applications and move applicants to tenants.<br></br>
                //                     Developed with: Java/Spring Boot REST API, React front end, MYSQL relational database, ORM using Hibernate, Hosted with Microsoft Azure.
                //                 </div>
                //             </div> : null
                //         }
                //         {
                //             this.state.show2? 
                //             <div>
                //                 <div className="col-6" style={{float:"left"}}>MyStudentsProgress.com</div>
                //                 <div className="col-12" style={{float:"left"}}>
                //                 Web-based school information system for K-12 private schools.<br></br>
                //             Helped parents, teachers, administrators, and students aggregate data and communicate information effectively.<br></br>
                //             Recorded student grades, attendance, class schedule, field trips, tuition payments etc...<br></br>
                //             Developed with: C#/.NET Core backend, Razor/HTML/Bootstrap front end, SQL Server relational database.<br></br>
                //                 </div>
                //             </div> : null
                //         }
                //         </div>
                //     </div>
                // </div>    
        )
    }
}

export default ProjectsComponent