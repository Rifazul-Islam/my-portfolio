const About = () => {
  return (
    <div id="about" className="mt-14 pb-7 duration-1000">
      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-easing="linear"
      >
        <h1
          className="text-5xl text-center text-blue-500 font-bold"
          id="#about"
        >
          {" "}
          About Me{" "}
        </h1>
        <p className="mb-9 text-3xl font-bold text-center text-red-400">
          {" "}
          ...........................
        </p>
      </div>
      <div data-aos="flip-right" data-aos-duration="1500">
        <p className="text-white mt-5 sm:w-1/2 lg:w-1/2 m-auto  ">
          Hello, my name is Rifazul Islam, I am a web developer. I am a current
          web developer learning new technologies. And I like to learn
          technology. I have a desire to present the world with new things. I am
          working accordingly.
        </p>
      </div>
    </div>
  );
};

export default About;
