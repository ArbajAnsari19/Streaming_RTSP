import React, { useState } from 'react';
import './App.css';
import bg from "./assets/bg.jpg"

function App() {
  const [rtspUrl, setRtspUrl] = useState("");  // State to store the RTSP URL input

  const handleInputChange = (event) => {
    setRtspUrl(event.target.value);  // Update the state with the input value
  };

  return (
    <div className='flex justify-center flex-col text-center gap-10' >
      <h1 className='text-xl bold mt-10 -ml-10'>The Livestreaming from RTSP Link </h1>
      <p className='text-sm text-gray-400 -w-2/5 ml-2'>
     Introducing our cutting-edge Livestreaming App, where an immersive viewing experience meets seamless 
     functionality. With a sleek React js interface, the app provides a user-friendly platform for live
     streaming via RTSP links. This page features a minimalist design, ensuring a distraction-free 
     environment for users to enjoy high-quality video content.</p>
      <div className='w-2/5 h-2/5 ml-96 bottom-9 border-spacing-6'>
        <img src="http://127.0.0.1:5000" className=' ' alt="" />
      </div>
      <p className='text-sm text-gray-400 -w-2/5 ml-2 '>Leveraging the capabilities of React, our app guarantees a smooth and interactive streaming adventure.
         The video container, dynamically adapting to diverse screen sizes, caters to users across devices, 
         from desktops to smartphones. Whether you're a content creator or a passionate viewer, our React-based
          Livestreaming App offers a technologically advanced and user-centric solution for a world of real-time
           excitement and engagement.
      </p>
      <h2 className='-ml-20'>Its Live Enjoy !</h2>
    </div>
  );
}

export default App;
