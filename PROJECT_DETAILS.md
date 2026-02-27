# About the Project

This Resume Builder is a modern, client-side web application designed to help users create professional, ATS-friendly resumes quickly and easily. Built with React and Tailwind CSS, it offers a seamless experience with real-time previews and instant PDF generation.

The application focuses on privacy and ease of use, operating entirely within the browser without requiring server-side storage or user authentication.

## Key Features

- **Interactive Resume Form**:
  - **Personal Information**: input for full name, contact details, and professional summary.
  - **Work Experience**: Add, edit, and remove multiple job entries with details like company, role, dates, and descriptions.
  - **Education**: Manage educational background with degree, school, and graduation dates.
  - **Skills & Certifications**: Dedicated sections for highlighting technical skills and professional certifications.
  - **Projects**: Showcase portfolio projects with descriptions and links.

- **Real-Time Preview**:
  - As you type in the form, the resume preview updates instantly, allowing you to see exactly how your document will look.

- **PDF Export**:
  - Generate and download a high-quality PDF version of your resume with a single click, powered by `@react-pdf/renderer`.

- **State Management**:
  - Utilizes React Context API (`ResumeContext`) to manage the application state globally, ensuring data consistency across the form and preview components.

- **Responsive Design**:
  - Fully responsive user interface built with Tailwind CSS, ensuring a great experience on desktops, tablets, and mobile devices.

## Tech Stack

The project leverages a modern frontend technology stack:

- **Core Framework**: [React](https://react.dev/) (v18)
- **Build Tool**: [Vite](https://vitejs.dev/) - for fast development and optimized builds.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - utility-first CSS framework for rapid UI development.
- **PDF Generation**: [`@react-pdf/renderer`](https://react-pdf.org/) - for creating PDF documents using React components.
- **Routing**: Client-side routing for seamless navigation between the Home and Landing pages.
- **Language**: JavaScript (ES6+ Modules).
