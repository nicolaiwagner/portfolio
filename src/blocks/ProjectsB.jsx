import Projects from "../components/Projects";

function ProjectsB() {
  return (
    <div className="bg-navy-blue z-19">
      <div className="flex flex-col items-center gap-y-10 md:pb-16 md:border-t-2 ">
        <h2 className="font-fatface text-[2.8rem] uppercase text-egg-white pt-36 md:text-[3.5rem] lg:text-[5rem] border-b-2">
          My work
        </h2>
        <div className="flex flex-col gap-y-8 pt lg:flex-row lg:justify-around lg:w-full lg:px-16 xl:px-40 xl:pb-14">
          <Projects
            title="KAIKA Music"
            description="Homepage for the music booking company KAIKA Music. Build using Next.js, Typescript and tailwindcss, for a exam project at BAAA."
            image="./kaika.png"
            link="https://kaika-music.vercel.app/"
            github="https://github.com/SimonCalundan/KaikaMusic.git"
          />
          <Projects
            title="WebDoc"
            description="Web documentary made about a young artist to display his work and atelier. Build with HTML, CSS and Javascript. Made for a school project."
            image="./mark.png"
            link="http://nicotto.dk/WebDoc/webDoc/index.html"
            github="https://github.com/SimonCalundan/webDoc.git"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsB;
