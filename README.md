# Resume Builder

A modern, client-side Resume Builder application built with React, TailwindCSS, and react-pdf. Create professional resumes with live preview and PDF export - no backend, no authentication, no database required!

## Features

- ✨ **Multi-Section Form**: Personal info, work experience, education, skills, and professional summary
- 👁️ **Live Preview**: See your resume update in real-time as you type
- 📥 **PDF Export**: Download your resume as a professionally formatted PDF
- 💾 **Auto-Save**: Resume data automatically saved to browser's localStorage
- 📤 **Import/Export**: Save your resume data as JSON and import it later
- 📱 **Mobile Responsive**: Works seamlessly on all devices
- 🎨 **Clean UI**: Modern design with TailwindCSS
- 🔒 **Privacy First**: All data stays in your browser - no server uploads

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling
- **@react-pdf/renderer** - PDF generation
- **localStorage** - Client-side data persistence

## Project Structure

```
resume-builder/
├── src/
│   ├── components/
│   │   ├── ResumeForm.jsx       # Form inputs for resume data
│   │   ├── ResumePreview.jsx    # Live preview of resume
│   │   └── ResumePDF.jsx        # PDF template component
│   ├── context/
│   │   └── ResumeContext.jsx    # State management with Context API
│   ├── pages/
│   │   └── Home.jsx             # Main page with two-column layout
│   ├── App.jsx                  # Root component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles with Tailwind directives
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd c:\CV
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` folder, ready for deployment.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Usage

1. **Fill in your information**: Start by entering your personal information in the form on the left
2. **Add sections**: Click the "Add" buttons to add work experience, education, and skills
3. **Watch the preview**: The resume preview on the right updates in real-time
4. **Download PDF**: Click the "Download as PDF" button to export your resume
5. **Save your work**: Your data is automatically saved to localStorage
6. **Export/Import**: Use the Export button to save as JSON, or Import to load previously saved data

## Deployment

This is a static website with no backend requirements. You can deploy it to:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Drag and drop the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your Git repository for automatic deployments

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist/` folder to the `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Render
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## Features in Detail

### Personal Information
- Full name
- Professional title
- Email, phone, and address

### Professional Summary
- Brief overview or objective statement

### Work Experience
- Job title, company name
- Employment period
- Detailed description of responsibilities

### Education
- Degree or certification
- School/institution name
- Years attended
- Optional description

### Skills
- Add multiple skills
- Displayed as tags in the preview

### Data Management
- **Auto-save**: Changes automatically saved to browser localStorage
- **Export**: Download resume data as JSON file
- **Import**: Load previously exported JSON data
- **Clear**: Reset all data with one click

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Privacy & Security

- ✅ No data sent to any server
- ✅ No tracking or analytics
- ✅ No account creation required
- ✅ All data stored locally in your browser
- ✅ Works completely offline after initial load

## Future Enhancements

Potential features for future versions:
- Multiple resume templates
- Custom color themes
- Different font options
- LinkedIn import
- More export formats (DOCX, HTML)
- Resume tips and suggestions

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please create an issue in the repository.

---

**Made with ❤️ using React, TailwindCSS, and @react-pdf/renderer**
