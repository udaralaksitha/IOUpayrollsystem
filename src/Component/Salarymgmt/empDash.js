import Chart from "react-apexcharts";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import React,{Component} from 'react';
import axios from 'axios';
import Template1 from './images/Template1.png';


export default class empDash extends Component{

  constructor(props){
    super(props);
    
    this.state={
      empsalary:[],
      addiempsalary:[],
      TotalDe: [],
      TotalAd:[],
      test: [],
      rows: [],
      
    };    
    
  }

  //understanding value changes
  handleInputChange = (e) => {
    //handle input change invoking
    const { name, value } = e.target;
    console.log(name);

    if (name === "TotalDe") {
      let calculation = this.state.Deduction++;
      console.log(calculation);

      this.setState({
        Remaining: calculation,
      });
    }

    this.setState({
      //state up
      [name]: value,
    });
  };



  //understanding value changes
  handleInputChange = (e) => {
    //handle input change invoking
    const { name, value } = e.target;
    console.log(name);

    if (name === "TotalAd") {
      let calculation = this.state.Additional++;
      console.log(calculation);

      this.setState({
        Remaining: calculation,
      });
    }

    this.setState({
      //state up
      [name]: value,
    });
  }; 

  

  componentDidMount(){
    this.retrieveAddiEmpsalary();
    this.retrieveEmpsalary();
  }
 

  retrieveEmpsalary(){
    axios.get("http://localhost:8400/empsalary").then(res =>{
    if(res.data.success){
         this.setState({
          empsalary:res.data.existingEmpsalary
         });
         //let typeArray = []
         console.log(this.state.empsalary)
         //console.log(this.state.empsalary[0].Type)
         //this.makeExcelData(res.data.existingEmpsalary)
         //this.state.empsalary.map((emp) =>(
          //typeArray.push(emp.Type)
        //))
        //console.log(typeArray)
      }
    });
  }
  retrieveAddiEmpsalary(){
    axios.get("http://localhost:8400/addiempsalary").then(res =>{
    if(res.data.success){
         this.setState({
          addiempsalary:res.data.existingAddiEmpsalary
         });
         console.log(this.state.addiempsalary)
         this.makeExcelData(res.data.existingAddiEmpsalary)
      }
    });
  }

  // filterData(empsalary, searchKey) {
  //   const result = empsalary.filter((empsalary) =>
  //     empsalary.Type.toLowerCase().includes(searchKey)
  //   );

  //   this.setState({ empsalary: result });
  // }


