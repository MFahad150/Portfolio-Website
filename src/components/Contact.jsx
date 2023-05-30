import SectionTitle from "./SectionTitle";
const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <SectionTitle title="Contact" titleNo="03" />
      <h2 className="font-titleFont text-3xl font-semicold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
      Although I’m currently looking for any new opportunities. Feel free to reach out to me for any inquiries, collaborations, or simply to say hello. I'm always excited to connect with like-minded individuals and explore new opportunities.
      </p>
      <p className="max-w-[600px] text-center text-textDark">you can connect with me on professional networking platform <span className="text-textGreen">LinkedIn</span>. Feel free to send me a connection request and let's stay in touch</p>
    <a href="mailto:mfahad1667@gmail.com" target="_blank">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300 ">Contact Me</button>
    </a>
    </section>
  );
};
export default Contact;
