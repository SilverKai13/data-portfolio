import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="mb-4">
          Hi, I'm <strong>Hrishikesh Handique</strong>. A Data Engineer and AI enthusiast with a Master’s degree in Advanced Computer Science (AI specialization) from the University of Manchester. 
          I have over 3 years of experience building machine learning systems and ETL workflows in production environments.
        </p>
        <p className="mb-4">
          During my time at Edureka, I led the development of Spark-based ETL pipelines and predictive ML models that helped improve data reliability and client experience. 
          I also worked with AWS Glue, Lambda, and S3 to build cloud-based data workflows with automated validation and reporting.
        </p>
        <p className="mb-4">
          Outside work, I’m a football lover, lifelong Manchester City fan, and someone who believes in turning setbacks into momentum.
        </p>
        <p className="mb-4">
          This website is a portfolio of my work, skills, and goals. I’m actively looking for opportunities to contribute to impactful data and AI projects.
        </p>
        <h3 className="text-2xl font-medium mb-2">Education</h3>
        <ul className="list-disc list-inside">
          {/* TODO: Add list items for degrees, institutions, years */}
          <li>Master of Science in Advanced Computer Science, University of Manchester</li>
          <li>Bachelor of Engineering in Computer Science, Vellore Institute of Technology</li>
        </ul>
      </div>
    </section>
  );
}