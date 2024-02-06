# <h1>React-Flask Live Streaming Project</h1>

This project allows users to live stream an RTSP link, their webcam feed in a browser. The frontend is built with React, the backend with Flask, and styling is done using Tailwind CSS.

## Prerequisites

Before getting started, ensure you have the following installed on your machine:

- Node.js
- Python
- npm (Node Package Manager)

 ## Tech Stacks Used

- React 
- Flask
- Tailwind 
- cv2
  

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-flask-live-streaming.git
   
Navigate to the project directory:


```bash
cd flask-backend
Install frontend dependencies:
npm install
```

Install backend dependencies:
```bash
cd ../react-frontend
pip install -r requirements.txt
```
Configuration
Open flask-backend/server.py and locate the RTSP_LINK variable.
Replace the placeholder with your desired <b> RTSP link </b>.

Now run the server :
```bash
 python server.py
```

In a separate terminal, start the React development server:
Now run the frontend :
```bash
npm run dev
```
Open your browser and navigate to http://localhost:3000 to view the live streaming application.

<h1>Custom Camera RTSP Link</h1>
If you want to use your own camera RTSP link, follow these steps:

<p>Open the backend/server.py file.
Locate the RTSP_LINK variable and replace it with your camera's RTSP link.
Save the changes.</p>

Restart the Flask server:


Feel free to explore and customize the project based on your requirements. If you encounter any issues or have suggestions for improvement, please open an issue in the repository.

Happy streaming!
