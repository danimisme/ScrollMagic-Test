import { projectsData } from "@/data/projectsData";
import CardProject from "../Elements/CardProject";

export default function Section2() {
  return (
    <div className="bg-[#3e88ff] ">
      <div className="container max-w-6xl mx-auto px-10 py-32">
        <div className="text-white mb-20">
          <h1 className="text-6xl font-bold mb-10">Our porjects</h1>
          <p className="text-4xl max-w-6xl leading-[150%]">
            are very different in terms of priority, scale and complexity of
            implementation
          </p>
        </div>
        <div>
          {projectsData.map((project, index) => (
            <CardProject
              key={index}
              title={project.title}
              description={project.description}
              index={index + 1}
              id={`card-project-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
