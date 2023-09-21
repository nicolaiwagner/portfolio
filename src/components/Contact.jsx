import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [form, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  async function handleSubmit(data) {
    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          service_id: "service_u1gz1ut",
          template_id: "template_k83x9e7",
          user_id: "IZde7gb2Nnlg3Azyl",
          template_params: data,
        }
      );
      console.log(response);
      toast.success("Mail sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  return (
    <section
      id="contact"
      className="flex flex-col pt-8 md:pt-20 lg:pt-[6.5rem] xl:pt-[9.5rem]"
    >
      <Toaster position="bottom-center" />
      <form className="flex flex-col font-merri text-egg-white self-center lg:mx-auto xl:pr-10">
        <div className="flex flex-col">
          <label htmlFor="name" className="pb-1 xl:text-[22px]">
            Name
          </label>
          <input
            onChange={(e) => {
              setFormData({ ...form, name: e.target.value });
              console.log(e.target.value);
            }}
            className="border-[4px] text-[12px] italic placeholder-slate-300 border-egg-white border-double bg-text-purple rounded-3xl h-10 w-80 pl-2 xl:w-[22rem] xl:h-[3rem] xl:placeholder:text-[0.9rem] "
            type="text"
            name="name"
            id="name"
            placeholder="Write your name"
          />
          <label htmlFor="email" className="pb-1 mt-1 xl:text-[22px]">
            Email
          </label>
          <input
            onChange={(e) => {
              setFormData({ ...form, email: e.target.value });
              console.log(e.target.value);
            }}
            className="border-[4px] text-[12px] italic placeholder-slate-300 border-egg-white border-double bg-text-purple rounded-3xl h-10 w-80 pl-2 xl:w-[22rem] xl:h-[3rem] xl:placeholder:text-[0.9rem]"
            type="text"
            name="email"
            id="email"
            placeholder="Write your email"
          />
        </div>
        <label htmlFor="subject" className="pb-1 mt-1 xl:text-[22px]">
          Topic
        </label>
        <input
          onChange={(e) => {
            setFormData({ ...form, subject: e.target.value });
            console.log(e.target.value);
          }}
          className="border-[4px] text-[12px] italic placeholder-slate-300 border-egg-white border-double bg-text-purple rounded-3xl h-10 w-80 pl-2 xl:w-[22rem] xl:h-[3rem] xl:placeholder:text-[0.9rem]"
          type="text"
          name="subject"
          id="subject"
          placeholder="What is the topic?"
        />
        <label htmlFor="message" className="mt-1 xl:text-[22px]">
          Message
        </label>
        <textarea
          cols={30}
          rows={5}
          onChange={(e) => {
            setFormData({ ...form, message: e.target.value });
            console.log(e.target.value);
          }}
          className="border-[4px] text-[12px] italic placeholder-slate-300 border-egg-white border-double bg-text-purple rounded-3xl h-56 w-80 pl-2 pt-2 xl:w-[22rem] xl:placeholder:text-[0.9rem] "
          type="text"
          name="message"
          id="message"
          placeholder="Write your message here"
        ></textarea>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(form);
          }}
          className=" border-egg-white text-egg-white font-merri text-lg border-8 rounded-full border-double flex justify-center items-center h-[3.5rem] mt-2 xl:h-[3.7] xl:text-[22px] "
        >
          Lets get in touch!
        </button>
      </form>
    </section>
  );
}

export default Contact;
