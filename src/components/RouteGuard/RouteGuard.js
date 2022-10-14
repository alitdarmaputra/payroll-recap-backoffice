import React from 'react';
import { Navigate } from 'react-router-dom';

const RouteGuard = ({ children }) => {
   const hasJWT = () => {
        const flag = localStorage.getItem("token") ? true : false; 
        return flag;
   }
   
   if(!hasJWT()) {
        return <Navigate to='/login' />
   }

   return children;
}

export default RouteGuard;

