export default function About() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800">
          About Me
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed break-words">
          I’m Shivam, a passionate Full Stack Developer with experience in
          building web applications using React, Next.js, and backend
          technologies. I enjoy learning new tools, solving real-world
          problems, and building clean, scalable solutions.
        </p>

        <p className="mt-4 text-lg text-gray-600 leading-relaxed break-words">
          Currently, I’m focused on improving my frontend skills, exploring
          modern frameworks, and working on practical projects that help me
          grow as a developer.
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Skills
          </h2>

          <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
            <li className="bg-white p-3 rounded shadow">React</li>
            <li className="bg-white p-3 rounded shadow">Next.js</li>
            <li className="bg-white p-3 rounded shadow">JavaScript</li>
            <li className="bg-white p-3 rounded shadow">Java</li>
            <li className="bg-white p-3 rounded shadow">SQL</li>
            <li className="bg-white p-3 rounded shadow">Git</li>
            <li className="bg-white p-3 rounded shadow">Html</li>
            <li className="bg-white p-3 rounded shadow">CSS</li>
            <li className="bg-white p-3 rounded shadow">Snowflake</li>
            <li className="bg-white p-3 rounded shadow">Python</li>
            <li className="bg-white p-3 rounded shadow">Springboot</li>
            <li className="bg-white p-3 rounded shadow">Langchain</li>
            
          </ul>
        </div>
      </div>
    </main>
  );
}
