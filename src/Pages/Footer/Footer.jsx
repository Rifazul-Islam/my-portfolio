import { Link } from "react-router-dom";
import logo from "../../assets/imgs.png";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-14">
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <div className="avatar ml-5">
            <div className="w-14 mb-2 rounded-full ring ring-gray-400 ">
              <img src={logo} alt="" />
            </div>
          </div>
          <p>
            Rifazul Islam
            <br /> rifazul60@gmail.com
          </p>
        </div>
        <div>
          <span className="footer-title">Contact Social Media</span>
          <div className="grid grid-flow-col gap-4">
            <Link
              href="https://www.linkedin.com/in/rifazul-islam/"
              target="_blank"
            >
              {" "}
              <AiOutlineLinkedin className="text-3xl  text-white " />{" "}
            </Link>
            <Link href="https://github.com/Rifazul" target="_blank">
              {" "}
              <AiOutlineGithub className="text-3xl" />{" "}
            </Link>
            <Link href="https://twitter.com/home" target="_blank">
              {" "}
              <AiOutlineTwitter className="text-3xl" />{" "}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
