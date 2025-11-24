# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: `http://localhost:5173`

---

## 📝 How to Use

1. **Enter Your Information**: Fill out the form on the left side
2. **Watch Live Preview**: See your resume update in real-time on the right
3. **Download PDF**: Click the "Download as PDF" button at the top
4. **Save Your Work**: Data is automatically saved to your browser

---

## 🎯 Key Features

- ✅ No backend required
- ✅ No authentication needed
- ✅ All data stays in your browser
- ✅ Export/Import resume data as JSON
- ✅ Professional PDF generation
- ✅ Mobile responsive design

---

## 🏗️ Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## 🌐 Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
Drag and drop the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

### GitHub Pages
1. `npm run build`
2. Push `dist/` folder to `gh-pages` branch
3. Enable GitHub Pages in settings

---

## 💡 Tips

- Use the **Export** button to save your resume data as JSON
- Use the **Import** button to load previously saved data
- Click **Clear** to start fresh (careful - this deletes all data!)
- Your resume auto-saves to localStorage as you type

---

## 🛠️ Troubleshooting

**Port already in use?**
```bash
npm run dev -- --port 3000
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
Make sure you're using Node.js v18 or higher:
```bash
node --version
```

---

Enjoy building your professional resume! 🎉
