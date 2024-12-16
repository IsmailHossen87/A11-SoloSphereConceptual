/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { format } from "date-fns";

const JobCard = ({ job }) => {
  const {
    jobtitle,
    category,
    minprice,
    maxprice,
    description,
    bid_count,
    dateline,
    _id,
  } = job || {};
  return (
    <Link
      to={`/job/${_id}`}
      className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all"
    >
      <div className="flex items-center justify-between">
        {/* <span className='text-xs font-light text-gray-800 '>
          Deadline: {format (new Date(dateline),'P')}
        </span> */}
        <span className="text-xs font-light text-gray-800">
          Deadline: {dateline ? format(new Date(dateline), "P") : "N/A"}
        </span>
        <span className="px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full ">
          {category}
        </span>
      </div>

      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
          {jobtitle}
        </h1>

        <p className="mt-2 text-sm text-gray-600 ">{description}</p>
        <p className="mt-2 text-sm font-bold text-gray-600 ">
          Range: ${minprice} - ${maxprice}
        </p>
        <p className="mt-2 text-sm font-bold text-gray-600 ">
          Total Bids: {bid_count}
        </p>
      </div>
    </Link>
  );
};

export default JobCard;
