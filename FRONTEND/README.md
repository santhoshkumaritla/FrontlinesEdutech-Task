# Company Directory

A modern, responsive, and professional company directory application built with React, TypeScript, and Tailwind CSS. This application provides an elegant interface to browse, search, filter, and sort company information with support for both light and dark modes.

![Company Directory](https://img.shields.io/badge/React-19.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-blue)

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm

### Run the Application

**Option 1: Automatic Startup (Windows)**

```powershell
# PowerShell
.\start.ps1

# OR Command Prompt
start.bat
```

**Option 2: Manual Start**

```bash
# Terminal 1 - Start JSON Server (from Backend folder)
cd Backend
npm run server

# Terminal 2 - Start Development Server (from FRONTEND folder)
cd FRONTEND
npm run dev
```

**Access the Application**

- Frontend: http://localhost:5173
- API: http://localhost:10000/companies

📖 **For detailed documentation, see [DOCUMENTATION.md](./DOCUMENTATION.md)**

## ✨ Features

### Core Functionality

- 📊 **Dual View Modes**: Switch between grid (card) layout for mobile/tablet and table layout for desktop
- 🔍 **Smart Search**: Real-time search functionality that filters companies by name (starts with search term)
- 🎯 **Multi-Filter Support**: Filter companies by industry and location
- 📈 **Flexible Sorting**: Sort by company name or industry in ascending/descending order
- 📄 **Smart Pagination**: Efficient pagination with customizable items per page (5, 10, 25, 50)
- 🌓 **Dark Mode**: Toggle between light and dark themes with persistent preference
- 📱 **Fully Responsive**: Seamless experience across mobile, tablet, and desktop devices
- 🎚️ **Auto-Collapse Filters**: Filter panel automatically collapses when scrolling for better viewing experience

### User Experience

- ⚡ **Loading Indicators**: Visual feedback during data fetching with responsive loader
- ❌ **Error Handling**: User-friendly error messages with retry functionality
- 🔢 **Result Counter**: Display total and filtered company counts in real-time
- 🎨 **Smooth Animations**: Fade-in and slide-up animations for enhanced UX
- 📌 **Sticky Elements**: Fixed header and collapsible filter panel for easy navigation
- 🎯 **Hover Effects**: Interactive hover states on all clickable elements
- 🔽 **Collapsible Filters**: Filters auto-collapse on scroll with manual toggle option
- 🎨 **Modern Blue Theme**: Professional blue color scheme throughout the application

### Technical Highlights

- ⚛️ **React 19.1** with TypeScript for type-safe development
- 🎨 **Tailwind CSS 3.4** for modern, utility-first styling with custom blue theme
- 🔄 **Context API** for efficient global state management
- 🌐 **Axios** for HTTP requests
- 🎭 **Lucide React** for beautiful, consistent icons
- 📦 **JSON Server 0.17.4** for mock backend API
- 🔍 **Intersection Observer API** for scroll-based filter panel collapse
- 🎯 **TypeScript 5.9** for enhanced type safety and developer experience

## Project Structure

```
Frontline/
├── Backend/
│   ├── db.json                  # Mock database with company data
│   └── package.json             # Backend dependencies (JSON Server)
│
├── FRONTEND/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx           # App header with logo, search, and dark mode toggle
│   │   │   ├── FilterPanel.tsx      # Filter and sorting controls
│   │   │   ├── CompanyList.tsx      # Main list component with view mode toggle
│   │   │   ├── CompanyCard.tsx      # Card view component for individual companies
│   │   │   ├── CompanyTable.tsx     # Table view component for desktop
│   │   │   ├── Pagination.tsx       # Pagination controls
│   │   │   ├── Loader.tsx           # Loading spinner component
│   │   │   └── Error.tsx            # Error display component
│   │   ├── context/
│   │   │   └── CompanyContext.tsx   # Global state management with Context API
│   │   ├── services/
│   │   │   └── api.ts               # API service for fetching company data
│   │   ├── assets/                  # Static assets (images, fonts, etc.)
│   │   ├── App.tsx                  # Main application component
│   │   ├── App.css                  # Application-specific styles
│   │   ├── main.tsx                 # Application entry point
│   │   └── index.css                # Global styles and Tailwind configuration
│   ├── public/
│   │   └── api/                     # Static API endpoint for production
│   ├── index.html                   # HTML entry point
│   ├── tailwind.config.js           # Tailwind CSS configuration
│   ├── postcss.config.js            # PostCSS configuration
│   ├── vite.config.ts               # Vite build configuration
│   ├── tsconfig.json                # TypeScript configuration (main)
│   ├── tsconfig.app.json            # TypeScript configuration (app)
│   ├── tsconfig.node.json           # TypeScript configuration (node)
│   ├── eslint.config.js             # ESLint configuration
│   ├── package.json                 # Frontend dependencies and scripts
│   ├── start.bat                    # Windows batch startup script
│   ├── start.ps1                    # PowerShell startup script
│   ├── README.md                    # Project documentation
│   ├── DOCUMENTATION.md             # Detailed technical documentation
│   ├── FEATURES.md                  # Feature specifications
│   └── USER_GUIDE.md                # End-user guide
│
└── .git/                        # Git repository metadata
```

## Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Step 1: Install Dependencies

```bash
cd company-directory
npm install
```

### Step 2: Start the Mock Backend API

Navigate to the Backend folder and start the server:

```bash
cd Backend
npm install  # First time only
npm run server
```

This will start JSON Server on `http://localhost:10000` with the company data.

### Step 3: Start the Development Server

In another terminal window, navigate to the FRONTEND folder:

```bash
cd FRONTEND
npm install  # First time only
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

**Frontend (FRONTEND folder):**

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks

**Backend (Backend folder):**

- `npm run server` - Start the JSON Server mock API on port 10000

## API Endpoints

The JSON Server (running on port 10000) provides the following endpoints:

- `GET /companies` - Fetch all companies
- `GET /companies?_page=1&_limit=10` - Fetch paginated companies
- `GET /companies?q=search_term` - Search companies
- `GET /companies/:id` - Fetch a specific company by ID

## Usage Guide

### Searching Companies

1. Use the search bar in the header to search by company names
2. Search matches companies whose names start with your search term
3. Results update in real-time as you type
4. Example: Searching "A" shows Apple, Amazon, Acme (not companies with A in the middle)

### Filtering Companies

1. Use the **Industry** dropdown to filter by specific industry
2. Use the **Location** dropdown to filter by location
3. Multiple filters work together to narrow down results
4. Click **Reset** to clear all filters and sorting

### Sorting Companies

1. Select **Sort By** field (Company Name or Industry)
2. Choose **Order** (Ascending or Descending)
3. Results update automatically

### Switching View Modes

- Click the **Grid** button for card layout (better for mobile)
- Click the **Table** button for table layout (better for desktop)
- Table view automatically falls back to grid on mobile devices

### Pagination

1. Use the page numbers to navigate between pages
2. Adjust **Items per page** to show 5, 10, 25, or 50 companies
3. Use arrow buttons for previous/next page navigation

### Dark Mode

- Click the moon/sun icon in the header to toggle dark mode
- Preference is saved to localStorage
- All components support dark mode with blue accent colors

### Auto-Collapse Filters

- Filter panel automatically collapses when scrolling down through company listings
- Manually toggle collapse/expand by clicking the filter panel header
- Smooth animations for better user experience
- Results counter always visible in collapsed state

## Data Schema

Each company object contains:

```typescript
interface Company {
  id: number;
  name: string;
  industry: string;
  location: string;
  description: string;
  employees: number;
  founded: number;
  website: string;
}
```

## Customization

### Adding More Companies

Edit `db.json` and add company objects to the `companies` array. The application will automatically reflect the changes.

### Changing Colors

The application uses a blue theme. To modify colors, edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        // ... update blue color scale
        500: '#3b82f6',
        // ... etc
      }
    }
  }
}
```

### Adjusting Animations

Update animation settings in `tailwind.config.js` or `index.css`.

## Technologies Used

- **React 19.1** - UI library with latest features
- **TypeScript 5.9** - Type-safe JavaScript
- **Vite 7.1** - Fast build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework with custom blue theme
- **Axios 1.12** - HTTP client for API requests
- **JSON Server 0.17.4** - Mock REST API
- **Lucide React** - Modern icon library
- **React Context API** - Global state management
- **Intersection Observer API** - Scroll-based UI interactions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- Efficient Context API usage for state management
- Memoization of filtered and sorted results
- Smart pagination to limit DOM nodes
- CSS transitions with GPU acceleration for smooth animations
- Intersection Observer API for performant scroll detection
- Debounced scroll handlers to prevent excessive re-renders
- Responsive loader with dynamic sizing
- Optimized re-renders with proper React hooks dependencies

## Future Enhancements

- [ ] Add company detail modal/page
- [ ] Implement infinite scroll option
- [ ] Add export to CSV/PDF functionality
- [ ] Include advanced filters (employee count range, founding year range)
- [ ] Add company comparison feature
- [ ] Implement favorites/bookmarks with localStorage
- [ ] Add analytics dashboard
- [ ] Include keyboard navigation shortcuts
- [ ] Add comprehensive accessibility improvements (ARIA labels, screen reader support)
- [ ] Implement PWA features (offline support, installability)
- [ ] Add user authentication and personalization
- [ ] Include data visualization (charts, graphs)

## License

MIT License - feel free to use this project for learning or commercial purposes.

## Author

Built with ❤️ using React, TypeScript, and Tailwind CSS

## Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Mock data structure inspired by real-world company directories
- Design patterns following React best practices

---

**Note**: This is a demonstration project showcasing advanced frontend development skills including responsive design, state management, API integration, and professional UI/UX principles.
tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },

},
])

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````
