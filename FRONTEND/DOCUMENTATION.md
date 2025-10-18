# Project Documentation

## Quick Start Guide

### Option 1: Using Startup Scripts (Recommended)

**Windows (PowerShell):**

```powershell
.\start.ps1
```

**Windows (Command Prompt):**

```cmd
start.bat
```

This will automatically open two terminal windows:

- JSON Server on port 3001
- Vite Dev Server on port 5173

### Option 2: Manual Start

**Terminal 1 - Start JSON Server:**

```bash
npm run server
# OR
npx json-server --watch db.json --port 3001
```

**Terminal 2 - Start Development Server:**

```bash
npm run dev
```

## Application Access

- **Frontend Application**: http://localhost:5173
- **JSON Server API**: http://localhost:3001
- **Companies Endpoint**: http://localhost:3001/companies

## Features Checklist

### ✅ Implemented Features

#### Core Functionality

- [x] Responsive design (mobile, tablet, desktop)
- [x] Company list display with grid/card layout
- [x] Company table layout for desktop
- [x] Search functionality (real-time)
- [x] Filter by industry
- [x] Filter by location
- [x] Sort by company name (asc/desc)
- [x] Sort by industry (asc/desc)
- [x] Pagination with page numbers
- [x] Customizable items per page (5, 10, 25, 50)
- [x] Filter reset button

#### State Management

- [x] React Context API for global state
- [x] Company list state
- [x] Filtered results state
- [x] Loading state
- [x] Error state
- [x] Search term state
- [x] Filter state (industry, location)
- [x] Sorting state
- [x] Pagination state

#### UI/UX Enhancements

- [x] Dark mode toggle with persistence
- [x] Loading spinner
- [x] Error messages with retry
- [x] Total company count display
- [x] Filtered company count display
- [x] Sticky header
- [x] Sticky filter panel (desktop)
- [x] Smooth animations (fade-in, slide-up)
- [x] Hover effects on cards and buttons
- [x] Responsive table with mobile fallback
- [x] View mode toggle (grid/table)
- [x] Professional color scheme
- [x] Icon integration (Lucide React)

#### Technical Implementation

- [x] React 19.1 with TypeScript
- [x] Tailwind CSS 4.1 for styling
- [x] JSON Server for mock API
- [x] Axios for HTTP requests
- [x] Component separation (maintainability)
- [x] Type safety throughout
- [x] Clean code structure
- [x] Professional error handling

## Component Architecture

```
App (CompanyProvider wrapper)
├── Header
│   ├── Logo
│   ├── Search Bar
│   └── Dark Mode Toggle
├── FilterPanel
│   ├── Industry Filter
│   ├── Location Filter
│   ├── Sort By
│   ├── Sort Order
│   └── Reset Button
├── CompanyList
│   ├── View Mode Toggle
│   ├── CompanyCard (Grid View)
│   └── CompanyTable (Table View)
├── Pagination
│   ├── Items Per Page
│   ├── Page Numbers
│   └── Navigation Buttons
├── Loader (Conditional)
└── Error (Conditional)
```

## State Flow

1. **Initial Load**

   - App mounts → CompanyProvider initializes
   - Context fetches companies from API
   - Loading state displayed
   - Companies stored in context

2. **User Interaction**

   - User searches/filters/sorts
   - Context updates filter/sort state
   - useEffect recalculates filtered companies
   - UI re-renders with new data

3. **Pagination**
   - User changes page/items per page
   - Context updates pagination state
   - CompanyList slices filtered array
   - Only current page items displayed

## API Integration

### Endpoints Used

```typescript
// Fetch all companies
GET http://localhost:3001/companies

// Paginated fetch (not currently used)
GET http://localhost:3001/companies?_page=1&_limit=10

// Search (not currently used, handled client-side)
GET http://localhost:3001/companies?q=search_term
```

### Data Model

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

## Performance Considerations

### Current Implementation

- Client-side filtering and sorting (good for < 1000 records)
- Pagination reduces DOM nodes
- Memoization in context for filtered results
- CSS animations (GPU accelerated)

### Scalability Improvements (Future)

- Server-side pagination for large datasets
- Virtual scrolling for infinite lists
- React.memo for expensive components
- useMemo/useCallback optimization
- Code splitting with React.lazy

