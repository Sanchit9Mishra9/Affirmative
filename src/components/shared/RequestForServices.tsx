/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "./Loading";
import { GlobalContext } from "@/lib/GlobalContextProvider";

export default function RequestForServices({
  buttonColor,
  text,
  query,
}: {
  buttonColor: string;
  text: string;
  query: string;
}) {
  const { handleSubmit, register } = useForm();

  const { loading, setLoading } = useContext(GlobalContext!) || {};

  const onSubmit = async (data: any, e: any) => {
    if (!/^\d{10}$/.test(data.phone)) {
      return toast.error("Invalid Phone Number", {
        duration: 1000,
        className: "bg-slate-700 text-white px-8",
      });
    }
    e.preventDefault();
    if (setLoading) {
      setLoading(true);
    }
    try {
      await fetch("https://affirmity.in/api/request-for-services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          category: query,
          type: text.toLocaleLowerCase() === "services" ? "services" : "demo",
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(" Invalid Data");
          }
          return response.json();
        })
        .then(() => {
          if (setLoading) {
            setLoading(false);
          }
          toast.success("Request delivered", {
            duration: 1000,
            className: "bg-slate-700 text-white px-8",
          });
        });
    } catch (error: any) {
      if (setLoading) {
        setLoading(false);
      }
      console.log(error);
      toast.error("Something Went Wrong", {
        position: "top-center",
        duration: 1000,
        className: "bg-slate-700 text-white px-8",
      });
    }

    e.target.reset();
  };
  return (
    <div className="w-full  flex justify-center items-center relative">
      {loading && <Loading />}

      <div className="w-full h-full  flex flex-col md:flex-row pt-20 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4 gap-6   md:gap-14  ">
        <div className="flex flex-col w-full min-[996px]:w-1/3 gap-6">
          <span className="text-[32px] md:text-[40px] font-medium">
            Request for {text}
          </span>

          <p className="text-slate-500 text-xl md:text-[20px]">
            Discover how we can help your organisation chart a successful path
            forward. Tell us your areas of interest, and we'll provide solutions
            to meet your needs.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full min-[996px]:2/3  flex-col flex gap-6 md:gap-10"
        >
          <div className="w-full grid grid-cols-2 gap-5">
            <input
              type="text"
              className="w-full outline-none  p-4  border-b border-slate-300  focus:border-red-100 bg-slate-100 text-slate-200"
              placeholder="Name *"
              required
              {...register("name")}
            />
            <input
              type="number"
              className="w-full outline-none  p-4  border-b border-slate-300  focus:border-red-100 bg-slate-100 text-slate-200"
              placeholder="Phone *"
              required
              {...register("phone")}
            />
          </div>
          <div className="w-full grid grid-cols-2 gap-5">
            <input
              type="email"
              className="w-full outline-none  p-4  border-b border-slate-300  focus:border-red-100 bg-slate-100 text-slate-200"
              placeholder="Email *"
              required
              {...register("email")}
            />
            <input
              type="text"
              className="w-full outline-none  p-4  border-b border-slate-300  focus:border-red-100 bg-slate-100 text-slate-200"
              placeholder="Company"
              {...register("company")}
            />
          </div>

          <textarea
            className="w-full outline-none  p-4  border-b border-slate-300  focus:border-red-100 bg-slate-100 text-slate-200 resize-none overflow-y-auto"
            placeholder="Tell us about Project*"
            required
            rows={4}
            {...register("description")}
          />

          <button
            className={`w-fit  md:py-3 md:px-6 p-2   transition-all duration-300 text-white ${buttonColor ? buttonColor : "bg-slaborder-slate-300"
              } `}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
