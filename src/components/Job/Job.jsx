/* eslint-disable react/prop-types */
import { MdLocationOn } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="px-3 py-1 bg-slate-200 rounded-lg font-medium">
              {remote_or_onsite}
            </button>
            <button className="ml-5 px-3 py-1 bg-slate-200 rounded-lg font-medium">
              {job_type}
            </button>
          </div>
          <div className="flex justify-start">
            <div className="flex">
              {" "}
              <MdLocationOn className="text-xl mt-.5"></MdLocationOn> {location}
            </div>
            <div className="flex ml-4">
              {" "}
              <BsCurrencyDollar className="text-xl mt-.5"></BsCurrencyDollar>
              {salary}
            </div>
          </div>
          <div className="card-actions justify-center">
            <Link to={`/job/${id}`}>
              {" "}
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
