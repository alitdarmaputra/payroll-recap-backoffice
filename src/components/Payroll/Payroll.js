import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import httpRequest from "../../config/http-request.config";
import Loading from "../Layouts/Navbar/Loading";

export default function Payroll() {
    const [claims, setClaims] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${httpRequest.api.baseUrl}/recap`);
                setClaims(response.data.data.content);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <h1 className="text-4xl mb-9 font-bold">Payroll</h1>

            {claims.length === 0 ? (
                <Loading />
            ) : (
                <div className="content w-100 bg-white p-5 rounded-md shadow-xl">
                    <div className="flex mb-5 justify-between content-header">
                        <div className="flex w-96 items-center justify-between content-header-left">
                            <div className="flex justify-between items-center px-2 w-48 text-sm bg-slate-100 font-bold text-slate-600 rounded-lg content-header-sort">
                                <p>Urutkan<br></br>Berdasarkan </p><i className="text-3xl fa-solid fa-caret-down"></i>
                            </div>

                            <div className="h-full flex text-sm bg-slate-100 font-bold text-slate-600 rounded-lg justify-between items-center px-2 w-36  content-header-period">
                                <p>Filter Tanggal</p>
                            </div>

                            <i className="text-xl fa-solid fa-filter"></i>
                        </div>

                        <div className="self-center flex items-center content-header-right">
                            <i className="bg-slate-100 rounded-l-md py-3 pl-3 fa-solid fa-magnifying-glass"></i>
                            <input type='text' className="focus:outline-none rounded-r-md mr-10 py-2 bg-slate-100 indent-3" placeholder="Cari..."></input>
                            <Link to='create' className="mr-5">
                                <i class="text-xl fa-solid fa-plus"></i>
                            </Link>
                            <Link to='create-file'>
                                <i class="text-xl fa-regular fa-file"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="mb-5 content-body">
                        <table>
                            <tr>
                                <th className="py-3 font-bold">Waktu</th>
                                <th className="font-bold">Tipe</th>
                                <th className="font-bold">Nama</th>
                                <th className="font-bold">Deskripsi</th>
                                <th className="font-bold">Nominal</th>
                                <th className="font-bold">Periode</th>
                                <th className="font-bold">Nama Karyawan</th>
                                <th className="font-bold">Aksi</th>
                            </tr>

                            {claims.length !== 0 && (
                                claims.map(claim => {
                                    return (
                                        <>
                                            <tr key={claim.id}>
                                                <th>{new Date(claim.created_date).toLocaleString()}</th>
                                                <th>{claim.claim_type}</th>
                                                <th>{claim.claim_name}</th>
                                                <th>{claim.claim_description}</th>
                                                <th>{claim.nominal}</th>
                                                <th>{claim.period_month}</th>
                                                <th>{claim.user_employee.full_name}</th>
                                                <th className="w-40">
                                                    <div className="flex w-full justify-evenly options">
                                                        <i class="fa-solid fa-trash-can"></i>
                                                        <i class="fa-solid fa-pencil"></i>
                                                    </div>
                                                </th>
                                            </tr>
                                        </>
                                    )
                                })
                            )}
                        </table>

                        {claims.length === 0 && <h1 className="text-center font-bold text-lg">Data tidak ditemukan</h1>}
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