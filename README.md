# FrameCoder

A web-based application that allows users to upload wireframe sketches or UI images and get auto-generated React frontend code suggestions using AI models. This tool aims to accelerate the early-stage UI prototyping process by integrating machine learning with frontend development workflows.

## Overview

This project leverages image-to-text AI models to generate code from wireframes or UI images. It integrates Firebase Authentication for secure access and uses OpenRouter API to interface with multiple AI models such as Gemini and LLaMA.

The idea is to reduce the time developers spend converting hand-drawn sketches or mockups into usable frontend code snippets.

---

## Features

- Google Authentication using Firebase
- Upload wireframe or UI design image
- Choose between different AI models (Gemini, LLaMA, Deepseek, etc.)
- Real-time code generation using OpenRouter API
- Responsive design and smooth UI animations
- Streaming responses to simulate live coding output

---

## Tech Stack

- **Next.js**: React framework for server-side rendering and routing
- **Tailwind CSS**: Utility-first styling
- **Firebase**: Authentication and storage (optional future use)
- **OpenRouter + OpenAI SDK**: For connecting to third-party AI models
- **Vercel**: Deployment and hosting

---

## How It Works

1. **User Login**:  
   User signs in via Google OAuth using Firebase.

2. **Image Upload**:  
   User uploads a sketch or wireframe of the UI.

3. **Model Selection**:  
   User selects an AI model from a set of supported options.

4. **Request Sent to API**:  
   The image and description are sent to the backend (`api/ai-model`) which calls OpenRouter's API.

5. **Streaming Response**:  
   The backend streams the generated code in real-time and displays it in the UI.

6. **Result Displayed**:  
   Users can copy the code and use it in their own projects.

---

## Getting Started

To run the project locally:

```bash
git clone https://github.com/your-username/wireframe-to-code.git
cd wireframe-to-code
npm install

```

Then create a .env file in the root directory using the template below:

```bash
cp .env.example .env
```

Environment Variables
Create a .env file with the following variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MESURMENT_ID=your_measurement_id

NEXT_PUBLIC_NEON_DB_CONNECTION_STRING=your_postgresql_connection_string
OPENROUTER_AI_API_KEY=your_openrouter_api_key
```
Refer to .env.example for a full example.

---

## Deployment
The project is deployed on Vercel.

---

## Screenshots

# Landing Page / Home Page
![image](https://github.com/user-attachments/assets/11d4edca-0847-4afa-93d0-f681b7154ff6)

![image](https://github.com/user-attachments/assets/a36a214c-1846-4399-8550-4f8dbb4ab17d)

## Upload Page / Dashboard
![image](https://github.com/user-attachments/assets/2f0cce26-4f68-43e7-8120-31d284178a4d)

## Streaming Output
![image](https://github.com/user-attachments/assets/28ee775a-f209-4efe-9db3-53570ed3aeab)

## Flowchart

A high-level view of how the process works:

![flowchart](https://github.com/user-attachments/assets/26d71057-6a14-4911-b69e-b4f0a4390a44)

## Live Demo

Try the app live: https://wireframe-to-code-three.vercel.app/

## Use Cases

- Rapid prototyping in hackathons or startups
- UI ideation without coding from scratch
- Assisting non-tech designers to convert ideas into code
- Generating starter templates from whiteboard sketches

## Limitations

- The generated code may need manual cleanup or semantic adjustments
- Currently supports only image-based input (no Figma or PDF)
- Limited error handling and validation

## Future Improvements

- Add support for uploading Figma files or URLs
- Improve accuracy of model prompts and output formatting
- Allow code previews in a live iframe sandbox
- Add dark mode toggle and accessibility features

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes
4. Submit a pull request

Please follow the existing code style and include clear commit messages.
