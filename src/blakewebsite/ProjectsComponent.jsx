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
                <div className="text-center font40 paddingBottom30 paddingTop60 mulishRegular">Projects</div>
                    <div className="row paddingLeft15" style={{"paddingTop":"60px"}}>
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
                                        <ul>
                                            <li>Web application to facilitate managing rental properties.</li>
                                            <li>Users can apply for rentals. Property managers can approve applications and move applicants to tenants.</li>
                                            <li>Developed with: Java/Spring Boot REST API, React front end, MYSQL relational database, ORM using Hibernate, Hosted with Microsoft Azure.</li>
                                        </ul>                                            
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="blueBackgroundColor whiteColor padding5 margin15 mulishLight">Java</div>
                                    <div className="blueBackgroundColor whiteColor padding5 margin15 mulishLight">Spring Boot REST API</div>
                                    <div className="blueBackgroundColor whiteColor padding5 margin15 mulishLight">React.js</div>
                                    <div className="blueBackgroundColor whiteColor padding5 margin15 mulishLight">MYSQL</div>
                                    <div className="blueBackgroundColor whiteColor padding5 margin15 mulishLight">Hibernate ORM</div>
                                    <div className="blueBackgroundColor whiteColor padding5 margin15 mulishLight">MS Azure</div>
                                </div>    
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    <div className="container">
                    <div className="row paddingLeft15" style={{"marginTop":"40px"}}>                        
                        <div className="col-4 text-center" style={{height:"20vh"}}>
                            <img className="whiteBackgroundColor my-auto paddtingTop60 blackColor" src={msp} alt="MSP" style={{width: "200px", height: "auto"}}/>                            
                        </div>
                        <div className="col-8">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6 text-left  mulishRegular font20">MyStudentsProgress.com</div>
                                </div>                                 
                                <div className="row">
                                    <div className="col-12 text-left mulishLight"><a href="https://msp.mystudentsprogress.com/MSP/index.cfm" target="_blank" rel="noreferrer">MyStudentsProgress.com</a></div>
                                </div>                                
                                <div className="row">
                                    <div className="col-12 text-left notoSansRegular">
                                        <ul>
                                            <li>Helped parents, teachers, administrators, and students aggregate data and communicate information effectively.</li>
                                            <li>Recorded student grades, attendance, class schedule, field trips, tuition payments etc...</li>
                                            <li>Developed with: C#/.NET Core backend, Razor/HTML/Bootstrap front end, SQL Server relational database.</li>
                                        </ul>                    
                                    </div>                                
                                </div>
                                <div className="row">
                                    <div className="blueBackgroundColor whiteColor padding5 margin15 mulishLight">C#</div>
                                    <div className="blueBackgroundColor whiteColor padding5 margin15 mulishLight">.NET Core</div>
                                    <div className="blueBackgroundColor whiteColor padding5 margin15 mulishLight">SQL Server</div>
                                    <div className="blueBackgroundColor whiteColor padding5 margin15 mulishLight">Bootstrap</div>
                                    <div className="blueBackgroundColor whiteColor padding5 margin15 mulishLight">Razor/HTML</div>
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