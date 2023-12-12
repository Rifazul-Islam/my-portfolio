import Card from "./Card";

const Projects = () => {
  return (
    <div className="py-20">
      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        data-aos-easing="linear"
      >
        <h1 className="text-4xl text-center text-blue-500 font-bold">
          {" "}
          My Projects
        </h1>
        <p className="mb-9 text-3xl font-bold text-center text-red-400">
          {" "}
          ...........................
        </p>
      </div>

      <div>
        <Card></Card>
      </div>
    </div>
  );
};

export default Projects;
