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
      Although I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or any question, I’ll try my best to get back to you!
      </p>
    <a href="mailto:mfahad1667@gmail.com" target="_blank">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300 ">Contact Me</button>
    </a>
    </section>
  );
};
export default Contact;
