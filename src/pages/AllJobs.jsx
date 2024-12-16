/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import JobCard from '../components/JobCard'
import axios from 'axios'

const AllJobs = () => {
  const [jobs,setJobs]= useState([])
  // search start
const [searchjob,setSearch] = useState("")
useEffect(() => {
 axios.get(`http://localhost:5000/getJob?search=${searchjob}`)
  .then(res => {
    setJobs(res.data)
  })
}, [searchjob]);
  // search end

  
  useEffect(()=>{
    fetch()
  },[])
  const fetch = async()=>{
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/getjob`)
    setJobs(data)
  }
  return (
    <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
      <div>
        {/* SELECTSEARCH,SORT,RESET */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
          {/* SELECT */}
          <div>
            <select
              name='category'
              id='category'
              className='border p-4 rounded-lg'
            >
              <option value=''>Filter By Category</option>
              <option value='Web Development'>Web Development</option>
              <option value='Graphics Design'>Graphics Design</option>
              <option value='Digital Marketing'>Digital Marketing</option>
            </select>
          </div>
          {/* SEARCH */}
          <form>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                type='text'
                onChange={(e)=> setSearch(e.target.value)}
                name='search'
                placeholder='Enter Job Title'
                aria-label='Enter Job Title'
              />
            </div>
          </form>
          {/* SORTING */}
          <div>
            <select
              name='category'
              id='category'
              className='border p-4 rounded-md'
            >
              <option value=''>Sort By Deadline</option>
              <option value='dsc'>Descending Order</option>
              <option value='asc'>Ascending Order</option>
            </select>
          </div>
          <button className='btn'>Reset</button>
        </div>
        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
         
            {jobs?.map(job => <JobCard key={job._id} job={job}></JobCard>)}
        </div>
      </div>
    </div>
  )
}

export default AllJobs
