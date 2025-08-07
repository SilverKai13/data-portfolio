import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="flex flex-col gap-4"
        >
          <input type="hidden" name="form-name" value="contact" />

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-3 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 border rounded-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="p-3 border rounded-lg h-32"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
