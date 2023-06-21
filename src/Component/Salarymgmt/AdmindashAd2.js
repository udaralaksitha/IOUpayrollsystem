import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import axios from"axios";
import Template1 from './images/Template1.png';


export default class AdmindashAd2 extends Component {
    constructor(props) {
        super(props);
        this.state = {

                        bnsPercentage:"",
                        bnsMonthly:"",
                        bnsDeduction:"",
                        bnsDate:"",

                        hrsPercentage:"",
                        hrsMonthly:"",
                        hrsDeduction:"",
                        hrsDate:"",                        

        }
    }  

    handleInputChange = (e)=>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    validate=() =>{
        let isError = false;

        if(1>2){
            isError=true;
        }
        this.setState({
            ...this.state,
        });
        return isError;
    
};

addButton =(e) =>{
    localStorage.setItem('data', JSON.stringify(this.state));
}
onSubmit =(e) =>{

    e.preventDefault();
    //declaring error variable as err
    const err = this.validate();

    const{bnsPercentage,bnsMonthly,bnsDate,bnsDeduction,hrsPercentage,hrsMonthly,hrsDate,hrsDeduction} = this.state;

    const data ={
               
        bnsPercentage:bnsPercentage,
        bnsMonthly:bnsMonthly,
        bnsDeduction:bnsDeduction,
        bnsDate:bnsDate,


        hrsPercentage:hrsPercentage,
        hrsMonthly:hrsMonthly,
        hrsDeduction:hrsDeduction,
        hrsDate:hrsDate,
      
    }
    console.log(data)
        if(!err){

            axios.post("http://localhost:8400/empsalary/save",data).then((res) =>{
            if(res.data.success){
                this.setState({
                        
                        bnsPercentage:"",
                        bnsMonthly:"",
                        bnsDeduction:"",
                        bnsDate:"",

                        hrsPercentage:"",
                        hrsMonthly:"",
                        hrsDeduction:"",
                        hrsDate:"",

                    }); 
                    
                }
            });
    
    
        }else{
            alert('Invalid Type!');//if the speciman is having a name which is having less than 5 characters they are not saving as a valid speciman 
        }
    };




    

