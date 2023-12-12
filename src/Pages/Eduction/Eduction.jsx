import { IoBookOutline } from "react-icons/io5";
const Eduction = () => {
  return (
    <div>
      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-easing="linear"
        className="py-10"
      >
        <h1 className="text-4xl text-center text-blue-500 font-bold">
          {" "}
          Education
        </h1>
        <p className="mb-9 text-3xl font-bold text-center text-red-400">
          {" "}
          ...........................
        </p>
      </div>

      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="card card-compact w-96 mx-auto bg-[#323A46] shadow-xl"
      >
        <div className="text-center mx-auto py-4">
          <IoBookOutline className=" text-4xl " />
        </div>

        <div className="card-body">
          <h2 className="card-title text-center text-2xl text-white">
            B.A Honours ( 3rd year) National University.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Eduction;
