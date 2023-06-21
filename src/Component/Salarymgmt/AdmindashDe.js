import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';
import Template1 from './images/Template1.png';
import axios from"axios";
import './AdmindashDe.css';





export default class AdmindashDe extends Component {  

    
      


    render() {
    return (
        <div className="Adminbody">
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
            
        <b style={{
             fontSize: "30px",
             marginBottom:"205px",
             marginLeft:"540px",
             fontFamily:"bahnschrift semi bold"
             }}>
                WELCOME MR.ADMIN!</b>
            
        <div className='contain-table'> 
        
        

        <b style={{
            marginLeft:"230px"
            }}>ROLL</b>
                                   
      <a className = "btn btn-dark btn-small custom" 
      href = "#" 
      style={{
        width:"10rem",
        color:"white",
        fontFamily:"initial",
        marginLeft:"10px",
        marginBottom:"1px",
        borderRadius:"30px"
        }} >
        <i className = "fa-solid fa-user-tie">
        </i>&nbsp;&nbsp;MANAGER
                                       </a>
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
                                                PAYROLL DEDUCTION
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
                                    width:"250px",
                                  
                                    }}>
                         
                         <select 
                         class="form-select" 
                         aria-label="Default select example"                        
                         >
                         <option selected>Select Month</option>
                         <option value="1">January</option>
                         <option value="2">February</option>
                         <option value="3">March</option>
                         <option value="4">April</option>
                         <option value="5">May</option>
                         <option value="6">June</option>
                         <option value="7">July</option>
                         <option value="8">August</option>
                         <option value="9">September</option>
                         <option value="10">October</option>
                         <option value="11">November</option>
                         <option value="12">December</option>
                         
                         </select>
                     </div>
                                   <br></br>
                                  
                                  

            <table  
            style={{
                border: "1px solid black ",
                width:"75%",
                marginLeft:"230px"
                }}>

                

    <tr 
    style={{
        border: "1px solid black "
        }}>

        <td 
        style={{
            border: "1px solid black ",
            height:"40%",width:"30%"
            }}> 
            <center> 
                                    
            <div 
            style={{
                paddingBottom: '10%'
                }}>

                </div>
                                    
                &nbsp;
                                    
                                    
                 <a className = "btn btn-info  btn-small custom" 
                 href = "#" 
                 style={{
                    width:"12rem",
                    color:"darkblue",
                    fontFamily:"initial"
                    }} >
                 <i className = "fa-solid fa-leaf">                   
                 </i>
                 &nbsp;
                 EPF
                 </a>
                                                                      
                 </center>
                  <br></br>

                 <tr 
                 style={{
                    border: "none "
                    }}>
                <td 
                style={{
                    border: "none "
                    }} >
                                  
                <b 
                style={{
                    marginLeft: "100px "
                    }}>    
                     PAID  IN  
                     </b>

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
                         placeholder=""
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
                                   

                                   

        <td 
        style={{
            border: "1px solid black ",
            width:"30%",
            textAlign:"center"
            }}>
            
        
                    
        <div >
        <button className="btn btn-success" style={{width:"7rem"}}>
        <i className = "fa-solid fa-address-card"></i>
            <a href="/createnewsalary" style={{textDecoration:'none', color:'white',paddingBottom: '10%' }}>&nbsp;ADD</a></button>
        </div>
        
        <div style={{paddingBottom: '10%'}}></div>

                     &nbsp;
                  
                    
                     <a className = "btn btn-warning btn-small custom" href ="/getempDesalary/632d25c20c15d62544888552" style={{width:"7rem"}} >
                        <i className = "fa-solid fa-eye"></i>&nbsp;VIEW
                        </a>
                        

                                   </td>

                                   
    </tr>
   

    <tr style={{border: "1px solid black "}}>

<td style={{border: "1px solid black "}}> <center> 
                            
                            <div style={{paddingBottom: '10%'}}></div>
                            
                            &nbsp;
                            
                            
                            <a className = "btn btn-info  btn-small custom" href = "#" style={{width:"12rem",color:"darkblue",fontFamily:"initial"}} >
                                       <i className = "fa-solid fa-sheet-plastic"></i>&nbsp;TAX
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
    <center>
                
    <div >
    <button className="btn btn-success" style={{width:"7rem"}}>
    <i className = "fa-solid fa-address-card"></i>
        <a href="/createnewsalary" style={{textDecoration:'none', color:'white',paddingBottom: '10%' }}>&nbsp;ADD</a></button>
    </div>
    </center>
    <center>
    <div style={{paddingBottom: '10%'}}></div>

                 &nbsp;
                 
                
                 <a className = "btn btn-warning btn-small custom" href ="/getempDesalary/632d32fe0c15d62544888559" style={{width:"7rem"}} >
                    <i className = "fa-solid fa-eye"></i>&nbsp;VIEW
                    </a>
                    </center>

                               </td>

</tr>


    <tr style={{border: "1px solid black "}}>

        <td style={{border: "1px solid black "}}> <center> 
                                    
                                    <div style={{paddingBottom: '10%'}}></div>
                                    
                                    &nbsp;
                                    
                                    
                                    <a className = "btn btn-info  btn-small custom" href = "#" style={{width:"12rem",color:"darkblue",fontFamily:"initial"}} >
                                       <i className = "fa-solid fa-shield-halved"></i>&nbsp;ETF
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
            <center>
                        
            <div >
            <button className="btn btn-success" style={{width:"7rem"}}>
            <i className = "fa-solid fa-address-card"></i>
                <a href="/createnewsalary" style={{textDecoration:'none', color:'white',paddingBottom: '10%' }}>&nbsp;ADD</a></button>
            </div>
            </center>
            <center>
            <div style={{paddingBottom: '10%'}}></div>
    
                         &nbsp;
                         
                        
                         <a className = "btn btn-warning btn-small custom" href ="/getempDesalary/632d32fe0c15d62544888559" style={{width:"7rem"}} >
                            <i className = "fa-solid fa-eye"></i>&nbsp;VIEW
                            </a>
                            </center>
    
                                       </td>

    </tr>

    

</table>


    <br></br>   
        

<Link to="/AdmindashAd1">
<button
           
                                       
           className="btn btn-outline-secondary" style={{marginLeft:"1070px",borderRadius:"13px",fontFamily: "font-italic",fontWeight:"bold"}}
       >


        <div style={{fontWeight:"00",color:'black'}}>    Next &nbsp;
        <i className = "fa-solid fa-circle-chevron-right"></i> 
        
            </div>
            
       </button>
        </Link>

        

        
            
        </div>
        
        </div>
       
        </div>
        
        </div>
        </div>
        
        
    )
}

}