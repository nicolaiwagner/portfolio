import { useTypewriter } from "react-simple-typewriter";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function AboutText() {
  const [typeEffect] = useTypewriter({
    words: ["Detail driven", "Coding nerd", "Problem solver", "Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <>
      <section className=" bg-navy-blue flex flex-col z-100 gap-y-6 md:w-1/2 md:gap-y-4 lg:pt-20 xl:pt-40 xl:pl-14 xl:pb-20">
        <div className="flex flex-col ml-2 mt-4 lg:pl-2">
          <h2 className=" text-[1.5rem] font-merri text-text-purple md:text-[1.2rem]">
            About
          </h2>
          <span className="text-[2.8rem] font-fatface uppercase text-egg-white sticky md:text-[2rem] xl:text-[3rem]">
            {typeEffect} <span className=" opacity-0 text-[0.02rem]">h</span>
          </span>
        </div>
        <div className=" text-[1rem] text-egg-white font-raleway mx-[1rem] md:text-[0.9rem] lg:pr-20 xl:text-[1.1rem] xl:pr-60 ">
          <p>
            I am Nicolai, a passionate frontend developer with a desire to
            create websites and applications that move people. My toolkit
            includes{" "}
            <span className=" text-text-orange">
              HTML, CSS, JavaScript, React.js, Tailwind CSS, and Next.js.
            </span>{" "}
            <br /> <br />
            But my love for coding lies within the many possibilities of web-
            and personal development. The programming universe knows no limits.{" "}
            <span className=" text-text-orange">
              {" "}
              I strive to elevate my expertise
            </span>{" "}
            by learning and delivering the best websites possible.
          </p>
        </div>
        <div className="flex flex-col self-center">
          <h3 className=" text-[1.3rem] text-text-purple font-merri md:text-[1rem] xl:text-[1.3rem] xl:py-3 xl:mt-10">
            Check out my socials
          </h3>
          <div className="flex flex-row text-egg-white text-[3rem] self-center md:text-[2.5rem] md:gap-x-4">
            <a
              target="_blank"
              href="https://github.com/nicolaiwagner"
              rel="noreferrer"
            >
              <FaGithubSquare />
            </a>
            <a
              id="workLink"
              target="_blank"
              href="https://www.linkedin.com/in/nicolai-wagner-3ab74024a"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutText;
