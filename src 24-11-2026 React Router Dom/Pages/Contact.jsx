function Contact() {
  return (
    <div className="min-h-[80vh] bg-blue-50 flex items-center justify-center px-6 py-12">

      <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Contact Us
        </h1>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;