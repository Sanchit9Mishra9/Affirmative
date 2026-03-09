/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IJob } from "./Careers";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Loading from "../shared/Loading";

export default function ApplyJobs() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full flex  items-center flex-col relative">
      {loading && <Loading />}
      <div className="w-full h-[30vh] md:h-[50vh] relative flex justify-center items-center  ">
        <img
          src="/career/job.webp"
          alt="Careers"
          className="absolute inset-0 -z-10  w-full h-full object-fill object-center brightness-[.35]"
        />
        <Banner />
      </div>
      <Content setLoading={setLoading} />
    </div>
  );
}

const Banner = () => {
  return (
    <div className="w-full h-full  flex flex-col pt-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4   z-10">
      <div className="w-full  flex flex-col items-start  justify-start h-full">
        {/* navigation */}
        <div className="flex w-fit gap-3 md:mt-8">
          <div className="w-fit flex gap-2 justify-center items-center">
            <span className="text-xs md:text-sm">Careers</span>

            <div className="bg-slate-200">
              <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
            </div>
            <div className="w-fit flex gap-2 justify-center items-center">
              <span className="text-xs md:text-sm">Job</span>

              <div className="bg-slate-200">
                <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
              </div>
            </div>
          </div>
        </div>

        {/* content */}

        <div className=" w-full flex flex-col  gap-6 md:gap-8 justify-end items-start  h-full  ">
          <span className="text-[32px] md:text-[48px] font-semibold  flex ">
            Job Description
          </span>
        </div>
      </div>
    </div>
  );
};

const Content = ({
  setLoading,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { jobid } = useParams();
  const [job, setJob] = useState<IJob | null>(null);

  useEffect(() => {
    const getJob = async () => {
      const res = await fetch(`https://affirmity.in/api/job/${jobid}`);
      const data = await res.json();
      setJob(data);
    };
    getJob();
  }, [jobid]);
  return (
    <div className="w-full  flex justify-center items-center ">
      <div className="w-full h-full  flex  pt-20 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  ">
        <div className="w-full md:w-[75%] flex  flex-col  gap-9  ">
          <div className="flex flex-col gap-3">
            <span className="text-[32px] md:text-[40px] font-medium text-orange-200">
              {job?.post}
            </span>
            <span className="text-slate-300 text-[20px]">
              {job?.department}
            </span>
          </div>
          <PostResume job={job} setLoading={setLoading} />
        </div>
      </div>
    </div>
  );
};

const PostResume = ({
  job,
  setLoading,
}: {
  job: IJob | null;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { handleSubmit, register } = useForm();
  const [file, setFile] = useState<any>(null);

  const onSubmit = async (data: any, e: any) => {
    if (!/^\d{10}$/.test(data.phone)) {
      return toast.error("Invalid Phone Number", {
        duration: 1000,
        className: "bg-slate-700 text-white px-8",
      });
    }
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", data.firstname + " " + data.lastname);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("experience", data.experience);
      formData.append("jobid", job?.jobid.toString() as string);
      formData.append("department", job?.department.toString() as string);
      formData.append("post", job?.post.toString() as string);
      formData.append("category", job?.category.toString() as string);
      formData.append("file", file);

      await fetch("https://affirmity.in/api/apply-for-jobs", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(" Invalid Data");
          }
          return response.json();
        })
        .then((responseData) => {
          console.log(responseData);
          toast.success("Application accepted", {
            duration: 1000,
            className: "bg-slate-700 text-white px-8",
          });
        })
        .then(() => {
          e.target.reset();
          setFile(null);
          setLoading(false);
        });
    } catch (error: any) {
      setLoading(false);

      toast.error("Something Went Wrong", {
        duration: 1000,
        className: "bg-slate-700 text-white px-8",
      });
    }
  };

  return (
    <div className="w-full  flex justify-center items-center ">
      <div className="w-full h-full  flex flex-col  pt-20 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4    gap-14  ">
        <div className="flex flex-col w-full ">
          <span className="text-[32px] md:text-[40px] font-medium ">
            Post Your Resume
          </span>

          <p className="text-slate-300 text-[20px]">
            Become a Maker, Change the World
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
        >
          <input
            type="text"
            className="w-full outline-none  p-4  border-b border-slate-300  focus:border-orange-500 bg-black text-slate-200"
            placeholder="First Name*"
            {...register("firstname", { required: true })}
          />
          <input
            type="text"
            className="w-full outline-none  p-4  border-b border-slate-300  focus:border-orange-500 bg-black text-slate-200"
            placeholder="Last Name"
            {...register("lastname")}
          />

          <input
            type="email"
            className="w-full outline-none  p-4  border-b border-slate-300  focus:border-orange-500 bg-black text-slate-200"
            placeholder="Email*"
            {...register("email", { required: true })}
          />
          <input
            type="number"
            className="w-full outline-none  p-4  border-b border-slate-300  focus:border-orange-500 bg-black text-slate-200"
            placeholder="Phone*"
            {...register("phone", { required: true })}
          />
          <input
            type="number"
            className="w-full outline-none  p-4  border-b border-slate-300  focus:border-orange-500 bg-black text-slate-200"
            placeholder="Experience*"
            {...register("experience", { required: true })}
          />
          <div className="w-full flex flex-col">
            <span className="text-slate-400">Upload Your Resume*</span>
            <input
              type="file"
              className="w-full outline-none  p-4  border-b border-slate-300  focus:border-orange-500 bg-black text-slate-200"
              placeholder="Upload your Resume*"
              accept=".pdf, .doc, .docx"
              onChange={(e) => {
                if (e.target.files) {
                  setFile(e.target.files[0]);
                }
              }}
            />
          </div>
          <button className="w-fit  md:py-3 md:px-6 p-2   transition-all duration-300 bg-orange-500 ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
