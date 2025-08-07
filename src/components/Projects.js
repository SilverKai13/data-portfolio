import React from 'react';

const projectData = [
  {
    title: 'Project One',
    description: 'Short description of project one.',
    github: 'https://github.com/username/project-one',
    demo: 'https://project-one-demo.com',
  },
  {
    title: 'Project Two',
    description: 'Short description of project two.',
    github: 'https://github.com/username/project-two',
    demo: 'https://project-two-demo.com',
  },
  {
    title: 'Project Three',
    description: 'Short description of project three.',
    github: 'https://github.com/username/project-three',
    demo: 'https://project-three-demo.com',
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="underline">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}