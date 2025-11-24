# Contributing to Resume Builder

Thank you for your interest in contributing! This document provides guidelines and ideas for enhancing the Resume Builder.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`
5. Make your changes
6. Test thoroughly
7. Commit: `git commit -m "Add: your feature description"`
8. Push: `git push origin feature/your-feature-name`
9. Create a Pull Request

## Development Workflow

```bash
# Start development server
npm run dev

# Run in different port if 5173 is busy
npm run dev -- --port 3000

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

Understanding the codebase:

```
src/
├── components/         # Reusable UI components
│   ├── ResumeForm.jsx    # Form inputs
│   ├── ResumePreview.jsx # Live preview
│   └── ResumePDF.jsx     # PDF template
├── context/           # State management
│   └── ResumeContext.jsx
├── pages/            # Page components
│   └── Home.jsx
└── App.jsx           # Root component
```

## Feature Ideas

### 🎨 Template System (High Priority)
- [ ] Create multiple resume templates
- [ ] Template selector component
- [ ] Template preview thumbnails
- [ ] Save template preference

**Implementation Tips:**
- Create `src/templates/` folder
- Add `Template1.jsx`, `Template2.jsx`, etc.
- Update context to include `selectedTemplate` state
- Modify `ResumePDF.jsx` to switch templates

### 🌈 Theme Customization
- [ ] Color picker for accent colors
- [ ] Font selection (3-5 professional fonts)
- [ ] Dark/Light mode toggle
- [ ] Save theme preferences

**Implementation Tips:**
- Add color state to context
- Use CSS variables or Tailwind theme
- Store in localStorage

### 📊 Enhanced Features
- [ ] Profile photo upload
- [ ] LinkedIn profile import
- [ ] Section reordering (drag & drop)
- [ ] Multiple resume versions
- [ ] Resume analytics (word count, etc.)
- [ ] Spell checker integration

### 📤 Export Options
- [ ] Export to DOCX format
- [ ] Export to HTML
- [ ] Export to plain text
- [ ] Copy to clipboard
- [ ] Email resume directly

### 🎯 Smart Features
- [ ] AI-powered suggestions (using OpenAI API)
- [ ] Resume scoring/tips
- [ ] Keyword optimization for ATS
- [ ] Industry-specific templates
- [ ] Example text for each section

### 🌐 Sharing & Collaboration
- [ ] Generate shareable link (base64 encoded)
- [ ] QR code generation
- [ ] Print-optimized view
- [ ] Social media preview cards

### ♿ Accessibility
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] ARIA labels
- [ ] High contrast mode
- [ ] Focus indicators

## Code Style

### JavaScript/JSX
- Use functional components
- Prefer hooks over class components
- Use descriptive variable names
- Add comments for complex logic
- Keep components focused and small

### Tailwind CSS
- Use utility classes
- Avoid custom CSS when possible
- Use consistent spacing scale
- Follow mobile-first approach

### File Organization
- One component per file
- Group related files in folders
- Use index files for exports
- Keep files under 300 lines

## Testing Guidelines

Before submitting:
1. Test all existing features still work
2. Test on multiple browsers
3. Test responsive design
4. Check console for errors
5. Verify PDF generation
6. Test localStorage persistence

## Pull Request Guidelines

### Title Format
- `Add: [feature name]` - New features
- `Fix: [bug description]` - Bug fixes
- `Update: [component name]` - Improvements
- `Refactor: [area]` - Code refactoring
- `Docs: [topic]` - Documentation

### Description Should Include
- What was changed
- Why the change was made
- How to test it
- Screenshots (if UI changes)
- Breaking changes (if any)

### Example PR Description
```markdown
## What
Added multiple resume template support

## Why
Users requested different resume styles

## How to Test
1. Click template selector dropdown
2. Select different templates
3. Verify preview updates
4. Download PDF and check template applies

## Screenshots
[Add screenshots]

## Breaking Changes
None
```

## Common Issues & Solutions

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tailwind Not Working
- Check `tailwind.config.js` paths
- Verify `@tailwind` directives in CSS
- Restart dev server

### PDF Generation Issues
- Check @react-pdf/renderer version
- Verify all PDF components use valid syntax
- Test with minimal data first

## Documentation

When adding features:
- [ ] Update README.md
- [ ] Add JSDoc comments
- [ ] Include usage examples
- [ ] Update QUICKSTART.md if needed

## Questions?

Feel free to:
- Open an issue for discussion
- Ask in pull request comments
- Suggest improvements to this guide

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT).

---

## Quick Start for Contributors

```bash
# Clone and setup
git clone <repo-url>
cd resume-builder
npm install

# Create feature branch
git checkout -b feature/amazing-feature

# Make changes and test
npm run dev

# Build and verify
npm run build
npm run preview

# Commit and push
git add .
git commit -m "Add: amazing feature"
git push origin feature/amazing-feature
```

---

Thank you for contributing! 🎉
