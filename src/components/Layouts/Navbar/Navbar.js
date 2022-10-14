import { useRef, useState } from "react"

export default function Navbar() {
    const [navbarState, setNavbar] = useState(false);
    const sideBar = useRef();

    const toggleSidebar = e => {
        e.preventDefault();
        setNavbar(!navbarState);
    }

    const username = localStorage.getItem('userName');

    return (
        <div ref={sideBar} className={`sidebar ${navbarState && 'active'}`}>
            <div className="logo_content">
                <div className="logo">
                    <i className='bx bxs-wallet'></i>
                    <div className="logo_name">PayrollApp</div>
                </div>
                <i className='bx bx-menu' id="btn" onClick={e => toggleSidebar(e)}></i>
            </div>
            <ul className="nav_list">
                <li>
                    <a href="#">
                        <i className='bx bx-grid-alt' ></i>
                        <span className="links_name">Payroll</span>
                    </a>
                    <span className="tooltip">List Payroll</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-pie-chart' ></i>
                        <span className="links_name">Employee</span>
                    </a>
                    <span className="tooltip">List Employees</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-user' ></i>
                        <span className="links_name">HRD</span>
                    </a>
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
                <i className='bx bx-log-out' id="logout"></i>
            </div>
        </div>
        </div>
    )
}