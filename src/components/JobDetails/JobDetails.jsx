/* eslint-disable no-unused-vars */
import { Link, useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { job_description } = jobs;
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);
  return (
    <div>
      <h1 className="text-center font-extrabold text-2xl my-3">
        Job Details of : {job.job_title}
      </h1>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="border md:col-span-3 p-5">
          <h1>
            <span className="text-[18px] font-semibold">Job Description</span>:
            {job.job_description}
          </h1>
          <h1>
            {" "}
            <span className="text-[18px] font-semibold">
              Job Responsibility:
            </span>
            {job.job_responsibility}
          </h1>
          <h1>
            <span className="text-[18px] font-semibold">
              {" "}
              Educational Requirements :
            </span>
          </h1>
          <h1>{job.educational_requirements}</h1>
          <h1>
            <span className="text-[18px] font-semibold">Experience:</span>
          </h1>
          <h1>{job.experiences}</h1>
        </div>
        <div className="border  md:col-span-1 bg-[#f9fafd] rounded-sm p-8">
          <h1 className=" text-xl mb-2">Job Details </h1>
          <hr />
          <h1>Salary: {job.salary} (per month)</h1>
          <h1>Job Title: {job.job_title}</h1>
          <br />
          <h1 className="text-[18px]"> Contact information</h1> <hr />
          <h1>Phone:{job.contact_information.phone}</h1>
          <h1>Email:{job.contact_information.email}</h1>
          <h1>Address:{job.contact_information.address}</h1>
          <div>
            <button className="px-3 py-2 mt-5 bg-green-500 rounded-lg w-full">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <div className="card-actions justify-center">
        <div className="text-center px-3 py-2 my-8 bg-lime-400 rounded-lg w-[30%]">
          <Link to="/">
            <button>Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
