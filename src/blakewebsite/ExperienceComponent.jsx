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
                <div id="experience" className="background3 padding60">
                    <div className="text-center paddingBottom30 paddingTop60 mulishRegular font40">Experience</div>
                    <div className="container">
                    <div className="row paddingLeft15" style={{"paddingTop":"60px"}}>
                        {/* <div className="col-4 text-center" style={{height:"20vh"}}>
                            <img className="whiteBackgroundColor my-auto paddtingTop60 blackColor" src={pmsolutions} alt="PMSolutions" style={{width: "200px", height: "auto"}}/>
                        </div> */}
                        <div className="col-4 border-left border-dark text-center fixLine">
                            <button className="col-12 btn buttonClass text-center mulishLight font20" onClick={()=>{this.setState({show1:true, show2:false, show3: false})}}>Junior Full Stack Developer</button>
                            <button className="col-12 btn buttonClass text-center mulishLight font20" onClick={()=>{this.setState({show2:true, show1:false, show3: false})}}>Account Services</button>
                            <button className="col-12 btn buttonClass text-center mulishLight font20" onClick={()=>{this.setState({show3:true, show1:false, show2: false})}}>CSR</button>
                        </div>
                        <div className="col-8">
                        {
                            this.state.show1? 
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 text-left mulishRegular">Junior Software Developer</div>
                                </div>                                
                                <div className="row">
                                    <div className="col-12 text-left mulishLight">MyStudentsProgress.com | Oct 2018 – Jun 2020</div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-12 text-left notoSansRegular">
                                        <ul>
                                            <li>Contributed to development team utilizing C# and .NET Core to build out several modules for re-write of legacy product.</li>
                                            <li>Designed database tables for relational database using normalization best practices.</li>
                                            <li>Wrote stored procedures in SQL Server to facilitate CRUD operations as well as custom reports.</li>
                                            <li>Utilized JavaScript via jQuery and AJAX to provide responsive web design without reloading the entire page.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="blueBackgroundColor whiteColor padding5 margin15 mulishLight">C#</div>
                                    <div className="blueBackgroundColor whiteColor padding5 margin15 mulishLight">.NET Core</div>
                                    <div className="blueBackgroundColor whiteColor padding5 margin15 mulishLight">SQL Server</div>
                                    <div className="blueBackgroundColor whiteColor padding5 margin15 mulishLight">JavaScript</div>
                                    <div className="blueBackgroundColor whiteColor padding5 margin15 mulishLight">jQuery</div>
                                    <div className="blueBackgroundColor whiteColor padding5 margin15 mulishLight">AJAX</div>
                                </div>    
                            </div> : null
                        }
                        {
                            this.state.show2? 
                            <div>
                                <div className="row">
                                    <div className="col-12 text-left mulishRegular">Account Services</div>
                                </div>                                 
                                <div className="row">
                                    <div className="col-12 text-left mulishLight">Data Access Solutions Inc. | Jul 2016 – Oct 2018</div>
                                </div>                                
                                <div className="row">
                                    <div className="col-12 text-left notoSansRegular">
                                        <ul>
                                            <li>Worked with a development team through the entire SDLC to build a CRM application for the Girl Scouts of Middle Tennessee.</li>
                                            <li>Met with client to understand product needs and worked with software developers to help design product architecture.</li>
                                            <li>Created specification documents for client which were later used as product specs for the development team.</li>
                                            <li>Manually tested client specs before user testing. Created use case testing documentation.</li>
                                        </ul>                                        
                                    </div>                                
                                </div>
                            </div> : null
                        }
                        {
                            this.state.show3? 
                            <div>
                                <div className="row">
                                    <div className="col-12 text-left mulishRegular">Customer Service Representative</div>
                                </div>                                
                                <div className="row">
                                    <div className="col-12 text-left mulishLight">MyStudentsProgress.com | Feb 2016 – Jul 2016</div>
                                </div>
                                <div className="row">
                                    <div className="col-12 text-left notoSansRegular">
                                        <ul>
                                            <li>Solved customer support questions via email and phone for the MyStudentsProgress school information system product.</li>
                                            <li>Trained new customers on how to use the product.</li>
                                        </ul> 
                                    </div>                                
                                </div>
                            </div> : null
                        }
                        </div>
                        </div>
                    </div>
                </div>    
        )
    }
}

export default ExperienceComponent