import { useRef } from "react";
import "./App.css";
import DefaultCarousel from "./Carousel";

const Page = () => {
  const projectsRef = useRef(null);
  return (
    <div className="w-">
      <div className="flex flex-col items-center justify-center h-screen bg-emerald-400">
        <h1 className="text-4xl font-bold mb-8">Timothy Macphail</h1>
        <div className="flex justify-between w-96">
          <a
            href="mailto:timothy.macphail@gmail.com"
            className="text-blue-500 hover:text-blue-700"
          >
            Email
          </a>
          <div className="h-6 border-l-2 border-gray-400" />
          <a
            href="https://www.linkedin.com/in/timothy-macphail/"
            className="text-blue-500 hover:text-blue-700"
          >
            LinkedIn
          </a>
          <div className="h-6 border-l-2 border-gray-400" />
          <a
            href="https://github.com/tim-macphail"
            className="text-blue-500 hover:text-blue-700"
          >
            GitHub
          </a>
          <div className="h-6 border-l-2 border-gray-400" />
          <a
            href="https://drive.google.com/file/d/1D45qLaHtW9Ykewy_Fcb0JkfqcPGu09wr/view?usp=sharing"
            className="text-blue-500 hover:text-blue-700"
          >
            Resume
          </a>
        </div>
        <button
          className="mt-6 flex flex-row cursor-pointer"
          onClick={() => {
            projectsRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <p>Projects</p>
          <span className="material-icons">expand_more</span>
        </button>
      </div>
      <div
        className="flex flex-col items-center justify-center h-screen bg-amber-600"
        ref={projectsRef}
      >
        <h1 className="text-4xl font-bold ">Projects</h1>
        <DefaultCarousel />
      </div>
    </div>
  );
};

export default Page;
