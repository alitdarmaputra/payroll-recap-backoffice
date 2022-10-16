import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import httpRequest from "../../config/http-request.config";
import Loading from "../Layouts/Navbar/Loading";

export default function Employee() {
    const [employees, setEmployee] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${httpRequest.api.baseUrl}/employee?status=ACTIVE`);
                setEmployee(response.data.data.content);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <h1 className="text-4xl mb-9 font-bold">
                Daftar Karyawan
            </h1>

            {employees.length === 0 ? (
                <>
                    <Loading />
                </>
            ) : (
                <div className="content w-100 bg-white p-5 rounded-md shadow-xl">
                    <div className="flex mb-5 justify-between content-header">
                        <div className="flex w-96 items-center justify-between content-header-left">
                            <div className="flex justify-between items-center px-2 w-48 text-sm bg-slate-100 font-bold text-slate-600 rounded-lg content-header-sort">
                                <p>Urutkan<br></br>Berdasarkan </p><i className="text-3xl fa-solid fa-caret-down"></i>
                            </div>
                        </div>

                        <div className="self-center flex items-center content-header-right">
                            <i className="bg-slate-100 rounded-l-md py-3 pl-3 fa-solid fa-magnifying-glass"></i>
                            <input type='text' className="focus:outline-none rounded-r-md mr-3 py-2 bg-slate-100 indent-3" placeholder="Cari..."></input>
                            <Link to='create'>
                                <i class="text-xl fa-solid fa-plus"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="mb-5 content-body overflow-auto">
                        <table>
                            <tr>
                                <th className="py-3 font-bold">Nama</th>
                                <th className="font-bold">Email</th>
                                <th className="font-bold">Status</th>
                                <th className="font-bold">Aksi</th>
                            </tr>

                            {employees.length !== 0 && (
                                employees.map(employee => {
                                    return (
                                        <>
                                            <tr key={employee.id}>
                                                <th>{employee.full_name}</th>
                                                <th>{employee.email}</th>
                                                <th>
                                                    {employee.status === 'ACTIVE' ?
                                                        <div className="w-24 text-center py-1 bg-green-600 text-white rounded-md">{employee.status}</div> :
                                                        <div className="px-1 py-2 text-white font-bold bg-red-600 rounded-md">{employee.status}</div>}
                                                </th>
                                                <th className="w-72">
                                                    <div className="flex w-full justify-evenly options">
                                                        <i class="fa-solid fa-trash-can"></i>
                                                        <i class="fa-solid fa-pencil"></i>
                                                        <Link to={`/employee/detail/${employee.id}`}>
                                                            <i class="fa-solid fa-eye"></i>
                                                        </Link>
                                                    </div>
                                                </th>
                                            </tr>
                                        </>
                                    )
                                })
                            )}
                        </table>

                        {employees.length === 0 && <h1 className="text-center font-bold text-lg">Data tidak ditemukan</h1>}
                    </div>

                    <div className="flex justify-center content-footer">
                        <div className="w-44 flex items-center justify-between pagination">
                            <i className="font-bold text-md text-slate-200 fa-solid fa-chevron-left"></i>
                            <div className="px-3 py-1 text-white bg-sky-600 rounded-md page-active">1</div>
                            <i class="font-bold text-md text-slate-200 fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}