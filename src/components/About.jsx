import Image from "next/image";
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            cum reiciendis quos atque, assumenda doloremque vel tempore odit
            aliquam laborum accusamus consectetur dolorem maxime sapiente magni
            dolores repellendus, a error.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            cum reiciendis quos atque, assumenda doloremque vel tempore odit
            aliquam laborum accusamus consectetur dolorem maxime sapiente magni
            dolores repellendus, a error.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            cum reiciendis quos atque, assumenda doloremque vel tempore odit
            aliquam laborum accusamus consectetur dolorem maxime sapiente magni
            dolores repellendus, a error.
          </p>
          <p>Here are few tools I have been working with,</p>
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
          </ul>
        </div>
        <div>
          <div></div>
          <div>
            {/* <Image className="rounded-lg h-full object-cover" src="../../public/assets/images/1.jpeg" alt="Profile-Image" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
