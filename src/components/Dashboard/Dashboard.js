import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Layouts/Navbar/Navbar';

export default function Dashboard() {
  return(
    <>
      <Navbar />
      <Outlet />
    </>
  );
}