import SectionTitle from "./SectionTitle";
import votingApp from "../../public/assets/images/votingApp.png";
import k8sProjectImg from "../../public/assets/images/k8sProjectImg.png";
import DWSworkflow from "../../public/assets/images/DWSworkflow.png";
import { RxOpenInNewWindow } from "react-icons/rx";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Projects" titleNo="02" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/*******  Project One ********/}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="w-full xl:w-1/2 h-auto relative group">
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={votingApp}
                  alt="Project1"
                />
              </div>
            </div>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Project Features
              </p>
              <h3 className="text-2xl font-bold">Voting App</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Through this project I deploy{" "}
                <span className="text-textGreen">
                  Microservices application
                </span>{" "}
                on <span className="text-textGreen">Kubernetes cluster</span>. I
                have explored and analyzed, how various Kubernetes components
                work together. How configured YAML for{" "}
                <span className="text-textGreen">deployment</span> &{" "}
                <span className="text-textGreen">service</span> for any
                application in Kubernetes cluster.{" "}
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Python</li>
                <li>Kubernetes</li>
                <li>Redis</li>
                <li>PostgresSQL</li>
                <li>.NET</li>
                <li>NodeJS</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <p className="text-sm">GitHub Link</p>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/MFahad150/Voting-App-Project"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*******  Project Two ********/}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <div className="w-full xl:w-1/2 h-auto relative group">
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={k8sProjectImg}
                  alt="Project2"
                />
              </div>
            </div>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Project Features
              </p>
              <h3 className="text-2xl font-bold">k8s-webApp</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                In this project I deploy{" "}
                <span className="text-textGreen">mongoDB database</span> and a{" "}
                <span className="text-textGreen">Web application</span> which is
                connect to the mongoDB database using external configuration
                data from <span className="text-textGreen">configMap</span> and{" "}
                <span className="text-textGreen">Secrets</span> on{" "}
                <span className="text-textGreen">Kubernetes Cluster</span>.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>MongoDB</li>
                <li>configMap</li>
                <li>Secrets</li>
                <li>Kubernetes</li>
                <li>Database</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <p className="text-sm">GitHub Link</p>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/MFahad150/k8s-webApp"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*******  Project Three ********/}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="w-full xl:w-1/2 h-auto relative group">
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={DWSworkflow}
                  alt="Project3"
                />
              </div>
            </div>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Project Features
              </p>
              <h3 className="text-2xl font-bold">Dockerizing Wordpress Site</h3>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                In this project I containerize wordpress site using the{" "}
                <span className="text-textGreen">Docker Compose</span>. Docker
                compose simplifies the deployment and management of complex
                Docker applications by providing a declarative configurations
                files that defines the entire application stack.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Docker Compose</li>
                <li>MYSQL</li>
                <li>Docker Engine</li>
                <li>Persistent Volume</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <p className="text-sm">GitHub Link</p>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/MFahad150/Dockerizing-Wordpress-Site.git"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
