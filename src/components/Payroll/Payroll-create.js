import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import httpRequest from "../../config/http-request.config";

export default function PayrollCreate() {
    const [employees, setEmployees] = useState([]);

    const input = {
        type: useRef(),
        name: useRef(),
        description: useRef(),
        nominal: useRef(),
        periode: useRef(),
        employee: useRef(),
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const data = {
            claim_type: input.type.current.value,
            claim_name: input.name.current.value,
            claim_description: input.description.current.value, 
            nominal: input.nominal.current.value,
            period_month: new Date(input.periode.current.value).toLocaleString('default', { month: 'long' }).toUpperCase(),
            period_year: new Date(input.periode.current.value).getFullYear(),
            employee_id: input.employee.current.value 
        }

        try {
            const response = await axios.post(`${httpRequest.api.baseUrl}/recap`, data);
            console.log(response);
            window.location.href = '/payroll';
        } catch(err) {
            console.log(err);
        }
    }
    useEffect(() => {
        const getEmployees = async () => {
            const response = await axios.get(`${httpRequest.api.baseUrl}/employee`);
            setEmployees(response.data.data.content);
        }
        getEmployees();
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <i onClick={() => navigate(-1)} className="hover:cursor-pointer text-2xl fa-solid fa-arrow-left mb-8"></i>
            <div className="content w-5/6 bg-white p-5 rounded-md shadow-xl">
                <h1 className="text-4xl mb-9 font-bold">Buat Claim</h1>
                <form onSubmit={e => handleSubmit(e)}>
                    <h2 className="font-bold text-md mb-3">Tipe Claim</h2>
                    <select ref={input.type} className="mb-5 indent-3 w-full py-2 bg-transparent border-2 rounded-md input-type">
                        <option value="HEALTH">Health</option>
                        <option value="WELLNESS">Wellness</option>
                        <option value="REIMBURSEMENT">Reimbursement</option>
                        <option value="DEDUCTION">Deduction</option>
                        <option value="TAX">Tax</option>
                    </select>

                    <h2 className="font-bold text-md mb-3">Nama Claim</h2>
                    <input ref={input.name} className="w-full rounded-md indent-3 py-2 border-2 mb-5" type="text" placeholder="Masukkan nama claim"></input>

                    <h2 className="font-bold text-md mb-3">Deskripsi Claim</h2>
                    <input ref={input.description} className="w-full rounded-md indent-3 py-2 border-2 mb-5" type="text" placeholder="Masukkan deskripsi claim"></input>

                    <h2 className="font-bold text-md mb-3">Nominal Claim</h2>
                    <input ref={input.nominal} className="w-full rounded-md indent-3 py-2 border-2 mb-5" type="text" placeholder="Masukkan nominal claim"></input>

                    <h2 className="font-bold text-md mb-3">Periode</h2>
                    <input ref={input.periode} className="w-full rounded-md indent-3 py-2 border-2 mb-5" type="month"></input>

                    <h2 className="font-bold text-md mb-3">Nama Employee</h2>
                    <select ref={input.employee} className="mb-16 indent-3 w-full py-2 bg-transparent border-2 rounded-md input-type">
                        {employees.length !== 0 && employees.map(employee => {
                            return <option value={employee.id}>{employee.full_name}</option>
                        })}
                    </select>

                    <button className="font-bold py-3 px-7 rounded-md bg-sky-600 text-white" type="submit">Simpan</button>
                </form>
            </div>
        </>
    )
}