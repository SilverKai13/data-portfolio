import React from 'react';
import { FaPython, FaDatabase, FaAws } from 'react-icons/fa';
import { SiTensorflow, SiApachepyspark } from 'react-icons/si';

const skills = [
  { icon: <FaPython size={40} />, name: 'Python' },
  { icon: <FaDatabase size={40} />, name: 'SQL' },
  { icon: <SiApachepyspark size={40} />, name: 'PySpark' },
  { icon: <FaAws size={40} />, name: 'AWS' },
  { icon: <SiTensorflow size={40} />, name: 'TensorFlow' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {skill.icon}
              <span className="mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}