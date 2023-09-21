import Contact from "../components/Contact";
import Lottie from "lottie-react";
import animationData from "../assets/animation_lmryriky.json";

function ContactB() {
  return (
    <>
      <section className=" bg-navy-blue z-10 lg:flex lg:flex-row lg:justify-evenly ">
        <div className="flex flex-col md:flex-row lg:flex-col lg:max-w-[50vw] xl:mr-[2rem]">
          <div className="w-[80%] text-egg-white flex flex-col justify-center gap-2 ml-12 ">
            <p className="text-[1.5rem] font-merri text-text-purple pt-16 md:text-[1.2rem]">
              Contact
            </p>

            <h2 className="font-fatface text-[2.8rem] lg:text-[3rem] xl:text-[4.3rem] xl:pr-4">
              Struggling to crack a puzzle?
            </h2>
            <p className="font-raleway text-[1rem] self-center lg:text-[1.2rem] xl:text-[1.4rem] xl:pr-8">
              <span className="">...Or just need a problem solved?</span> <br />
              Feel free to tell me your ideas for your dream website, or just
              say hi! Im open to get in contact and talk about how we can create
              together.
            </p>
          </div>
          <Lottie
            className=" w-[80%] mx-auto xl:w-[30vw]"
            animationData={animationData}
          />
        </div>
        <Contact />
      </section>
    </>
  );
}

export default ContactB;
