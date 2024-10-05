import React from 'react'

const Skills = () => {
    const SkillData = [
        {
          "name": "HTML",
          "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
          "name": "CSS",
          "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        {
          "name": "JavaScript",
          "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
          "name": "C++",
          "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
        },
        {
          "name": "React",
          "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
          "name": "Tailwind",
          "logo": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
        },
        {
          "name": "Redux",
          "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
        },
        {
          "name": "Firebase",
          "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
        },
        {
          "name": "GitHub",
          "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        },
        {
          "name": "Postman",
          "logo": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
        },
        {
            "name": "Node.js",
            "logo": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          }
      ]
      
  return (
    <div id='Skills' className='min-h-[60vh] w-full flex justify-center items-center flex-col mt-20 sm:mt-0'>
  <h1 className='text-4xl sm:text-6xl'>Skills</h1>
  <div className='w-full sm:w-[80%] md:w-[60%] flex justify-center p-3 sm:p-6 gap-6 sm:gap-10 flex-wrap'>
    {SkillData.map((skill, index) => (
      <div key={index} className='min-h-20 max-h-24 max-w-24 min-w-20 flex items-center flex-col hover:scale-105 sm:hover:scale-105 transition-all'>
        <img src={skill.logo} alt={skill.name} />
        {skill.name}
      </div>
    ))}
  </div>
</div>

  )
}

export default Skills