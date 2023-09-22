import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className=" min-h-full justify-center items-center">
            <h1>Oppppssss!!!!</h1>
            <button className="text-red-500 border-red-500 items-center px-3 py-2 rounded-xl bg-emerald-500"><Link to='/'>Go Back To Home</Link></button>
        </div>
    );
};

export default ErrorPage;