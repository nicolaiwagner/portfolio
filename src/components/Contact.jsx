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
    <section id="contact" className="flex flex-col">
      <Toaster />
      <div>
        <h2>Hej med dig</h2>
        <p>Her skriver jeg om hvad vi kan snakke om hvis du skriver til mig</p>
      </div>
      <form className="flex flex-col font-merri self-center">
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => {
              setFormData({ ...form, name: e.target.value });
              console.log(e.target.value);
            }}
            className="border-2 border-neon-purple rounded-2xl h-10 w-80 pl-2"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => {
              setFormData({ ...form, email: e.target.value });
              console.log(e.target.value);
            }}
            className="border-2 border-neon-purple rounded-2xl h-10 w-80 pl-2"
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <label htmlFor="subject">Subject</label>
        <input
          onChange={(e) => {
            setFormData({ ...form, subject: e.target.value });
            console.log(e.target.value);
          }}
          className="border-2 border-neon-purple rounded-2xl h-10 w-80 pl-2"
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
        />
        <label htmlFor="message">Message</label>
        <textarea
          cols={30}
          rows={5}
          onChange={(e) => {
            setFormData({ ...form, message: e.target.value });
            console.log(e.target.value);
          }}
          className="border-2 border-neon-purple rounded-2xl h-60 w-80 pl-2"
          type="text"
          name="message"
          id="message"
          placeholder="Message"
        ></textarea>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(form);
          }}
        >
          Send mail
        </button>
      </form>
    </section>
  );
}

export default Contact;
