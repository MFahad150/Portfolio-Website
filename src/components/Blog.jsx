import { useState } from "react";
import BlogCard from "./BlogCard";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const Blog = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section
      id="blog"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="Blogs" titleNo="03" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <BlogCard
          title="Brief History of DevOps"
          des="DevOps has grown since its initial conception in 2007-2008. DevOps is a shared philosophy in which development and operations teams work together."
          listItem={["DevOps", "Timeline", "Patrick Debois"]}
          link="https://medium.com/@mfahad1667/brief-history-of-devops-c295d54d099d"
        />
        <BlogCard
          title="Infrastructure as Code (IaC)"
          des="Infrastructure as Code is the practice of describing infrastructure in executable textual format. "
          listItem={["Server", "YAML", "JSON"]}
          link="https://www.linkedin.com/posts/muhammad-fahad-b9a985220_management-kubernetes-software-activity-7059489352900317184-fouv?utm_source=share&utm_medium=member_desktop"
        />
        <BlogCard
          title="Social Coding"
          des="Social coding empowers programmers to work together efficiently, learn from one another, and create high-quality software."
          listItem={["Pair Programming", "Open Source"]}
          link="https://medium.com/@mfahad1667/social-coding-6eaa4e7dd2ed"
        />
        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <BlogCard
                title="Test-Driven Development (TDD)"
                des="Test-Driven Development (TDD) is a methodology in software development that focuses on creating unit test cases before developing the actual code. "
                listItem={["Clean Code", "Test Cases"]}
                link="https://www.linkedin.com/posts/muhammad-fahad-b9a985220_devops-testdrivendevelopment-quality-activity-7062776737159426049-j32H?utm_source=share&utm_medium=member_desktop"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </section>
  );
};

export default Blog;
