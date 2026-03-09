import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Error = () => {
  return (
    <>
      <Helmet>
        <title>Affirmity Corp - 404 Page Not Found</title>
        <meta name="description" />
      </Helmet>
      <div className="w-screen flex flex-col justify-center items-center h-screen">
        <h1 className="error-h1  text-[224px] font-extrabold leading-none">
          404
        </h1>
        <h2 className="error-h2 text-[42px] font-bold text-white">
          Page Not Found
        </h2>

        <Link
          to="/"
          className="border border-orange-500 py-2 px-6 text-[14px] mt-10 text-orange-500 hover:border-purple-500 hover:text-purple-500 transition duration-300 ease-in-out "
        >
          HOMEPAGE
        </Link>
      </div>
    </>
  );
};

export default Error;
