import axios from "axios";
import { useRef, useState } from "react"
import { setAuthToken } from "../../Utils/utils";
import httpRequest from "../../config/http-request.config";

export default function Login() {
    const [isHidePassword, setHidePassword] = useState(true);

    const updatePasswordView = e => {
        e.preventDefault();
        const passwordInput = document.querySelector(".password-input");
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
        setHidePassword(!isHidePassword);
    }

    const form = {
        emailRef: useRef(),
        passwordRef: useRef()
    }

    const submitForm = async e => {
        e.preventDefault();
        const data = {
            email: form.emailRef.current.value,
            password: form.passwordRef.current.value
        }

        try {
           const response = await axios.post(`${httpRequest.api.baseUrl}/auth/login`, data);

           const { token } = response.data;
           const { username, id } = response.data.data;
           
           localStorage.setItem("token", token);
           localStorage.setItem("userId", id);
           localStorage.setItem("username", username);

           setAuthToken(token);
           window.location.href = '/';
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="flex h-screen justify-center item-center login-wrapper">
            <div className="m-auto w-96 text-center login">
                <div className="mb-9 login-head">
                    <i className="text-6xl mb-2 fa-solid fa-money-bills"></i>
                    <h1 className="text-sm text-slate-400">Payroll Recap App</h1>
                </div>
                <div className="mb-12 login-sub-body">
                    <h1 className="text-3xl font-bold">Login</h1>
                </div>
                <div className="login-body">
                    <form onSubmit={e => submitForm(e)} className="flex flex-col">
                        <div className="flex flex-col login-body-email">
                            <input ref={form.emailRef} className="mb-3 bg-slate-100 p-3 focus:outline-none rounded-md email-input" type="email" placeholder="Email address"></input>
                        </div>

                        <div className="mb-12 flex login-body-password">
                            <input ref={form.passwordRef} className="w-4/5 flex-auto bg-slate-100 p-3 focus:outline-none rounded-l-md password-input" type="password" placeholder="Password"></input>

                            <button onClick={e => updatePasswordView(e)} className="bg-slate-100 rounded-r-md px-5">
                                { isHidePassword ? (
                                    <i className="fa-regular fa-eye-slash text-slate-400 text-xl"></i>
                                ) : (
                                    <i className="fa-regular fa-eye text-slate-400 text-xl"></i>
                                )}
                            </button>
                        </div>
                        <button className="p-3 bg-sky-500 rounded-md text-white hover:bg-sky-600 font-bold " type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}