## Testing the Application

### Manual Testing Checklist

#### Search Functionality

- [ ] Enter text in search bar
- [ ] Verify real-time filtering
- [ ] Check both name and description are searched
- [ ] Test with no results
- [ ] Clear search and verify reset

#### Filters

- [ ] Select an industry
- [ ] Select a location
- [ ] Combine industry + location
- [ ] Verify result count updates
- [ ] Click reset button
- [ ] Verify all filters cleared

#### Sorting

- [ ] Sort by name (ascending)
- [ ] Sort by name (descending)
- [ ] Sort by industry (ascending)
- [ ] Sort by industry (descending)
- [ ] Verify sort persists with filters

#### Pagination

- [ ] Change items per page (5, 10, 25, 50)
- [ ] Navigate through pages
- [ ] Verify correct items shown
- [ ] Check page numbers update
- [ ] Test with filtered results

#### View Modes

- [ ] Toggle between grid and table
- [ ] Verify table view on desktop
- [ ] Verify mobile fallback to grid
- [ ] Check responsive breakpoints

#### Dark Mode

- [ ] Toggle dark mode
- [ ] Verify all components update
- [ ] Refresh page (persistence test)
- [ ] Check contrast and readability

#### Responsive Design

- [ ] Test on mobile (< 640px)
- [ ] Test on tablet (640px - 1024px)
- [ ] Test on desktop (> 1024px)
- [ ] Check sticky header/filters
- [ ] Verify touch interactions

#### Error Handling

- [ ] Stop JSON Server
- [ ] Verify error message appears
- [ ] Click retry button
- [ ] Restart server and verify recovery

## Customization Guide

### Changing Company Data

Edit `db.json` and modify the companies array:

```json
{
  "companies": [
    {
      "id": 26,
      "name": "Your Company",
      "industry": "Your Industry",
      "location": "Your City, State",
      "description": "Your description",
      "employees": 100,
      "founded": 2020,
      "website": "yourwebsite.com"
    }
  ]
}
```

### Changing Theme Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
        600: '#your-darker-color',
        // ... etc
      }
    }
  }
}
```

### Adding New Filters

1. Add filter to context state
2. Update FilterPanel UI
3. Add filter logic in context useEffect
4. Test thoroughly

## Common Issues & Solutions

### Issue: JSON Server won't start

**Solution**: Ensure port 3001 is not in use. Change port in package.json if needed.

### Issue: Vite won't start

**Solution**: Delete node_modules and package-lock.json, then run `npm install`

### Issue: Tailwind classes not working

**Solution**: Verify tailwind.config.js content paths are correct

### Issue: Dark mode not persisting

**Solution**: Check browser localStorage is enabled

### Issue: API calls failing

**Solution**: Verify JSON Server is running on port 3001

## Browser Developer Tools

### Useful Console Commands

```javascript
// View current context state
window.localStorage.getItem("darkMode");

// Clear dark mode preference
window.localStorage.removeItem("darkMode");

// Test API endpoint
fetch("http://localhost:3001/companies")
  .then((r) => r.json())
  .then(console.log);
```

## Performance Metrics

Expected performance (Chrome DevTools):

- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Lighthouse Score: > 90

## Deployment Options

### Static Hosting (Netlify, Vercel)

```bash
npm run build
# Deploy dist folder
```

### Backend Requirement

- JSON Server is for development only
- For production, replace with real backend API
- Update API_URL in src/services/api.ts

## Future Enhancement Ideas

1. **Advanced Filters**

   - Employee count range
   - Founding year range
   - Multi-select industries

2. **Company Details**

   - Modal or separate page
   - More detailed information
   - Company logo integration

3. **User Features**

   - Favorites/bookmarks
   - Compare companies
   - Export to PDF/CSV

4. **Analytics**

   - Industry distribution chart
   - Location map visualization
   - Employee statistics

5. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Screen reader support
   - Focus management

## Support & Resources

- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- TypeScript: https://www.typescriptlang.org
- Vite: https://vitejs.dev
- JSON Server: https://github.com/typicode/json-server

---

Built with ❤️ using modern web technologies
