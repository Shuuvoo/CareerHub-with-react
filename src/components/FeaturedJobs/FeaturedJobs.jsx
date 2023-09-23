import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  console.log(jobs);

  return (
    <div className="my-5">
      <h1 className="text-4xl text-center">Featured Jobs: {jobs.length}</h1>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={ dataLength === jobs.length && 'hidden'}>
        
        <div className=" card-actions justify-center mt-10">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn btn-primary text-center justify-center"
          >
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
