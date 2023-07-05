import { useRef } from "react";

const Page = () => {
  const projects = [
    {
      title: "Lifeline",
      description: "Lifeline uses AI to automatically organize your deadlines",
      imageUrl: "big_ol_logo.png",
    },
    {
      title: "Lifeline2",
      description: "Lifeline uses AI to automatically organize your deadlines",
      imageUrl: "big_ol_logo.png",
    },
    {
      title: "Lifeline3",
      description: "Lifeline uses AI to automatically organize your deadlines",
      imageUrl: "big_ol_logo.png",
    },
    {
      title: "Lifeline4",
      description: "Lifeline uses AI to automatically organize your deadlines",
      imageUrl: "big_ol_logo.png",
    },
  ];

  const projectsRef = useRef(null);
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-emerald-300">
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
        className="flex flex-col items-center justify-center bg-amber-500"
        ref={projectsRef}
      >
        <h1 className="text-4xl font-bold ">Projects</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {projects.map((p) => (
            <Project
              title={p.title}
              description={p.description}
              imageUrl={p.imageUrl}
              key={p.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Project = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img className="w-full mb-4 rounded-lg" src={imageUrl} alt={title} />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Page;
