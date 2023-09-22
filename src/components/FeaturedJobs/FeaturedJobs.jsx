import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('jobs.json')
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  console.log(jobs)

  return (
    <div className="my-5">
      <h1 className="text-4xl text-center">Featured Jobs: {jobs.length}</h1>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div>
        {
            jobs.map(job => <Job key={job.id} job={job} ></Job>)
        }
      </div>
    </div>
  );
};

export default FeaturedJobs;
