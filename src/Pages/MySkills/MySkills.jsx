import { AiFillFire, AiFillHtml5 } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { DiResponsive } from "react-icons/di";
const MySkills = () => {
  return (
    <div id="skills" className="mt-24 pb-7 duration-1000 px-8 lg:px-10">
      <h1 className="text-5xl text-center text-blue-500"> My Skills</h1>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 pt-12">
        <div
          className="card  bg-neutral text-primary-content card-compact cursor-pointer   
         border-4 border-indigo-500 rounded-[15px] overflow-hidden transition-all hover:scale-105 
         hover:shadow-2xl hover:border-red-600 group py-3"
        >
          <div className="card-body">
            <h2 className="card-title">
              {" "}
              <AiFillHtml5 className="text-5xl text-white m-auto" />{" "}
            </h2>

            <h1 className="text-white text-center text-2xl"> Design Trends </h1>
            <p> </p>
          </div>
        </div>

        <div
          className="card  bg-neutral text-primary-content card-compact cursor-pointer   
         border-4 border-indigo-500 rounded-[15px] overflow-hidden transition-all hover:scale-105 
         hover:shadow-2xl hover:border-red-600 group py-3"
        >
          <div className="card-body">
            <h2 className="card-title">
              {" "}
              <FaReact className="text-5xl text-white m-auto" />{" "}
            </h2>

            <h1 className="text-white text-center text-2xl"> Fontend</h1>
            <p> </p>
          </div>
        </div>

        <div
          className="card  bg-neutral text-primary-content card-compact cursor-pointer   
         border-4 border-indigo-500 rounded-[15px] overflow-hidden transition-all hover:scale-100 
         hover:shadow-2xl hover:border-red-600 group py-3"
        >
          <div className="card-body">
            <h2 className="card-title">
              {" "}
              <SiMongodb className="text-5xl text-white m-auto" />{" "}
            </h2>

            <h1 className="text-white text-center text-2xl"> MongoDB </h1>
            <p> </p>
          </div>
        </div>

        <div
          className="card  bg-neutral text-primary-content card-compact cursor-pointer   
         border-4 border-indigo-500 rounded-[15px] overflow-hidden transition-all hover:scale-105 
         hover:shadow-2xl hover:border-red-600 group py-3"
        >
          <div className="card-body">
            <h2 className="card-title">
              {" "}
              <AiFillFire className="text-5xl text-white m-auto" />{" "}
            </h2>

            <h1 className="text-white text-center text-2xl"> Authentication</h1>
            <p> </p>
          </div>
        </div>

        <div
          className="card  bg-neutral text-primary-content card-compact cursor-pointer   
         border-4 border-indigo-500 rounded-[15px] overflow-hidden transition-all hover:scale-105 
         hover:shadow-2xl hover:border-red-600 group py-3"
        >
          <div className="card-body">
            <h2 className="card-title">
              {" "}
              <TbBrandJavascript className="text-5xl text-white m-auto" />{" "}
            </h2>

            <h1 className="text-white text-center text-2xl">
              {" "}
              Web Development{" "}
            </h1>
            <p> </p>
          </div>
        </div>

        <div
          className="card  bg-neutral text-primary-content card-compact cursor-pointer   
         border-4 border-indigo-500 rounded-[15px] overflow-hidden transition-all hover:scale-100 
         hover:shadow-2xl hover:border-red-600 group py-3"
        >
          <div className="card-body">
            <h2 className="card-title">
              {" "}
              <DiResponsive className="text-5xl text-white m-auto" />{" "}
            </h2>

            <h1 className="text-white text-center text-2xl">
              {" "}
              Fully Resposive
            </h1>
            <p> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
