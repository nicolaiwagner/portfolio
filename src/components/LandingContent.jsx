import ButtonA from "./ButtonA";

function LandingContent() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-egg-white md:justify-end lg:justify-end 2xl:justify-center">
      <h1 className=" font-fatface text-[3.5rem] mt-[3rem] mb-[2rem] pl-[1rem] uppercase top-[14rem] md:text-[4rem] md:mb-[6rem] md:mt-[3rem] md:max-w-1/4 lg:text-[5rem] lg:mt-[3rem] xl:text-[6rem] xl:ml-[3rem] xl:self-start 2xl:text-[7.5rem] ">
        Striving to <br /> create and elevate
      </h1>
      <div className="flex flex-col align-bottom md:mb-[3rem] lg:self-end lg:mr-[2rem] xl:self-end xl:mr-[5rem] ">
        <p className=" text-center font-raleway text-[1rem] mb-4 md:text-[1.5rem] 2xl:text-[2.5rem]">
          Hi im Nicolai <br />
          My passion is web development
        </p>
        <ButtonA />
      </div>
    </div>
  );
}

export default LandingContent;
