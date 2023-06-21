import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AdmindashDe from './Component/Salarymgmt/AdmindashDe';
import AdmindashAd1 from './Component/Salarymgmt/AdmindashAd1';
import AdmindashAd2 from './Component/Salarymgmt/AdmindashAd2';
import AdminDetable from './Component/Salarymgmt/AdminDetable';
import AdminAddtable from './Component/Salarymgmt/AdminAddtable';
import empDash from './Component/Salarymgmt/empDash';
import empDded from './Component/Salarymgmt/empDded';
import empDadd from './Component/Salarymgmt/empDadd';
import createnewsalary from './Component/Salarymgmt/createnewsalary';
import createnewAddisalary from './Component/Salarymgmt/createnewAddisalary';
import editsalary from './Component/Salarymgmt/editsalary';
import editAddisalary from './Component/Salarymgmt/editAddisalary';
import getempDesalary from './Component/Salarymgmt/getempDesalary';
import getempAddisalary from './Component/Salarymgmt/getempAddisalary';
import salarypercentage from './Component/Salarymgmt/salarypercentage';
import percentageedit from './Component/Salarymgmt/percentageedit';





function App() {
  return (
    <Router> 
      
        {/* <Route exact path="/"  component={< Dashboard/>}/> */}
        <Route exact path="/AdmindashDe"  component={AdmindashDe}/>
        <Route exact path="/AdmindashAd1" component={ AdmindashAd1}/>
        <Route exact path="/AdmindashAd2"  component={AdmindashAd2}/>
        <Route exact path="/AdminDetable"  component={AdminDetable}/>
        <Route exact path="/AdminAddtable"  component={AdminAddtable}/>
        <Route exact path="/empDash"  component={empDash}/>
        <Route exact path="/empDded"  component={empDded}/>
        <Route exact path="/empDadd"  component={empDadd}/>
        <Route exact path="/createnewsalary"  component={createnewsalary}/>
        <Route exact path="/createnewAddisalary"  component={createnewAddisalary}/>
        <Route exact path="/editsalary/:id"  component={editsalary}/>
        <Route exact path="/editAddisalary/:id"  component={editAddisalary}/>
        <Route exact path="/getempDesalary/:id"  component={getempDesalary}/>
        <Route exact path="/getempAddisalary/:id"  component={getempAddisalary}/>
        <Route exact path="/salarypercentage"  component={salarypercentage}/>
        <Route exact path="/percentageedit/:id"  component={percentageedit}/>
       
        
        

        
        
        
        

      

    </Router>
    
  );
}

export default App;
