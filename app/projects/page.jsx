export default function Projects() {
  const projects = [
    {
      title: "Flight Management System",
      description: "A Java + MySQL project to manage flights, bookings, and users.",
      link: "#",
    },
    {
      title: "Rule Engine Application",
      description: "Determines user eligibility using AST and attributes like age, income, department.",
      link: "#",
    },
    {
      title: "Seat Booking System",
      description: "Interactive seat booking UI with persistent state using React + backend.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "The website you are viewing right now, built with Next.js and Tailwind CSS.",
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Projects</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-gray-800">
                {project.title}
              </h2>
              <p className="mt-4 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
