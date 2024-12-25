## Taskflow: User Authentication & Task Management Dashboard

Taskflow is an advanced task management dashboard designed to enhance productivity and task tracking. It features robust user authentication, including Google Sign-In, and an intuitive task management system. With a focus on ease of use, TaskMaster provides a streamlined experience for managing personal tasks, deadlines, and priorities.
## Features

## Overview
This repository contains the front-end implementation for **TaskFlow**, a web application designed for efficient task and project management. TaskFlow helps users organize tasks, manage projects, and collaborate effectively through user-friendly dashboards and integrated tools.

## Features
### General Features
- User-friendly interface for managing tasks, projects, and jobs.
- Secure authentication system using Firebase.
- Responsive design with TailwindCSS.

### User Capabilities
#### Task Management:
- Create, update, and categorize tasks (e.g., Started, In Progress, Completed).
- Drag-and-drop functionality for task organization.

#### Project Management:
- Track project progress and manage associated tasks.
- Access project details in a personalized dashboard.

#### Collaboration:
- Message system for team communication.
- Client testimonials and relationship management.

#### Dashboard:
- Overview of tasks, projects, and messages.
- Personalize profile settings and manage account details.

### Additional Features:
- Calendar integration for task scheduling.
- Error handling with a dedicated error page.
- Loading spinner for smoother user experience.

---

## Project Structure
```plaintext
farhanshahriyar-taskflow-client/
├── index.html
├── public/
│   ├── loginImg.avif          # Static login image
│   └── _redirects             # Redirect configuration for deployment
├── postcss.config.js          # PostCSS configuration
├── package.json               # Project dependencies
├── vite.config.js             # Vite configuration
├── README.md                  # Project documentation
├── tailwind.config.js         # TailwindCSS configuration
├── src/
│   ├── App.jsx                # Main application component
│   ├── Components/            # Reusable UI components
│   ├── providers/             # Context providers for authentication
│   ├── firebase/              # Firebase configuration
│   ├── hooks/                 # Custom React hooks
│   ├── Routes/                # Application routes and protected route logic
│   ├── Pages/                 # All application pages (Dashboard, Tasks, Login, etc.)
│   ├── App.css                # Application-wide CSS
│   ├── Layouts/               # Main layout structure
│   └── utils/                 # Utility functions
```

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/farhanshahriyar/taskflow-client.git
   ```
2. Navigate to the project directory:
   ```bash
   cd farhanshahriyar-taskflow-client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Tech Stack
- **Framework:** React with Vite
- **Styling:** TailwindCSS
- **State Management:** Context API
- **Authentication:** Firebase

---

## Key Files
- **`src/firebase/firebase.config.js`:** Firebase authentication setup.
- **`src/hooks/`:** Custom hooks for API integration and role-based logic.
- **`src/Pages/`:** Page components organized by roles and functionality.

---


## Diagram of Taskflow
![Diagram](https://utfs.io/f/16574aa9-c1f7-47a5-8bd4-733eea3ad11c-nys99p.png)

## Demo Project View

- [@taskflowmanager](https://taskflowmanager.netlify.app/)


## Overview of Taskflowmanager Dashboard
![Web-app Dashboard](https://utfs.io/f/d6bb3dcc-4cd2-45b9-8b29-ac442bd4af64-gt1gv5.png)
![Web-app TaskPage](https://utfs.io/f/a7d5fb28-34e9-4547-82e2-6309564918a6-vk7446.jpg)
![Web-app Notification](https://utfs.io/f/a7f8fce9-6896-4580-b84a-8df30220cf9b-4i3ti3.png)

## Authors

- [@farhanshahriyar](https://github.com/farhanshahriyar)

