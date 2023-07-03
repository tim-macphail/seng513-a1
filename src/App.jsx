import "./App.css";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Timothy Macphail</h1>
      <div className="flex justify-between w-48">
        <a
          href="mailto:timothy.macphail@gmail.com"
          className="text-blue-500 hover:text-blue-700"
        >
          Email
        </a>
        <div className="h-6 border-l-2 border-gray-400"></div>
        <a
          href="https://www.linkedin.com/in/timothy-macphail/"
          className="text-blue-500 hover:text-blue-700"
        >
          LinkedIn
        </a>
        <div className="h-6 border-l-2 border-gray-400"></div>
        <a
          href="https://github.com/tim-macphail"
          className="text-blue-500 hover:text-blue-700"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Page;
