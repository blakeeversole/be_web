import React, {Component} from 'react'
import msp from '../msp.png';
import pmsolutions from '../pmsolutions.png';


class ProjectsComponent extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //        show1: true
           
    //     }      
    // }

    render(){
        return(
            <div id="projects" className="background2 padding60">
                <div className="container">
                <div className="text-center font40 paddingBottom30 paddingTop60 mulishRegular"><u>Projects</u></div>
                    <div className="row paddingLeft15" style={{"padding-top":"60px"}}>
                        <div className="col-4 text-center" style={{height:"20vh"}}>
                            <img className="whiteBackgroundColor my-auto paddtingTop60 blackColor" src={pmsolutions} alt="PMSolutions" style={{width: "200px", height: "auto"}}/>
                        </div>
                        <div className="col-8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 text-left mulishRegular font20">Property Management Software</div>
                                </div>                                
                                <div className="row">
                                    <div className="col-12 text-left mulishLight"><a href="https://www.pmsolutions.xyz" target="_blank" rel="noreferrer">pmsolutions.xyz</a></div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-12 text-left notoSansRegular">
                                        Web application to facilitate managing rental properties.<br></br>
                                        Users can apply for rentals. Property managers can approve applications and move applicants to tenants.<br></br>
                                        Developed with: Java/Spring Boot REST API, React front end, MYSQL relational database, ORM using Hibernate, Hosted with Microsoft Azure.
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="blackBackgroundColor whiteColor padding5 margin15 mulishLight">Java</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15 mulishLight">Spring Boot REST API</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15 mulishLight">React.js</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15 mulishLight">MYSQL</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15 mulishLight">Hibernate ORM</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15 mulishLight">MS Azure</div>
                                </div>    
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    <div className="container">
                    <div className="row paddingLeft15" style={{"margin-top":"40px"}}>                        
                        <div className="col-4 text-center" style={{height:"20vh"}}>
                            <img className="whiteBackgroundColor my-auto paddtingTop60 blackColor" src={msp} alt="MSP" style={{width: "200px", height: "auto"}}/>                            
                        </div>
                        <div className="col-8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6 text-left  mulishRegular font20">MyStudentsProgress.com</div>
                                </div>                                 
                                <div className="row">
                                    <div className="col-12 text-left mulishLight"><a href="https://www.MyStudentsProgress.com" target="_blank" rel="noreferrer">MyStudentsProgress.com</a></div>
                                </div>                                
                                <div className="row">
                                    <div className="col-12 text-left notoSansRegular">
                                        Helped parents, teachers, administrators, and students aggregate data and communicate information effectively.<br></br>
                                        Recorded student grades, attendance, class schedule, field trips, tuition payments etc...<br></br>
                                        Developed with: C#/.NET Core backend, Razor/HTML/Bootstrap front end, SQL Server relational database.<br></br>
                                    </div>                                
                                </div>
                                <div className="row">
                                    <div className="blackBackgroundColor whiteColor padding5 margin15 mulishLight">C#</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15 mulishLight">.NET Core</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15 mulishLight">SQL Server</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15 mulishLight">Bootstrap</div>
                                    <div className="blackBackgroundColor whiteColor padding5 margin15 mulishLight">Razor/HTML</div>
                                </div> 
                            </div>
                        </div>
                    </div>

</div>
                </div>
        )
    }
}

export default ProjectsComponent