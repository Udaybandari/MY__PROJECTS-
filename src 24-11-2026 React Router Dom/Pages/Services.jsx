function Services() {
  const services = [
    "Web Development",
    "UI/UX Design",
    "React Development"
  ];

  return (
    <div className="min-h-[80vh] bg-gray-50 py-16 px-6">

      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Services
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition text-center"
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              {service}
            </h2>

            <p className="text-gray-600">
              We provide high-quality {service.toLowerCase()} solutions.
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Services;