    render() { 
    return (
        <div id ="Template1.png" 
        style={{ 
            backgroundImage: `url(${Template1})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "100vh",            
            }}>

        <div
        style={{
            overflow: 'auto',
            height: '90%'
            }}>
   
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>            
        
            
        <div className='contain-table'> 
               
     
       <b style={{
        marginLeft:"1030px",
        marginTop:"2px"
        }}>ID</b>
                                   
        <input type="text" 
        className="form-control"
        style={{
            backgroundColor:"#dbba8b",
            marginLeft:"1070px",
            marginTop:"-30px",
            borderRadius:"10px",
            color:"black",
            fontWeight:"bold",
            width:"6rem",
           
        }}
            placeholder="MN008" />



                                        <b style={{
                                             marginLeft:"620px",
                                             fontFamily:"bodoni mt black"
                                             }}>
                                                PAYROLL ADDITIONAL
                                             </b>

                                        <br></br>
                                        <br></br>
                                        <br></br>

                                   <b
                                    style={{
                                        marginLeft:"230px"
                                        }}>
                                            Employee Name  
                                            </b>
                                   <input 
                                   type="text" 
                                   className="form-control"
                                   style={{    
                                    marginLeft:"360px",
                                    marginTop:"-30px",
                                    borderRadius:"5px",
                                    width:"20rem",
                                    backgroundColor:"#ececec",
                                    fontFamily:"monospace"
                                }}
                                   placeholder="MR.kamal hasan" />
                                  
                                    <br></br>
                                    <br></br>
                                   <b 
                                   style={{
                                    marginLeft:"630px",
                                    marginTop:"6px"
                                    }}>
                                        Employee ID </b>
                                
                                   <input 
                                   type="text" 
                                   className="form-control"
                                   style={{
                                    backgroundColor:"#76D7C4",
                                    marginLeft:"750px",
                                    height:"2.6rem",
                                    marginTop:"-32px",
                                    borderRadius:"10px",
                                    width:"6rem",
                                    color:"black",
                                    fontWeight:"bold"
                                }}
                                   placeholder="EM897" />

                                   <br></br>

                      
                                  <div 
                                  className ="form-group" 
                                  style={{
                                    marginLeft:"230px",
                                    marginBottom:'15px',
                                    width:"250px"
                                    }}>
                         
                         <input 
                         type="text"
                         className="form-control"
                         name=""
                         placeholder="Select Month"
                         />
                     </div>  

           
                                   <table  style={{border: "1px solid black ",width:"75%",marginLeft:"220px"}}>


    <tr style={{border: "1px solid black "}}>

        <td style={{border: "1px solid black ",width:"30%"}}><center> 
                                    
<div style={{paddingBottom: '10%'}}></div>

&nbsp;


<a className = "btn btn-info  btn-small custom" href = "#" style={{width:"12rem",color:"darkblue",fontFamily:"initial"}} >
   <i className = "fa-solid fa-tags"></i>&nbsp;BONUS
   </a>

  
                                   </center>
                                   
                                   <br></br>
                                   
                                   <tr style={{border: "none "}}>
                                     <td style={{border: "none "}} >
                                  
                          <b style={{marginLeft: "100px "}}>     PAID  IN  </b>

                                </td>
                                
                                </tr>

                                <br></br>
                               
                                <center>
                                <div className ="form-group" 
                                  style={{
                                   
                                    marginBottom:'15px',
                                    
                                    width:"150px"
                                    }}>
                         
                         <input type="date"
                         className="form-control"
                         name=""
                         placeholder="Enter Date"
                         />
                     </div>
                     </center>  
                                   </td>

        
                                   <td 
        style={{
            border: "1px solid black ",
            width:"40%"
            }}>
        <div>

      <tr 
      style={{
        border: "none "
        }}>
    
    <td 
    style={{
        border: "none "
        }}>
    <label
     style={{
        fontFamily:"monospace"
        }}>
            As a Percentage
    <input 
                                   type="text" 
                                   className="form-control"
                                   style={{    
                                   
                                    width:"6rem",
                                    backgroundColor:"#e9eff6",
                                    fontFamily:"monospace"
                                }}
                                   placeholder="" />
     </label>
    </td>




    <td 
    style={{
        border: "none "
        }}>
        <label 
        style={{
            fontFamily:"monospace"
            }}>
                April/Dec 

        <input 
                                   type="text" 
                                   className="form-control"
                                   style={{     
                                    width:"10rem",
                                    backgroundColor:"#e9eff6",
                                    fontFamily:"monospace"
                                }}
                                   placeholder="" />

        </label>
    </td>
</tr>

<tr 
style={{
    border: "none "
    }}>

<td 
style={{
    border: "none "
    }}>
    <label
     style={{
        fontFamily:"monospace"
        }}>
            RS
    <input 
                                   type="text" 
                                   className="form-control"
                                   style={{    
                                   
                                    width:"12rem",
                                    backgroundColor:"#e9eff6",
                                    fontFamily:"monospace"
                                }}
                                   placeholder="" />
     </label>
    </td>

</tr>

</div>
           
        </td>

                                   

                                   <td style={{border: "1px solid black ",width:"30%",textAlign:"center"}}>
            
        
                    
        <div >
        <button className="btn btn-secondary" style={{width:"7rem"}}>
        <i className = "fa-solid fa-address-card"></i>
            <a href="/createnewAddisalary" style={{textDecoration:'none', color:'white',paddingBottom: '10%' }}>&nbsp;ADD</a></button>
        </div>
        
        <div style={{paddingBottom: '10%'}}></div>

                     &nbsp;
                     
                    
                     <a className = "btn btn-warning btn-small custom" href = "/getempAddisalary/633ab040f7e2a54af812bd6f" style={{width:"7rem"}} >
                        <i className = "fa-solid fa-eye"></i>&nbsp;VIEW
                        </a>
                        

                                   </td>

    </tr>

    <tr style={{border: "1px solid black "}}>

        <td style={{border: "1px solid black "}}> <center> 
                                    
                                    <div style={{paddingBottom: '10%'}}></div>
                                    
                                    &nbsp;
                                   
                                    
                                    <a className = "btn btn-info  btn-small custom" href = "#" style={{width:"12rem",color:"darkblue",fontFamily:"initial"}} >
                                       <i className = "fa-regular fa-hourglass-half"></i>&nbsp;OT
                                       </a>
                                    
                                      
                                                                       </center>
                                   <br></br>
                                   
                                   <tr style={{border: "none "}}>
                                     <td style={{border: "none "}} >
                                  
                          <b style={{marginLeft: "100px "}}>     PAID  IN  </b>

                                </td>
                                
                                </tr>

                                <br></br>
                               
                                <center>
                                <div className ="form-group" 
                                  style={{
                                   
                                    marginBottom:'15px',
                                    
                                    width:"150px"
                                    }}>
                         
                         <input type="date"
                         className="form-control"
                         name=""
                         placeholder="Enter Date"
                         />
                     </div>
                     </center> 
                                   <br></br>
                                   
                                   
   
     <td 
    style={{
        border: "none "
        }}>
   
     <b style={{
        fontFamily:"monospace"
        }}>
        Worked hrs
        </b>
           

            </td>
 
            <td>
    <input 
                                   type="text" 
                                   className="form-control"
                                   style={{    
                                   
                                    width:"6rem",
                                    backgroundColor:"#e9eff6",
                                    fontFamily:"monospace"
                                }}
                                   placeholder="" />
   
    </td>

                                  
   
                                   <tr style={{border: "none "}}>
                                   <td 
    style={{
        border: "none "
        }}>
   
     <b style={{
        fontFamily:"monospace"
        }}>
        OT hrs
        </b>
           

            </td>
        
            <td>
    <input 
                                   type="text" 
                                   className="form-control"
                                   style={{    
                                   
                                    width:"6rem",
                                    backgroundColor:"#e9eff6",
                                    fontFamily:"monospace"
                                }}
                                   placeholder="" />
   
    </td>
                                </tr>

                                  
                                   <tr style={{border: "none "}}>
                                   <td 
    style={{
        border: "none "
        }}>
   
     <b style={{
        fontFamily:"monospace"
        }}>
        Total hrs
        </b>
           

            </td>
            <td>
    <input 
                                   type="text" 
                                   className="form-control"
                                   style={{    
                                   
                                    width:"6rem",
                                    backgroundColor:"#e9eff6",
                                    fontFamily:"monospace"
                                }}
                                   placeholder="" />
   
    </td>
                                </tr>

                                   </td>

       
                                   <td 
        style={{
            border: "1px solid black ",
            width:"40%"
            }}>
        <div>

      <tr 
      style={{
        border: "none "
        }}>
    
    <td 
    style={{
        border: "none "
        }}>
    <label
     style={{
        fontFamily:"monospace"
        }}>
            As a Percentage
    <input 
                                   type="text" 
                                   className="form-control"
                                   style={{    
                                   
                                    width:"6rem",
                                    backgroundColor:"#e9eff6",
                                    fontFamily:"monospace"
                                }}
                                   placeholder="" />
     </label>
    </td>




    <td 
    style={{
        border: "none "
        }}>
        <label 
        style={{
            fontFamily:"monospace"
            }}>
                Monthly

        <input 
                                   type="text" 
                                   className="form-control"
                                   style={{     
                                    width:"10rem",
                                    backgroundColor:"#e9eff6",
                                    fontFamily:"monospace"
                                }}
                                   placeholder="" />

        </label>
    </td>
</tr>

<tr 
style={{
    border: "none "
    }}>

<td 
style={{
    border: "none "
    }}>
    <label
     style={{
        fontFamily:"monospace"
        }}>
            RS
    <input 
                                   type="text" 
                                   className="form-control"
                                   style={{    
                                   
                                    width:"12rem",
                                    backgroundColor:"#e9eff6",
                                    fontFamily:"monospace"
                                }}
                                   placeholder="" />
     </label>
    </td>

</tr>

</div>
           
        </td>

                                   <td style={{border: "1px solid black ",width:"30%",textAlign:"center"}}>
            
        
                    
        <div >
        <button className="btn btn-secondary" style={{width:"7rem"}}>
        <i className = "fa-solid fa-address-card"></i>
            <a href="/createnewAddisalary" style={{textDecoration:'none', color:'white',paddingBottom: '10%' }}>&nbsp;ADD</a></button>
        </div>
        
        <div style={{paddingBottom: '10%'}}></div>

                     &nbsp;
                     
                    
                     <a className = "btn btn-warning btn-small custom" href = "/getempAddisalary/633ab275f7e2a54af812bd9f" style={{width:"7rem"}} >
                        <i className = "fa-solid fa-eye"></i>&nbsp;VIEW
                        </a>
                        

                                   </td>

    </tr>



    

    

</table>
<br></br>
<Link to="/AdminDetable">

<button
           
                                       
           className="btn btn-outline-secondary" style={{marginLeft:"630px",borderRadius:"05px",fontWeight: "bold"}}>
       


        <div style={{fontWeight:"00",color:'black'}}>   SUBMIT DETAILS &nbsp;
        <i className = "fa-solid fa-play"></i> 
       
            </div>
            
       </button>
        </Link>
            
        </div>
        </div>
        </div>
        </div>
        
    )
}
}
