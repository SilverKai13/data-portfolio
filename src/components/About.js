import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="mb-4">// TODO: Add short bio here</p>
        <h3 className="text-2xl font-medium mb-2">Education</h3>
        <ul className="list-disc list-inside">
          {/* TODO: Add list items for degrees, institutions, years */}
          <li>Master of Science in Data Science, University Name, 2023</li>
          <li>Bachelor of Engineering in Computer Science, University Name, 2021</li>
        </ul>
      </div>
    </section>
  );
}