  render(){
    let totDeduction = 0;
    let totAdditional = 0;
    return(
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

         
        
          
      <div className='contain-table' style={{border:"none"}}> 
     


                                    <b style={{fontSize:"30px",fontFamily:"eras bold itc",marginLeft:"600px",color:"grey"}}>Welcome Employee!</b> 
                                      <br></br>
                                      <br></br>

                                 <b style={{marginLeft:"230px", color:"blue",fontSize:"15px"}}>DASHBOARD OVERVIEW </b>  
                                 <b 
                                   style={{
                                    marginLeft:"230px",
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
                                    marginLeft:"880px",
                                    marginBottom:'15px',
                                    width:"250px"
                                    }}>
                         
                         <input 
                         type="date"
                         className="form-control"
                         name=""
                         placeholder="Enter Date"
                         />
                     </div>
                                 <br></br>
                                    
                             
                                                                           
        
          <table  style={{border: "1px solid black ",width:"80%",marginLeft:"220px",height:"14rem"}}>

          

  <tr style={{border: "1px solid black ", backgroundColor:"skyblue",width:"40%",height:"7rem"}}>
<td>
  <div >
    <center> <b>EMPLOYEE'S NET PAY</b></center>

<br></br>



<center>

<td style={{border: "none "}}>
<label>
<input 
                                   type="text" 
                                   className="form-control"
                                   style={{    
                                    
                                   
                                    width:"14rem",
                                    backgroundColor:"#ececec",
                                    fontFamily:"monospace"
                                }}
                                   placeholder="00000" />

</label>
</td>
</center>


</div>

</td>                                                          

      <td style={{border: "1px solid black ",width:"30%"}}>
      <div >
        <div>
    <center> <b>EMPLOYEE MONTHLY SALARY</b></center>

<br></br>

<center>

<td style={{border: "none "}}>

<label>

<input 
                                   type="text" 
                                   className="form-control"
                                   style={{    
                                    
                                   
                                    width:"14rem",
                                    backgroundColor:"#ececec",
                                    fontFamily:"monospace"
                                }}
                                   placeholder="00000" />

</label>


</td>
</center>


</div>
</div>
          
                                 </td>

                                 

      <td style={{border: "1px solid black " ,width:"40%"}}>
      <div  style={{marginTop:"60px"}}>
    <center> <b style={{marginTop:"-5px"}}>TOTAL ADDITIONAL EARNINGS (RS)</b></center>

<br></br>
{this.state.addiempsalary.map((addiempsalary,index)  =>(
                <tr key={index}>
<script>
                    {(totAdditional = totAdditional + parseInt(addiempsalary.Additional))}   
                    </script>
</tr>
                    ))}

<center>

<td style={{border: "none "}}>

<label >

<input 
  className="form-control"
style={{
  fontWeight:"bold", 
  color:"green",
  width:"14rem",
  backgroundColor:"#ececec",
  fontFamily:"monospace"
}}
type="text" 
placeholder= {totAdditional}
 />

</label>


</td>
</center>
<br></br>

<Link to="/empDadd">
<button
         
                                     
         className="btn btn-secondary btn-lg" style={{backgroundColor:"#0000ff",marginLeft:"220px",borderRadius:"13px",fontWeight: "bold"}}
     >

       
      <div style={{fontWeight:"00",color:'#FFFFFF',fontSize:"12px"}}>    VIEW DETAILS
          </div>
     </button>
     </Link>


</div></td>

  </tr>

     

</table> 









<br></br>
<br></br>
<br></br>



<b style={{marginLeft:"664px" }}>DEDUCTION SUMMARY</b>

<br></br>
<br></br>

{this.state.empsalary.map((empsalary, index) => (
                  <tr key={index}>                   
                   
                    <script>
                    {(totDeduction = totDeduction + parseInt(empsalary.Deduction))}   
                    </script>
                    </tr>
                    ))}



<table  style={{border: "1px solid black ",width:"45%",marginLeft:"660px",backgroundColor:"lightblue",height:"30rem"}}>



          

<tr style={{border: "1px solid black "}}>

<td style={{border: "1px solid black "}}>

<div style={{marginTop: "1rem"}}>
<center>
<b><i className = "fa-solid fa-leaf"></i></b> </center>

<center> <b>EPF</b></center>


<br></br>
<br></br>

<center>

<td style={{border: "none "}}>
<label >
<input 
                                   type="text" 
                                   className="form-control"
                                   style={{    
                                    width:"10rem",
                                    backgroundColor:"#ececec",
                                    fontFamily:"monospace"
                                }}
                                   placeholder="00000" />

</label>
</td>
</center>


</div>
</td>

<br></br>
                                                         

<td style={{border: "1px solid black "}}>

<div style={{marginTop: "1rem"}}>
<center>
<b><i className = "fa-solid fa-sheet-plastic"></i></b> </center>

<center> <b>TAX</b></center>


<br></br>
<br></br>

<center>

<td style={{border: "none "}}>

<label >
<input 
                                   type="text" 
                                   className="form-control"
                                   style={{    
                                    width:"10rem",
                                    backgroundColor:"#ececec",
                                    fontFamily:"monospace"
                                }}
                                   placeholder="00000" />

</label>


</td>
</center>


</div>
</td>

 

  <td style={{border: "1px solid black "}}>
  <div style={{marginTop: "125px "}}>
<center>
<b><i className = "fa-solid fa-shield-halved"></i></b> </center>

<center> <b>Total Deduction (RS)</b></center>



<br></br>
<br></br>

<center>

<td style={{border: "none "}}>



<input style={{
 fontWeight:"bold",
 color:"red",
 width:"10rem",
                                    backgroundColor:"#ececec",
                                    fontFamily:"monospace"
}}
type="text" 
className="form-control"
placeholder=

 {totDeduction}
 


                 


 />




</td>
</center>

           

<br></br>
<br></br>
<br></br>

<Link to="/empDded">
<button
         
                                     
         className="btn btn-outline-light" style={{marginLeft:"110px",borderRadius:"13px",fontWeight: "bold"}}
     >

       
      <div style={{fontWeight:"00",fontSize:"12px",color:"black"}}>MORE&nbsp;

      <i className="fa-solid fa-caret-right" style={{color:"black"}}  />
          </div>
     </button>
     </Link>


     


</div>
</td>

</tr>

</table>

<div style={{marginLeft:"200px",marginTop:"-550px" }}>
<React.Fragment>
    <div className="container-fluid mb-5">
      
      <Chart
        type="bar"
        width={430}
        height={550}
        series={[
          {
            name: "Employee payroll",
            data: [6578, 6787, 3245, 9876, 2324, 5123, 2435],
          },
        ]}
        options={{
         

          colors: ["#A020F0"],
          
          theme: { mode: "light" },

          xaxis: { 
            tickPlacement: "on",


           // categories:console.log(this.typeArray),

           categories: [
            "ETF",
            "TAX",
            "EPF",
            "ALLOWANCE",
            "OT",
            "BONUS",
            "PROJECTS",
          ],


            title: {
              text: "Employee Payroll Type",
              style: { color: "blue", fontSize: 15},
            },
          },

          yaxis: {
            labels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: { fontSize: "15", colors: ["#000000"] },
            },
            title: {
              text: "Employee Payments (RS)",
              style: { color: "blue", fontSize: 15 },
            },
          },

          legend: {
            show: true,
            position: "right",
          },

          dataLabels: {
            formatter: (val) => {
              return `${val}`;
            },
            style: {
              colors: ["#f4f4f4"],
              fontSize: 15,
            },
          },
        }}
      ></Chart>
    </div>
  </React.Fragment>

  </div>




          
      </div>
      </div>
      </div>
      </div>
      
  )

}

}

      



  

  
 

    
   
   

    