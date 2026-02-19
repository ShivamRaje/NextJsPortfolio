export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <img
          src="/profile.jpg"
          alt="Shivam Raje"
          className="mx-auto mb-4 rounded-full w-32 h-32 object-cover"
        />
        <h1 className="text-3xl font-bold text-gray-800">
          Hi! I’m Shivam Raje 👋
        </h1>

        <p className=" mt-4 text-6xl text-gray-600">
          Full Stack Developer
        </p>
        <p className=" mt-4 text-md text-gray-600 max-w-md mx-auto">
          Hello! I’m a passionate developer with expertise in Java and web development.
          I thrive on creating efficient, user-friendly applications.
          Explore my projects and certifications to see how I bring ideas to life.
        </p>

        <div className="mt-6">
          <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            Contact me
          </button>
        </div>
      </div>
    </main>
  );
}
