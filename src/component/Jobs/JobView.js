import React,{useState, useEffect} from 'react'
import JobCard from './JobCard'
import { getJobs } from '../../config/api_calls';

export default function JobView() {

    const [jobs, setjobs] = useState([]);

    useEffect(()=>{
        getJobs().then(result =>{
            setjobs(result)
        })
    },[])


    return (
        <div className="container">
            {jobs.map(item =>{
                return <JobCard title={item.title} desc={item.description} req={item.requirements} date={item.date} /> 
            })}
        </div>
    )
}
