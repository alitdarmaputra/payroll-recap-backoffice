import { useState, useEffect } from "react";
import axios from "axios";
import httpRequest from "../../config/http-request.config";
import { useNavigate, useParams } from "react-router-dom";

export default function EmployeeDetail() {
    const [employee, setEmployee] = useState({});
    const [recaps, setRecap] = useState([]);

    const urlParams = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response_detail = await axios.get(`${httpRequest.api.baseUrl}/employee/${urlParams.id}`);
                setEmployee(response_detail.data.data);

                const response_recap = await axios.get(`${httpRequest.api.baseUrl}/claim/show?employee_id=${urlParams.id}`);
                setRecap(response_recap.data.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <i onClick={() => navigate(-1)} className="hover:cursor-pointer text-2xl fa-solid fa-arrow-left mb-8"></i>
            <h1 className="text-4xl mb-9 font-bold">Detail Karyawan</h1>

            <div className="content w-100 bg-white p-9 rounded-md shadow-xl">

                <div className="mb-5 justify-between info-profile">
                    <h2 className="text-2xl font-bold mb-5">Info Profile</h2>
                    <div className="mb-7 name">
                        <h3 className="font-bold mb-1">Nama Lengkap</h3>
                        <p className="mb-1">{employee.full_name}</p>
                        <span className="flex w-1/2"><i className="flex-grow  border-t-2 border-slate-200"></i></span>
                    </div>

                    <div className="mb-7 email">
                        <h3 className="font-bold mb-1">Email</h3>
                        <p className="mb-1">{employee.email}</p>
                        <span className="flex w-1/2"><i className="flex-grow  border-t-2 border-slate-200"></i></span>
                    </div>

                    <div className="mb-7 salary">
                        <h3 className="font-bold mb-1">Nominal Gaji</h3>
                        <p className="mb-1">{employee.salary}</p>
                        <span className="flex w-1/2"><i className="flex-grow  border-t-2 border-slate-200"></i></span>
                    </div>
                </div>

                <div className="mb-5 justify-between payroll-recap">
                    <h2 className="text-2xl font-bold mb-5">Payroll Recap</h2>

                    <div className="mb-5 flex justify-end w-full content-download">
                        <a href={`${httpRequest.api.baseUrl}/claim/download?employee_id=${urlParams.id}`} className="py-2 px-3 rounded-md bg-slate-800 text-white"><i className="mr-2 fa-solid fa-download"></i>Download</a>
                    </div>

                    <div className="mb-5 content-body overflow-auto">
                        <table>
                            <tr>
                                <th className="py-3 font-bold">Nama</th>
                                <th className="font-bold">Periode</th>
                                <th className="font-bold">Gaji</th>
                                <th className="font-bold">Reimbursement</th>
                                <th className="font-bold">Tax</th>
                                <th className="font-bold">Deduction</th>
                                <th className="font-bold">Sisa Claim</th>
                                <th className="font-bold">Gaji Bersih</th>
                                <th className="font-bold">Waktu</th>
                            </tr>

                            {recaps.length !== 0 && (
                                recaps.map(recap => {
                                    return (
                                        <>
                                            <tr>
                                                <th>{recap.employee_name}</th>
                                                <th>{`${recap.period_month} ${recap.period_year}`}</th>
                                                <th>{recap.salary}</th>
                                                <th>{recap.reimbursement}</th>
                                                <th>{recap.tax}</th>
                                                <th>{recap.deduction}</th>
                                                <th>{recap.remaining_claim_limit}</th>
                                                <th>{recap.total_salary}</th>
                                                <th>{`${new Date(recap.recap_date).toLocaleString()}`}</th>
                                            </tr>
                                        </>
                                    )
                                })
                            )}
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}