import loading from '../../../assets/loading.gif';

export default function Loading() {
    return (
        <div className="content w-full justify-center items-center h-96 flex">
            <img className='w-36' src={loading} alt='loading...'></img>
        </div>
    )
}