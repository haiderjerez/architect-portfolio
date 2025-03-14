const Projects = () => {
    const projects = [
      { id: 1, title: "Modern Villa", description: "A luxurious modern villa project." },
      { id: 2, title: "Skyscraper Design", description: "A futuristic skyscraper concept." },
      { id: 3, title: "Eco House", description: "Sustainable living in an eco-friendly house." }
    ];
  
    return (
      <section id="projects" className="py-10 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="p-4 border border-gray-600 rounded-lg">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  