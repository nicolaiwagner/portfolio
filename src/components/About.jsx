import AboutText from "../blocks/AboutText";
function About() {
  return (
    <>
      <section className="z-10 flex flex-col w-full md:flex-row ">
        <div className=" md:w-1/2">
          <img className="w-full" src={"../profil.jpg"} alt="#" />
        </div>
        <AboutText />
      </section>
    </>
  );
}

export default About;
