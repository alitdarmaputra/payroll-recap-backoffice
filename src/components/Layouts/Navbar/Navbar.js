import axios from "axios";
import { useRef, useState } from "react"
import { Link } from "react-router-dom";
import httpRequest from "../../../config/http-request.config";

export default function Navbar() {
    const [navbarState, setNavbar] = useState(false);
    const [activeNav, setActiveNav] = useState(0);

    const sideBar = useRef();

    const toggleSidebar = e => {
        e.preventDefault();
        setNavbar(!navbarState);
    }

    const handleLogout = e => {
        e.preventDefault();
        axios.post(`${httpRequest.api.baseUrl}/auth/logout`);
        localStorage.clear();
        window.location.reload();
    }

    const username = localStorage.getItem('username');

    return (
        <div ref={sideBar} className={`sidebar ${navbarState && 'active'} z-50`}>
            <div className="logo_content">
                <Link to="/">
                    <div className="logo">
                        <i className='bx bxs-wallet'></i>
                        <div className="logo_name">PayrollApp</div>
                    </div>
                </Link>
                <i className='bx bx-menu hover:cursor-pointer' id="btn" onClick={e => toggleSidebar(e)}></i>
            </div>
            <ul className="nav_list">
                <li onClick={() => setActiveNav(1)}>
                    <Link to="/payroll">
                        <i className={`${activeNav === 1 && 'text-sky-300'} bx bx-grid-alt`}></i>
                        <span className={`${activeNav === 1 && 'text-sky-300'} links_name`}>Payroll</span>
                    </Link>
                    <span className="tooltip">List Payroll</span>
                </li>
                <li onClick={() => setActiveNav(2)}>
                    <Link to="/employee">
                        <i class={`${activeNav === 2 && 'text-sky-300'} fa-solid fa-briefcase`}></i>
                        <span className={`${activeNav === 2 && 'text-sky-300'} links_name`}>Employee</span>
                    </Link>
                    <span className="tooltip">List Employees</span>
                </li>
                <li onClick={() => setActiveNav(3)}>
                    <Link to="/hrd">
                        <i className={`${activeNav === 3 && 'text-sky-300'} bx bx-user`}></i>
                        <span className={`${activeNav === 3 && 'text-sky-300'} links_name`}>HRD</span>
                    </Link>
                    <span className="tooltip">List HRDs</span>
                </li>
            </ul>
            <div className="profile_content">
                <div className="profile">
                    <div className="profile_details">
                        <div className="name_job">
                            <div className="name">{username}</div>
                            <div className="job">HRD</div>
                        </div>
                    </div>
                    <i className='bx bx-log-out hover:cursor-pointer' onClick={e => handleLogout(e)} id="logout"></i>
                </div>
            </div>
        </div>
    )
}