import React from 'react'

const Projects = () => {

    const projects = [
       
        {
          name: "Blog Application",
          description: "A blog platform where users can create,  posts.",
          github: "https://github.com/your-username/blog-app",
          live: "https://your-blog-app.com",
          technologies: ["React", "Firebase", "JavaScript","Tailwind"]
        },
        {
          name: "Job Portal",
          description: "Job portal application with user authentication and job search functionality.",
          github: "https://github.com/your-username/job-portal",
          live: "https://your-job-portal.com",
          technologies: ["React", "Firebase", "redux toolkit","Tailwind"]
        },
      ];



  return (<>
  
  
            <h1 className='text-center text-7xl'>Projects</h1>
  
    <div id='Projects' className='h-[100vh] w-[100vw] p-5 flex justify-center gap-7 flex-wrap'>
           
            {projects.map((project)=>(
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[350px] h-[400px]  my-4">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800">{project.name}</h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <strong className="text-gray-800">Technologies:</strong>
                    <ul className="list-disc list-inside text-gray-600">
                      {project.technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between mt-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                      GitHub
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
                    >
                      Live Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
           
    </div>
  </>
  )
}

export default Projects