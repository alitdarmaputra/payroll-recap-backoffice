import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import httpRequest from "../../config/http-request.config";

export default function HrdCreate() {
    const [isHidePassword, setHidePassword] = useState(true);
    const [isHideConfirmPassowrd, setHideConfirmPassword] = useState(true);

    const input = {
        full_name: useRef(),
        username: useRef(),
        email: useRef(),
        password: useRef(),
        confirmPassword: useRef(),
    }
    
    const updatePasswordView = e => {
        e.preventDefault();
        const passwordInput = document.querySelector(".input-password");
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
        setHidePassword(!isHidePassword);
    }

    const updateConfirmPasswordView = e => {
        e.preventDefault();
        const passwordInput = document.querySelector(".input-confirm-password");
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
        setHideConfirmPassword(!isHideConfirmPassowrd);
    }


    const handleSubmit = async e => {
        e.preventDefault();

        if(input.password.current.value !== input.confirmPassword.current.value)
            return alert("Field password dan konfirmasi password tidak sama");

        const data = {
            username: input.username.current.value,
            full_name: input.full_name.current.value,
            email: input.email.current.value,
            password: input.password.current.value,
        }

        try {
            const response = await axios.post(`${httpRequest.api.baseUrl}/hrd`, data);
            console.log(response);
            window.location.href = '/hrd';
        } catch (err) {
            console.log(err);
        }
    }

    const navigate = useNavigate();

    return (
        <>
            <i onClick={() => navigate(-1)} className="hover:cursor-pointer text-2xl fa-solid fa-arrow-left mb-8"></i>
            <div className="content w-5/6 bg-white p-5 rounded-md shadow-xl">
                <h1 className="text-4xl mb-9 font-bold">Buat HRD</h1>
                <form onSubmit={e => handleSubmit(e)}>
                    <h2 className="font-bold text-md mb-3">Username HRD</h2>
                    <input ref={input.username} className="w-full rounded-md indent-3 py-2 border-2 mb-5" type="text" placeholder="Masukkan username hrd"></input>

                    <h2 className="font-bold text-md mb-3">Nama Lengkap HRD</h2>
                    <input ref={input.full_name} className="w-full rounded-md indent-3 py-2 border-2 mb-5" type="text" placeholder="Masukkan nama lengkap hrd"></input>

                    <h2 className="font-bold text-md mb-3">Email HRD</h2>
                    <input ref={input.email} className="w-full rounded-md indent-3 py-2 border-2 mb-5" type="text" placeholder="Masukkan email karyawan"></input>

                    <h2 className="font-bold text-md mb-3">Password</h2>
                    <div className="flex password-input">
                        <input ref={input.password} className="w-full rounded-l-md indent-3 py-2 border-y-2 border-l-2 mb-5 input-password" type="password" placeholder="Password"></input>

                        <button onClick={e => updatePasswordView(e)} className="rounded-r-md px-5 border-y-2 border-r-2 mb-5">
                            {isHidePassword ? (
                                <i className="fa-regular fa-eye-slash text-slate-400 text-xl"></i>
                            ) : (
                                <i className="fa-regular fa-eye text-slate-400 text-xl"></i>
                            )}
                        </button>
                    </div>

                    <h2 className="font-bold text-md mb-3">Konfirmasi Password</h2>
                    <div className="flex">
                        <input ref={input.confirmPassword} className="w-full rounded-l-md indent-3 py-2 border-y-2 border-l-2 mb-5 input-confirm-password" type="password" placeholder="Password"></input>

                        <button onClick={e => updateConfirmPasswordView(e)} className="rounded-r-md px-5 border-y-2 border-r-2 mb-5">
                            {isHideConfirmPassowrd ? (
                                <i className="fa-regular fa-eye-slash text-slate-400 text-xl"></i>
                            ) : (
                                <i className="fa-regular fa-eye text-slate-400 text-xl"></i>
                            )}
                        </button>
                    </div>
                    <button className="font-bold py-3 px-7 rounded-md bg-sky-600 text-white" type="submit">Simpan</button>
                </form>
            </div>
        </>
    )
}