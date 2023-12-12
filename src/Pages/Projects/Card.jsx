import job1 from "../../assets/job1.png";
import job2 from "../../assets/job2.png";
import job3 from "../../assets/job3.png";
import Slider from "../Slider/Slider";
const Card = () => {
  return (
    <div>
      <div className="mx-auto mt-14 pb-7 duration-5000 px-8 lg:px-10   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card card-compact    bg-neutral shadow-xl">
          <Slider img1={job1} img2={job2} img3={job3}></Slider>
          <div className="card-body">
            <h2 className="card-title text-white ">Job Nestle</h2>
            <p className="text-white">
              Through this project, online job services have been developed for,
              the major advantage of this...
            </p>
            <div className="card-actions justify-end">
              {/* <Link to='/Details' > <button className="btn btn-primary">Visited Now <BsArrowRight className='pl-2 text-white text-2xl'/> </button>   </Link> */}
            </div>
          </div>
        </div>

        <div className="card card-compact    bg-neutral shadow-xl">
          <Slider img1={job1} img2={job2} img3={job3}></Slider>
          <div className="card-body">
            <h2 className="card-title text-white ">Job Nestle</h2>
            <p className="text-white">
              Through this project, online job services have been developed for,
              the major advantage of this...
            </p>
            <div className="card-actions justify-end">
              {/* <Link to='/Details' > <button className="btn btn-primary">Visited Now <BsArrowRight className='pl-2 text-white text-2xl'/> </button>   </Link> */}
            </div>
          </div>
        </div>

        <div className="card card-compact    bg-neutral shadow-xl">
          <Slider img1={job1} img2={job2} img3={job3}></Slider>
          <div className="card-body">
            <h2 className="card-title text-white ">Job Nestle</h2>
            <p className="text-white">
              Through this project, online job services have been developed for,
              the major advantage of this...
            </p>
            <div className="card-actions justify-end">
              {/* <Link to='/Details' > <button className="btn btn-primary">Visited Now <BsArrowRight className='pl-2 text-white text-2xl'/> </button>   </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
