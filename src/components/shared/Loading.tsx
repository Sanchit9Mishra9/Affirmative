import ReactLoading from "react-loading";
export default function Loading() {
  return (
    <div className=" fixed  w-screen h-screen z-[99999] bg-black backdrop-filter backdrop-blur-sm bg-opacity-60 flex justify-center items-center">
      <div className="w-fit h-fit  ">
        <ReactLoading
          type="spinningBubbles"
          color="#f2f2f2"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
}
