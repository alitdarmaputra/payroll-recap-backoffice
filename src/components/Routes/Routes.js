import React from "react";
import { Routes, Route } from "react-router-dom";
import RouteGuard from "../RouteGuard/RouteGuard"; 

//pages
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/Login";

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
            </Route>
            <Route
                path="/login"
                element={<Login />}
            />
       </Routes>
   );
}
 
export default RoutesComponent;