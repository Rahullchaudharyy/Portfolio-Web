import React from 'react';

const About = () => {
  const redirectToURL = (url) => {
    window.location.href = url;
  };

  return (
    <div id='About' className="h-full p-[10vmin] bg-white">
      <h1 className="flex items-center justify-center pt-20 pb-12 text-6xl">About Me</h1>
      <h2 className="flex items-center justify-center text-2vh">👋 Hello! I'm Rahul,</h2>
      <p className="flex items-center justify-center text-2vh">
        a second-year BCA student at Indira Gandhi National Open University, and I'm  to welcome you to my digital realm.
        As a fervent front-end developer, I find my greatest joy in crafting elegant code and exploring all things technical.
      </p>
     
     {/* // Link added  */}
      <div className="flex items-center justify-center gap-24 pt-32 h-4vh w-auto">
       
      
        <button
          id="Download-CV"
          className="h-6vh w-auto p-4 cursor-pointer bg-white rounded-lg border border-purple-300 hover:bg-purple-300 transition duration-300 ease-in-out"
          onClick={() => window.location.href = 'https://drive.google.com/file/d/1WF0mwFxZ7ccDT9-dQEI_w09Zkx3u4raU/view?usp=drive_link'}
          download
        >
          See my Resume
        </button>
      </div>
    </div>
  );
};

export default About;
