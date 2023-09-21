function Sidebar({ isOpen = false }) {
  return (
    <div
      className={`absolute top-0 right-0 h-screen w-screen backdrop-blur-lg backdrop-brightness-50 ${
        isOpen ? "opacity-100 visible" : "opacity-0 hidden"
      } transition-all font-fatface text-[3rem] text-egg-white flex flex-col text-center justify-center gap-y-10 `}
    >
      <a href="#workLink">Work</a>
      <a href="#aboutLink">About</a>
      <a href="#contactLink">Contact</a>
    </div>
  );
}

export default Sidebar;
