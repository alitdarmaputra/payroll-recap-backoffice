import React from "react";
import { Routes, Route } from "react-router-dom";
import RouteGuard from "../RouteGuard/RouteGuard"; 

//pages
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import Payroll from "../Payroll/Payroll";
import PayrollCreate from "../Payroll/Payroll-create";

function RoutesComponent() {
   return (
       <Routes>
            <Route path="/" 
                element={
                    <RouteGuard>
                        <Dashboard />
                    </RouteGuard>
                }
            >
                <Route path="payroll" element={<Payroll />} />
                <Route path="payroll/create" element={<PayrollCreate/>} />
            </Route>
            <Route
                path="/login"
                element={<Login />}
            />
       </Routes>
   );
}
 
export default RoutesComponent;