import logo from "../assets/C.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
       <a href="https://www.linkedin.com/in/mohamed-barbych-42217b276?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2F74SOQ%2FnTOmk3e2aQN3NSw%3D%3D">
       <FaLinkedin/>
       </a> 
       <a href="https://github.com/MohamedBarbych">
        <FaGithub/>
       </a>
       <a href="https://x.com/MBarbych50505">
        <FaSquareXTwitter/>
       </a>
        <FaInstagram/>

      </div>
    </nav>
  );
};

export default NavBar;
