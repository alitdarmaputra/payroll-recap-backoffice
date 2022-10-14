import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Dashboard() {
  return(
    <>
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to='/preferences'>Preferences</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}