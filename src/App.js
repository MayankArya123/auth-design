import './App.scss';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import ResetPassword1 from './Components/ResetPassword1';
import ResetPassword2 from './Components/ResetPassword2';
import ResetPassword3 from './Components/ResetPassword3';
import Password from './Components/Password';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">

        <Router>
        
        <Routes>
<Route   index   element={<SignUp/>}>   </Route>
<Route  path="/login"   element={<SignIn/>} >    </Route>
<Route  path="/reset1"   element={<ResetPassword1/>} >    </Route>
<Route  path="/reset2"   element={<ResetPassword2/>} >    </Route>
<Route  path="/reset3"   element={<ResetPassword3/>} >    </Route>
<Route  path="/password"   element={<Password/>} >    </Route>

        
        </Routes>

        



        </Router>
        
    </div>
  );
}

export default App;

