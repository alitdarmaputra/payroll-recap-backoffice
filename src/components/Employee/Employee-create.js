import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import httpRequest from "../../config/http-request.config";

export default function EmployeeCreate () {
    const input = {
        full_name: useRef(),
        email: useRef(),
        salary: useRef(),
    }

    const handleSubmit = async e => {
        e.preventDefault();

        const data = {
            full_name: input.full_name.current.value,
            email: input.email.current.value ,
            salary: input.salary.current.value
        }

        try {
            const response = await axios.post(`${httpRequest.api.baseUrl}/employee`, data);
            console.log(response);
            window.location.href = '/employee';
        } catch(err) {
            console.log(err);
        }
    }

    const navigate = useNavigate();

    return (
        <>
            <i onClick={() => navigate(-1)} className="hover:cursor-pointer text-2xl fa-solid fa-arrow-left mb-8"></i>
            <div className="content w-5/6 bg-white p-5 rounded-md shadow-xl">
                <h1 className="text-4xl mb-9 font-bold">Buat Karyawan</h1>
                <form onSubmit={e => handleSubmit(e)}>
                    <h2 className="font-bold text-md mb-3">Nama Karyawan</h2>
                    <input ref={input.full_name} className="w-full rounded-md indent-3 py-2 border-2 mb-5" type="text" placeholder="Masukkan nama karyawan"></input>

                    <h2 className="font-bold text-md mb-3">Email Karyawan</h2>
                    <input ref={input.email} className="w-full rounded-md indent-3 py-2 border-2 mb-5" type="text" placeholder="Masukkan email karyawan"></input>

                    <h2 className="font-bold text-md mb-3">Nominal Gaji</h2>
                    <input ref={input.salary} className="w-full rounded-md indent-3 py-2 border-2 mb-2" type="text" placeholder="Masukkan nominal gaji"></input>

                    <button className="font-bold py-3 px-7 rounded-md bg-sky-600 text-white" type="submit">Simpan</button>
                </form>
            </div>
        </>
    )
}