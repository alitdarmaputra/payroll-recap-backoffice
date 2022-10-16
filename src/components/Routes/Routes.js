import React from "react";
import { Routes, Route } from "react-router-dom";
import RouteGuard from "../RouteGuard/RouteGuard"; 

//pages
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";
import Payroll from "../Payroll/Payroll";
import PayrollCreate from "../Payroll/Payroll-create";
import Employee from "../Employee/Employee";
import EmployeeCreate from "../Employee/Employee-create";
import Hrd from "../Hrd/Hrd";
import EmployeeDetail from "../Employee/Employee-detail";
import HrdCreate from "../Hrd/Hrd-create";
import Wellcome from "../Wellcome/Wellcome";
import PayrollCreateFile from "../Payroll/Payroll-create-file";

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
                <Route index element={<Wellcome />} />
                <Route path="payroll" element={<Payroll />} />
                <Route path="payroll/create" element={<PayrollCreate/>} />
                <Route path="payroll/create-file" element={<PayrollCreateFile />} />
                <Route path="employee" element={<Employee />} />
                <Route path="employee/create" element={<EmployeeCreate />} />
                <Route path="employee/detail/:id" element={<EmployeeDetail />} />
                <Route path="hrd" element={<Hrd />} />
                <Route path="hrd/create" element={<HrdCreate />} />
            </Route>
            <Route
                path="/login"
                element={<Login />}
            />
       </Routes>
   );
}
 
export default RoutesComponent;