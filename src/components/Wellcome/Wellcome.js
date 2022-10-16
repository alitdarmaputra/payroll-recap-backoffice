import axios from 'axios';
import { useEffect, useState } from 'react';
import Jumbotron from '../../assets/jumbotron.png';
import httpRequest from '../../config/http-request.config';

export default function Wellcome() {
    const [employees, setEmployee] = useState();
    const [claims, setClaims] = useState();

    useEffect(() => {
        const getData = async () => {
            try {
                const employeeResponse = await axios.get(`${httpRequest.api.baseUrl}/employee?status=ACTIVE`);
                setEmployee(employeeResponse.data.data.totalData);
                const claimsResponse = await axios.get(`${httpRequest.api.baseUrl}/recap`);
                setClaims(claimsResponse.data.data.totalData);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, []);

    const username = localStorage.getItem('username');

    return (
        <>
            <div className='h-full wellcome'>
                <div className='flex bg-white p-8 rounded-md mb-5 shadow-xl justify-evenly items-center wellcome-header'>
                    <img className='w-96' src={Jumbotron} alt='jumbotron'></img>
                    <div className='greeting'>
                        <h1 className='text-4xl mb-3 font-bold'>Selamat Pagi, <span className='text-sky-600'>{username}</span></h1>
                        <h2 className='text-slate-400'>Sudahkah melakukan claim periode ini?</h2>
                    </div>
                </div>

                <div className='flex gap-8 justify-between items-center wellcome-footer'>
                    <div className='p-5 justify-evenly items-center flex w-full bg-white rounded-md shadow-xl employee-count'>
                        <i class='text-slate-100 text-8xl fa-solid fa-briefcase'></i>
                        <div className='text-center dashboard-content'>
                            <h2 className='font-bold text-xl mb-8'>Jumlah Karyawan</h2>
                            <h1 className='text-6xl text-sky-600 font-bold'>{employees}</h1>
                            <p className='text-lg mb-5 text-slate-400'>Orang</p>
                        </div>
                    </div>

                    <div className='p-5 justify-evenly items-center flex w-full bg-white rounded-md shadow-xl claim-count'>
                        <i class='text-slate-100 text-8xl fa-solid fa-right-to-bracket'></i>
                        <div className='text-center dashboard-content'>
                            <h2 className='font-bold text-xl mb-8'>Jumlah Claim</h2>
                            <h1 className='text-6xl text-sky-600 font-bold'>{claims}</h1>
                            <p className='text-lg mb-5 text-slate-400'>Kali</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}