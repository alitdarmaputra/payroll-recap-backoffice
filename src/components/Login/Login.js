import React from "react";

export default function Login() {
    return (
        <div className="flex h-screen justify-center item-center login-wrapper">
            <div className="m-auto w-2/3 text-center login">
                <div className="mb-9 login-head">
                    <i className="text-6xl mb-2 fa-solid fa-money-bills"></i>
                    <h1 className="text-sm text-slate-400">Payroll Recap App</h1>
                </div>
                <div className="mb-12 login-sub-body">
                    <h1 className="text-3xl font-bold">Login</h1>
                </div>
                <div className="login-body">
                    <form className="flex flex-col">
                        <div className="flex flex-col login-body-email">
                            <input className="mb-3 bg-slate-100 p-3 focus:outline-none rounded-md" type="text" placeholder="Email address"></input>
                        </div>

                        <div className="mb-12 flex login-body-password">
                            <input className="w-4/5 flex-auto bg-slate-100 p-3 focus:outline-none rounded-l-md" type="password" placeholder="Password"></input>

                            <button className="bg-slate-100 rounded-r-md px-5">
                                <i className="fa-regular fa-eye text-slate-400 text-xl"></i>
                            </button>
                        </div>
                        <button className="p-3 bg-sky-500 rounded-md text-white hover:bg-sky-600 font-bold " type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}