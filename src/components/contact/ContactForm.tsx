/* eslint-disable @typescript-eslint/no-explicit-any */
import { GlobalContext } from "@/lib/GlobalContextProvider";
import { ChevronRight } from "lucide-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaPhoneAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

export default function ContactForm() {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - Contact</title>
        <meta
          name="description"
          content="Contact Affirmity Corp for services, media queries, investor relations, general inquiries, website feedback, and partnerships."
        />
      </Helmet>
      <div className="w-full  flex flex-col  justify-center items-center relative ">
        {/* banner */}
        <div className="w-full h-[45vh] flex justify-center bg-[rgb(18,18,18)]">
          <div className="w-full h-full  flex flex-col  pt-20  px-6  max-w-7xl  md:px-10  min-[1280px]:px-4  gap-14 ">
            <div className="w-full md:w-1/2 flex flex-col items-start  justify-between h-full  py-8">
              {/* navigation */}
              <div className="flex w-fit gap-3 ">
                <div className="w-fit flex gap-2 justify-center items-center">
                  <span className="text-xs md:text-sm">Contact</span>

                  <div className="bg-slate-200">
                    <ChevronRight className="w-2 h-2 md:w-3 md:h-3 text-black" />
                  </div>
                </div>
              </div>

              <span className="text-3xl md:text-6xl font-semibold text-slate-300">
                Contact Us
              </span>
            </div>
          </div>
        </div>
        <FormContainer />
        <Address />
      </div>
    </>
  );
}

const FormContainer = () => {
  return (
    <div className="w-full  flex justify-center items-center  ">
      <div className="w-full h-full  flex flex-col  pt-20 md:py-20  px-6 max-w-7xl   md:px-10  min-[1280px]:px-4  gap-14 ">
        <div className="w-full md:w-[80%] flex flex-col gap-8">
          <span className="text-3xl md:text-6xl font-semibold  text-slate-400">
            Get in touch
          </span>
          <p className="font-thin md:text-xl">
            Please let us know what service you are interested in by completing
            the form below. We will get in touch with you shortly.
          </p>

          <p className="font-semibold">
            Mandatory fields are marked with{" "}
            <span className="text-primary">*</span>
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
};

const Form = () => {
  const { handleSubmit, register } = useForm();
  const { setLoading } = useContext(GlobalContext!) || {};
  const onSubmit = async (data: any, e: any) => {
    if (setLoading) {
      setLoading(true);
    }
    try {
      await fetch("https://affirmity.in/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
          e.target.reset();
          toast.success("Request delivered", {
            duration: 1000,
            className: "bg-slate-700 text-white px-8",
          });
        });
    } catch (error: any) {
      if (setLoading) {
        setLoading(false);
      }
      console.error(error.message);
      toast.error("Something Went Wrong", {
        position: "top-center",
        duration: 1000,
        className: "bg-slate-700 text-white px-8",
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex gap-10 md:p-6 flex-col"
    >
      <input
        type="text"
        placeholder="NAME *"
        required
        className="w-full p-4 outline-none border-b border-slate-50 bg-transparent"
        {...register("name")}
      />{" "}
      <input
        type="email"
        required
        placeholder="EMAIL *"
        className="w-full p-4 outline-none border-b border-slate-50 bg-transparent"
        {...register("email")}
      />
      <input
        type="text"
        required
        placeholder="COMPANY "
        className="w-full p-4 outline-none border-b border-slate-50 bg-transparent"
        {...register("company")}
      />
      <div className="w-full flex flex-col ">
        <span className="text-slate-400">RELATIONSHIP WITH AFFIRMITY</span>

        <select
          required
          className="w-full p-4 outline-none border-b border-slate-50 bg-transparent cursor-pointer"
          {...register("relationship")}
        >
          <option className="text-slate-900" value="client">
            Client
          </option>
          <option className="text-slate-900" value="partner">
            Partner
          </option>
          <option className="text-slate-900" value="prospect">
            Prospect
          </option>
          <option className="text-slate-900" value="vendor">
            Vendor
          </option>
          <option className="text-slate-900" value="other">
            Other
          </option>
        </select>
      </div>
      <textarea
        placeholder="PLEASE PROVIDE A BRIEF DESCRIPTION OF YOUR REQUEST *"
        required
        className="w-full p-4 outline-none border-b border-slate-50 bg-transparent resize-none"
        rows={3}
        {...register("description")}
      ></textarea>
      <button className="bg-purple-500 w-fit  md:py-3 md:px-6 p-2 hover:brightness-75  transition-all duration-300  ">
        Submit
      </button>
    </form>
  );
};

const Address = () => {
  return (
    <div className="w-full  flex justify-center items-center  ">
      <div className="w-full h-full  flex flex-col     px-6 max-w-7xl   md:px-10  min-[1280px]:px-4 gap-10  md:gap-12 ">
        <div className="w-full flex flex-col gap-6 md:gap-12">
          <span className="text-[24px] md:text-6xl font-semibold  text-slate-400">
            Locations
          </span>
          <div className="w-full flex max-md:flex-col gap-6 md:justify-start md:gap-12 ">
            <div className="w-1/2 flex flex-col text-slate-300 gap-1">
              <span className="font-medium text-xl">Office: </span>
              <span>R-59 First Floor, </span>
              <span>Zone 1 M.P. Nagar, </span>
              <span>Huzur, Bhopal, Madhya Pradesh, </span>
              <span>462011</span>
              <div className="w-full flex gap-2 items-center">
                <FaPhoneAlt className="w-4 h-4 text-slate-300" />
                <span>07554266576</span>
              </div>
            </div>
            <div className="w-1/2 flex flex-col text-slate-300 gap-1">
              <span className="font-medium text-xl">Office: </span>
              <span>Knowledge Resource Centre , RGPV</span>

              <span>Abbas Nagar, Gandhi Nagar, </span>

              <span>Bhopal, Madhya Pradesh,</span>
              <span>462033</span>
              <div className="w-full flex gap-2 items-center">
                <FaPhoneAlt className="w-4 h-4 text-slate-300" />
                <span>07554266576</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
