import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/componets/common/Navbar"
import Home from "./componets/home/Home";
import Registerc from "./componets/auth/customer/Registerc";
import Role from "./componets/auth/Role";
import Loginc from "./componets/auth/customer/Loginc";
import ServiceRequest from "./componets/problemcreate/ServiceRequest";
import Dashboard from "./componets/dashboard/Dashboard";
import CustomerProfile from "./componets/customerprofile/CustomerProfile";
import Contact from "./componets/home/component/Contact";
import Footer from "./componets/common/Footer";
import ProviderProfile from "./componets/dashboard/dashboardcomponent/Profile";


function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App" style={{ paddingTop:'60px' }}> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Registerc/>} /> 
          <Route path="/login" element={<Loginc/>} /> 
           {/* Add the Register route */}
           <Route path="/roleselect" element={<Role/>} />
           <Route path="/postrequest" element={<ServiceRequest/>} />
           <Route path={'/providerdashboard/:id'} element={<Dashboard/>}/>

           <Route path="/customerdashboard/:id" element={<CustomerProfile/>} />
           <Route path='/contact' element={<Contact></Contact>}></Route>
           <Route path='provider-profile/:id' element={<ProviderProfile/>}></Route>
        </Routes>
      </div>
    
    </Router>
  );
}

export default App;
