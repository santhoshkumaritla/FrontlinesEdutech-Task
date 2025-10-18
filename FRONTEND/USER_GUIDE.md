# 🎉 Company Directory - Complete Setup & User Guide

## 📋 Table of Contents

1. [What You Got](#what-you-got)
2. [How to Run](#how-to-run)
3. [How to Use](#how-to-use)
4. [Features Overview](#features-overview)
5. [Troubleshooting](#troubleshooting)

---

## 🎁 What You Got

A **professional, production-ready** company directory application with:

### ✨ Key Features

- 🔍 **Real-time Search** - Find companies as you type
- 🎯 **Advanced Filters** - Filter by industry and location
- 📊 **Flexible Sorting** - Sort by name or industry
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🌓 **Dark Mode** - Easy on the eyes at night
- 📄 **Pagination** - Navigate through results efficiently
- 🎨 **Beautiful UI** - Professional design with smooth animations

### 📦 What's Included

```
company-directory/
├── 📄 README.md              # Main documentation
├── 📄 DOCUMENTATION.md       # Detailed technical docs
├── 📄 FEATURES.md           # Complete feature list
├── 🗄️ db.json               # 25 sample companies
├── 🚀 start.bat             # Windows startup script
├── 🚀 start.ps1             # PowerShell startup script
├── ⚙️ package.json          # Dependencies & scripts
├── 🎨 tailwind.config.js    # Tailwind configuration
└── src/
    ├── components/          # 8 React components
    ├── context/            # State management
    └── services/           # API integration
```

---

## 🚀 How to Run

### Method 1: Quick Start (Easiest) ⭐

**On Windows:**

**PowerShell:**

```powershell
.\start.ps1
```

**Command Prompt:**

```cmd
start.bat
```

This will:

1. Start JSON Server (backend) on port 3001
2. Start React app (frontend) on port 5173
3. Open two terminal windows automatically

### Method 2: Manual Start

**Terminal 1 - Backend:**

```bash
cd company-directory
npx json-server --watch db.json --port 3001
```

**Terminal 2 - Frontend:**

```bash
cd company-directory
npm run dev
```

### Access the Application

Once running, open your browser to:

- **Application**: http://localhost:5173
- **API**: http://localhost:3001/companies

---

## 🎮 How to Use

### 1. **Search for Companies** 🔍

![Search](https://via.placeholder.com/800x100/0ea5e9/ffffff?text=Search+Bar)

1. Type in the search bar at the top
2. Results update instantly
3. Searches both company names and descriptions
4. Example: Try searching "tech" or "solar"

### 2. **Filter Companies** 🎯

![Filters](https://via.placeholder.com/800x150/0ea5e9/ffffff?text=Filter+Panel)

**Filter by Industry:**

- Click the Industry dropdown
- Select an industry (e.g., "Technology")
- See only companies in that industry

**Filter by Location:**

- Click the Location dropdown
- Select a location (e.g., "San Francisco, CA")
- See only companies in that location

**Combine Filters:**

- Select both industry AND location
- Results show companies matching both criteria

**Reset Filters:**

- Click the "Reset" button
- All filters clear instantly

### 3. **Sort Results** 📈

**Sort by Company Name:**

1. Change "Sort By" dropdown to "Company Name"
2. Choose "Ascending" (A→Z) or "Descending" (Z→A)

**Sort by Industry:**

1. Change "Sort By" dropdown to "Industry"
2. Choose order preference

### 4. **Change View Mode** 👁️

**Grid View (Cards):**

- Click the "Grid" button
- Best for mobile and browsing
- Shows cards with company info

**Table View:**

- Click the "Table" button
- Best for desktop
- Shows detailed table layout
- _Note: Automatically switches to grid on mobile_

### 5. **Navigate Pages** 📄

**Page Numbers:**

- Click any page number to jump to that page
- Current page is highlighted in blue

**Navigation Buttons:**

- ⬅️ Previous page
- ➡️ Next page

**Items Per Page:**

- Change dropdown to show 5, 10, 25, or 50 companies
- Default is 10 per page

### 6. **Toggle Dark Mode** 🌓

1. Click the 🌙 (moon) or ☀️ (sun) icon in the header
2. Theme changes instantly
3. Preference is saved (persists after refresh)

---

## 📊 Features Overview

### Company Information Displayed

Each company shows:

- ✅ Company Name
- ✅ Industry
- ✅ Location
- ✅ Description
- ✅ Employee Count
- ✅ Year Founded
- ✅ Website (clickable link)

### Sample Companies Included

The database includes 25 real-world-style companies across industries:

- Technology (5 companies)
- Finance (3 companies)
- Healthcare (3 companies)
- Energy (2 companies)
- Retail (2 companies)
- And 10 more diverse industries!

### Responsive Design

**Mobile (< 640px):**

- Single column layout
- Large touch targets
- Simplified navigation

**Tablet (640px - 1024px):**

- Two column grid
- Optimized spacing
- Touch-friendly

**Desktop (> 1024px):**

- Three column grid
- Table view available
- Sticky header and filters

---

## 🐛 Troubleshooting

### Problem: "Cannot connect to API"

**Solution:**

1. Make sure JSON Server is running
2. Check if port 3001 is available
3. Look for this in terminal: `JSON Server started on PORT :3001`

**Command to restart:**

```bash
npx json-server --watch db.json --port 3001
```

### Problem: "Page won't load" or "npm error"

**Solution:**

1. Make sure you're in the right directory:

   ```bash
   cd company-directory
   ```

2. Reinstall dependencies:

   ```bash
   npm install
   ```

3. Start dev server:
   ```bash
   npm run dev
   ```

### Problem: "Dark mode won't save"

**Solution:**

1. Enable browser cookies/localStorage
2. Try clearing cache
3. Refresh the page

### Problem: "Search not working"

**Solution:**

1. Make sure JSON Server is running
2. Check browser console for errors (F12)
3. Try refreshing the page

### Problem: "Changes to db.json not showing"

**Solution:**

1. Save the db.json file
2. JSON Server auto-reloads (watch mode)
3. Refresh browser page
4. Check terminal for "Watching db.json..."

---

## 🎨 Customization Tips

### Add Your Own Companies

1. Open `db.json`
2. Add a new company to the array:

```json
{
  "id": 26,
  "name": "Your Company Name",
  "industry": "Your Industry",
  "location": "Your City, State",
  "description": "Your company description here",
  "employees": 100,
  "founded": 2024,
  "website": "yourwebsite.com"
}
```

3. Save the file
4. Refresh the browser

### Change Colors

1. Open `tailwind.config.js`
2. Modify the primary colors:

```javascript
colors: {
  primary: {
    500: '#your-color-here',
    600: '#your-darker-color',
  }
}
```

3. Save and restart dev server

---

## ⌨️ Keyboard Shortcuts

- **Tab**: Navigate between inputs
- **Enter**: Submit search
- **Escape**: Clear search (with custom implementation)
- **Arrow Keys**: Navigate dropdown options

---

## 📱 Mobile Tips

- **Swipe**: Works naturally with touch
- **Pinch Zoom**: Disabled for better UX (viewport meta)
- **Tap**: All buttons have large touch targets
- **Table View**: Automatically switches to card view

---

## 🎯 Pro Tips

1. **Combine Filters**: Use search + industry + location for precise results
2. **Bookmark**: Save specific filter combinations in browser bookmarks
3. **Dark Mode**: Better for night-time browsing
4. **Table View**: Best for comparing multiple companies
5. **Items Per Page**: Set to 50 to see all companies at once

---

## 📈 Performance Tips

The app is optimized for speed:

- ✅ Only renders visible items (pagination)
- ✅ Efficient filtering and sorting
- ✅ CSS animations (GPU accelerated)
- ✅ Minimal re-renders
- ✅ Fast load times with Vite

Expected performance:

- Initial load: < 2 seconds
- Search: Instant
- Filter change: Instant
- Page navigation: Instant

---

## 🆘 Need Help?

### Check These Resources:

1. **README.md** - Quick overview
2. **DOCUMENTATION.md** - Technical details
3. **FEATURES.md** - Complete feature list

### Common Questions:

**Q: Can I use this for my business?**
A: Yes! It's MIT licensed. Customize as needed.

**Q: How do I deploy this?**
A: Build with `npm run build`, then deploy the `dist` folder to any static host (Netlify, Vercel, etc.). You'll need to replace JSON Server with a real backend.

**Q: Can I add more features?**
A: Absolutely! The code is clean and well-organized for easy extension.

**Q: Is this production-ready?**
A: The frontend is production-quality. For production use, replace JSON Server with a real backend API.

---

## 🎓 Learning Resources

Built with these technologies:

- [React](https://react.dev) - UI Framework
- [TypeScript](https://www.typescriptlang.org) - Type Safety
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Vite](https://vitejs.dev) - Build Tool
- [JSON Server](https://github.com/typicode/json-server) - Mock API

---

## ✅ Quick Checklist

Before you start:

- [ ] Node.js installed (v18+)
- [ ] In the `company-directory` folder
- [ ] Ran `npm install` (if first time)
- [ ] JSON Server running (port 3001)
- [ ] Dev server running (port 5173)
- [ ] Browser open to localhost:5173

---

## 🎉 You're All Set!

Enjoy exploring the Company Directory application!

**Happy Browsing! 🚀**

---

_Built with ❤️ using React, TypeScript, and Tailwind CSS_
