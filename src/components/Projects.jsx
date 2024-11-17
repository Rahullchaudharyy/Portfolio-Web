import React from 'react'

const Projects = () => {

    const projects = [
       
        {
          name: "EchoNest (Under Development) ",
          description: "A full-Stack Web-app that allow user to Write and organise thire blog and much more ... ",
          github: "https://github.com/Rahullchaudharyy/EchoNest",
          technologies: ["React", "NodeJs","Tailwind","Express","MongoDB"]
        },
        {
          name: "Job Portal",
          description: "Job portal application with user authentication and job search functionality.",
          github: "https://github.com/Rahullchaudharyy/Job-Portal",
          live: "https://job-portal-nine-rosy.vercel.app/",
          technologies: ["React", "Firebase", "redux toolkit","Tailwind"]
        },
        {
          name: "Task Mangment App",
          description: "Allow User to Manage theire task !! With the CRUD opereations Built with the NextJs",
          github: "https://github.com/Rahullchaudharyy/Task-Managment-App",
          live: "https://task-managment-app-nine.vercel.app/",
          technologies: [ "NextJS", "redux toolkit","Tailwind"]
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
                      href={project.live?project.live:project.github} 
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