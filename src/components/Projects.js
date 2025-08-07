import React from 'react';

const projectData = [
  {
    title: 'Football Analysis System',
    description: 'Real-time football player and ball tracking using YOLOv8 and ByteTrack with speed, distance, and possession analysis.',
    github: 'https://github.com/SilverKai13/Football-Analysis-System',
    demo: 'https://github.com/SilverKai13/Football-Analysis-System/blob/main/output_videos/screenshot.png',
  },
  {
    title: 'ShopTrack - Sales Retention Analytics',
    description: 'An end-to-end data analytics and machine learning project designed to explore customer satisfaction, sales performance, delivery experience, and retention patterns in a real-world e-commerce setting.',
    github: 'https://github.com/SilverKai13/ShopTrack-Sales-RetentionAnalytics',
    demo: 'https://github.com/SilverKai13/ShopTrack-Sales-RetentionAnalytics/tree/main/Images',
  },
  {
    title: 'Match Anlysis and Prediction',
    description: 'This project explores over two decades of Bundesliga match data analyzing match outcomes, goal trends, team performance, and even building predictive models to classify full-time results. It showcases real-world workflows like data cleaning, exploratory analysis, feature engineering, and modeling.',
    github: 'https://github.com/SilverKai13/Bundesliga-Match-Analysis-and-Prediction',
    demo: 'https://github.com/SilverKai13/Bundesliga-Match-Analysis-and-Prediction/tree/main/images',
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