import React from 'react';

export default function Landing() {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Data Engineer &amp; Data Scientist</h1>
        <p className="text-xl">Turning data into actionable insights</p>
      </div>
    </section>
  );
}