import { FaGithubSquare } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

function Projects({
  title = "title",
  description = "description",
  image = "./kaika.png",
  link = "#",
  github = "#",
}) {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className=" relative h-96 w-80 shrink-0 overflow-hidden rounded-xl border-double bg-navy-blue border-4 border-text-orange p-8 backdrop-blur-sm group lg:w-96"
      >
        <div className="absolute w-full h-full backdrop-blur-[2px] backdrop-brightness-50 top-0 left-0 transition-all duration-500"></div>
        <div className="relative z-10 text-egg-white transition-all duration-500 ">
          <span className="mb-3 block w-fit rounded-full bg-slate-400 px-3 py-0.5 text-xs font-ralway">
            Project
          </span>
          <span className="my-2 block origin-top-left font-fatface text-3xl font-light leading-[1.2] lg:text-4xl">
            {title}
          </span>
          <p className="font-raleway w-[90%] lg:text-lg ">{description}</p>
          <div className="flex flex-row justify-start w-[20vw] text-egg-white text-4xl pt-20 px4 ">
            <a rel="noreferrer" target="_blank" href={github}>
              <FaGithubSquare />
            </a>
            <a rel="noreferrer" target="_blank" href={link}>
              <AiOutlineLink />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
