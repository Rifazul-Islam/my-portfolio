import job1 from "../../assets/job1.png";
import job2 from "../../assets/job2.png";
import job3 from "../../assets/job3.png";
import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import doc1 from "../../assets/doc1.png";
import doc2 from "../../assets/doc2.png";
import doc3 from "../../assets/doc3.png";
import Slider from "../Slider/Slider";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div>
      <div className="mx-auto mt-14 pb-7 duration-5000 px-8 lg:px-10   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card card-compact    bg-neutral shadow-xl">
          <Slider img1={job1} img2={job2} img3={job3}></Slider>
          <div className="card-body">
            <h2 className="card-title text-white">Job Nestle</h2>
            <p className="text-white">
              Through this project, online job services have been developed for,
              the major advantage of this...
            </p>
            <div className="card-actions justify-center  py-4">
              <Link
                target="blank"
                to="https://clinquant-salmiakki-88d614.netlify.app/"
              >
                {" "}
                <button className="btn btn-success  border-none">
                  Live Site
                </button>{" "}
              </Link>

              <Link
                target="blank"
                to="https://github.com/Rifazul-Islam/job-nestle-client-side"
              >
                {" "}
                <button className="btn btn-success  border-none">
                  Client Site{" "}
                </button>{" "}
              </Link>
              <Link
                target="blank"
                to="https://github.com/Rifazul-Islam/job-nestle-server-side"
              >
                {" "}
                <button className="btn btn-success  border-none">
                  Server Site{" "}
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact    bg-neutral shadow-xl">
          <Slider img1={car1} img2={car2} img3={car3}></Slider>
          <div className="card-body">
            <h2 className="card-title text-white">Automotive</h2>
            <p className="text-white">
              Through this project, online Automotive services have been
              developed for, the major advantage of this...
            </p>
            <div className="card-actions justify-center  py-4">
              <Link
                target="blank"
                to="(https://automotive-client-side.web.app/"
              >
                {" "}
                <button className="btn btn-success  border-none">
                  Live Site
                </button>{" "}
              </Link>

              <Link
                target="blank"
                to="https://github.com/Rifazul-Islam/brand-shop-client-side"
              >
                {" "}
                <button className="btn btn-success  border-none">
                  Client Site{" "}
                </button>{" "}
              </Link>
              <Link>
                {" "}
                <button className="btn btn-success  border-none">
                  Server Site{" "}
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>

        <div className="card card-compact    bg-neutral shadow-xl">
          <Slider img1={doc1} img2={doc2} img3={doc3}></Slider>
          <div className="card-body">
            <h2 className="card-title text-white ">Diagnostic</h2>
            <p className="text-white">
              Through this project, online Diagnostic services have been
              developed for, the major advantage of this...
            </p>
            <div className="card-actions justify-center py-4">
              <Link target="blank" to="https://diagnostic-client-side.web.app">
                {" "}
                <button className="btn btn-success  border-none">
                  Live Site
                </button>{" "}
              </Link>

              <Link
                target="blank"
                to="https://github.com/Rifazul-Islam/diagnostic-client-side"
              >
                {" "}
                <button className="btn btn-success  border-none">
                  Client Site{" "}
                </button>{" "}
              </Link>
              <Link
                target="blank"
                to="https://github.com/Rifazul-Islam/diagnostic-server-side"
              >
                {" "}
                <button className="btn btn-success  border-none">
                  Server Site{" "}
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
