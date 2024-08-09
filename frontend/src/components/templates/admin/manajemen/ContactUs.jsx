import React from "react";
import ManajemenSidebar from "../../../sidebars/ManajemenSidebar";
import QuestionTable from "../../../tables/QuestionTable";

const ContactUs = () => {
  return (
    <div className="flex flex-row">
      <div>
        <ManajemenSidebar />
      </div>
      <div className=" w-full min-h-screen bg-neutral-200">
        <div className="mt-32 absolute pl-[4.5rem] lg:pl-[20rem]">
          <h1 className="text-black text-2xl font-bold mb-5">
            Daftar Pertanyaan
          </h1>
          <div className="mt-8">
            <QuestionTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
