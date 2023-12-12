import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Eduction from "../Eduction/Eduction";
import MySkills from "../MySkills/MySkills";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Projects></Projects>
      <MySkills></MySkills>
      <Eduction></Eduction>
      <About></About>
      <Contact></Contact>
      {/* https://quiet-panda-f4321d.netlify.app/ */}
    </div>
  );
};

export default Home;
