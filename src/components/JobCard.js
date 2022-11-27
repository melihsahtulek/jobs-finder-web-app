import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

const JobCard = ({ data }) => {
  const { id, title, description } = data;
  return (
    <>
      <Link to="/" className="bg-white rounded-md shadow-sm p-4 block">
        <div className="w-[75px] h-[75px] bg-gray-50">
          <img src="https://img.logoipsum.com/264.svg" className="w-full h-full object-contain border rounded-md" alt="" />
        </div>
        <div className="mt-5">
          <h3 className="font-semibold capitalize">{title}</h3>
        </div>
        <div className="mt-3">
          <div className="text-slate-500 text-sm line-clamp-3">
            <ReactMarkdown children={description} />
          </div>
        </div>
        <div className="mt-5">
          <span className="bg-blue-500/10 text-blue-600 px-4 py-2 text-sm rounded-md">tag</span>
        </div>
        <div className="flex gap-5 mt-8">
          <a href="/" className="bg-blue-600 flex w-1/2 h-[45px] items-center justify-center text-white rounded-md capitalize">
            link
          </a>
          <a href="/" className="bg-gray-300/40 flex w-1/2 h-[45px] items-center justify-center text-gray-500 rounded-md capitalize">
            link
          </a>
        </div>
      </Link>
    </>
  );
};

export default JobCard;
