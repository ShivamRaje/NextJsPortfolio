export default function Projects() {
  const projects = [
    {
      title: "Student Progress Portal",
      description: "Tracks student performance, attendance, and grades with role-based access for students and faculty.",
      link: "#",
    },
    {
      title: "Worker Data Maintaining Website",
      description: "Manages employee records, salaries, attendance, and department details with secure CRUD operations.",
      link: "#",
    },
    {
      title: "Flight Management System",
      description: "Handles flight booking, scheduling, passenger details, and fare management using Java, JDBC, and MySQL.",
      link: "#",
    },
    {
      title: "Client Management Application",
      description: "Organizes client information, project details, communication history, and status tracking in a centralized system.",
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
