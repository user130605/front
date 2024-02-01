import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/main/Home';
import Header from './pages/main/Header';
import Login from './pages/user/LoginPage';
import Logout from './pages/user/LogoutPage';
import SignUp from './pages/user/SignUpPage';
import Detail from './pages/detail/DetailPage';

import C_InterestPlace from './pages/customer/C_InterestPlace';
import C_WrittenReview from './pages/customer/C_WrittenReview';
import C_ModifyInformation from './pages/customer/C_ModifyInformation';
import C_ModifyReview from './pages/customer/C_ModifyReview';

import O_InterestPlace from './pages/owner/O_InterestPlace';
import O_ModifyInformation from './pages/owner/O_ModifyInformation';
import O_WrittenReview from './pages/owner/O_WrittenReview';
import O_ModifyReview from './pages/owner/O_ModifyReview';
import O_RegisteredPlace from './pages/owner/O_RegisteredPlace';

import RegisterUpdate from './pages/store/RegisterUpdate';


function App() {

  return (
    <Router>
      <Header />
      <div>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/detail" element={<Detail />} />

          {/* 사용자가 customer 일 때 */}
          <Route path="/C_InterestPlace" element={<C_InterestPlace />} />
          <Route path="/C_ModifyInformation" element={<C_ModifyInformation />} />
          <Route path="/C_WrittenReview" element={<C_WrittenReview />} />
          <Route path="/C_ModifyReview" element={<C_ModifyReview />} />

          {/* 사용자가 owner 일 때 */}
          <Route path="/O_InterestPlace" element={<O_InterestPlace />} />
          <Route path="/O_ModifyInformation" element={<O_ModifyInformation />} />
          <Route path="/O_WrittenReview" element={<O_WrittenReview />} />
          <Route path="/O_ModifyReview" element={<O_ModifyReview />} />
          <Route path="/O_RegisteredPlace" element={<O_RegisteredPlace />} />

          <Route path="/RegisterUpdate" element={<RegisterUpdate />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
