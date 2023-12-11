import img from "../../assets/my-picture.png";
import Typewriter from "typewriter-effect";
const Banner = () => {
  return (
    <div className="hero mx-auto mt-10 ">
      <div className="hero-content flex-col  lg:flex-row-reverse">
        <img
          style={{ objectFit: "cover" }}
          src={img}
          alt=""
          className=" sm:w-96 lg:h-[500px]   lg:w-1/2  mt-42 pb-20  rounded-lg shadow-2xl "
        />

        <div className=" sm:w-1/2  lg:w-1/2 justify-start text-white    ">
          <h1 className="text-red-100  text-1xl bottom-3">
            WELCOME TO MY WORLD
          </h1>

          <h1 className="text-purple-700 text-5xl ">
            {" "}
            <span className="text-white">Hi, I am </span>Rifazul Islam
          </h1>

          <div className="text-fuchsia-700 text-2xl mt-5 lg:text-5xl">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["Profesional Web Developer"],
              }}
            />
          </div>
          <p className="py-6 text-2xl mt-5 text-blue-300">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I not
            adding motion just to spruce things up, but doing it in ways that.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
