import { useNavigate } from "react-router-dom";

export default function PayrollCreateFile() {
    const navigate = useNavigate();

    return (
        <>
            <i onClick={() => navigate(-1)} className="hover:cursor-pointer text-2xl fa-solid fa-arrow-left mb-8"></i>
            <div className="content w-5/6 bg-white p-5 rounded-md shadow-xl">
                <h1 className="text-4xl mb-9 font-bold">Buat Claim via File</h1>

                <div className="mb-5 flex justify-end w-full content-download">
                    <a href='/' className="py-2 px-3 rounded-md bg-slate-800 text-white"><i className="mr-2 fa-solid fa-download"></i>Download File Format</a>
                </div>
                <form>
                    <h2 className="font-bold text-md mb-3">Upload File</h2>
                    <input className="w-full rounded-md indent-3 py-2 border-2 mb-5" type="file" placeholder="Masukkan nama claim"></input>

                    <button className="font-bold py-3 px-7 rounded-md bg-sky-600 text-white" type="submit">Simpan</button>
                </form>
            </div>
        </>
    )
}