import Image from "next/image";
import profileImg from "../../public/assets/images/ProfileImg.png";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            I have a strong interest in DevOps and has developed skills in
            various DevOps tools including{" "}
            <span className="text-textGreen">Git</span>,{" "}
            <span className="text-textGreen">GitHub</span>,{" "}
            <span className="text-textGreen">Docker</span>,{" "}
            <span className="text-textGreen">Kubernetes</span>,{" "}
            <span className="text-textGreen">Jenkins</span> and{" "}
            <span className="text-textGreen">AWS</span>. Im eager to continue
            building this skills and actively seeking opportunities to gain
            hands-on experience in the field.
          </p>
          <p>
            Recently Completed{" "}
            <span className="text-textGreen">
              Google IT Support Professional Certificate
            </span>{" "}
            — IT support program that covers troubleshooting, customer service,
            networking, operating systems, system administration, and security.
          </p>
          <p>
            I am constantly seeking personal growth and staying updated with the
            latest trends and advancements in my field. I believe in the power
            of lifelong learning and regularly engage in workshops, courses, and
            industry events to expand my skill set and stay at the forefront of
            innovation.
          </p>
          <p>Here are few technologies I have been working with,</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Linux
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Docker
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Kubernetes
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Python
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Jenkins
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Terraform
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              AWS
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="ProfileImage"
                height={385}
                width={380}
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
