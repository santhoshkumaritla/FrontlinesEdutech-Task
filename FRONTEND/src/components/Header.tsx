import React from 'react';
import { Search, Moon, Sun, Building2 } from 'lucide-react';
import { useCompanyContext } from '../context/CompanyContext';

const Header: React.FC = () => {
  const { filters, setFilters, darkMode, toggleDarkMode } = useCompanyContext();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, searchTerm: e.target.value });
  };

  return (
    <header className="bg-white dark:bg-slate-950 shadow-md dark:shadow-2xl dark:shadow-primary-500/10 sticky top-0 z-50 transition-colors duration-300 backdrop-blur-md border-b border-gray-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {/* Logo and Title */}
          <div className="flex items-center gap-2.5">
            <div className="bg-gradient-to-br from-primary-500 to-amber-500 p-1.5 rounded-lg shadow-lg">
              <Building2 className="w-5 h-5 text-slate-950 dark:text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Company Directory
              </h1>
            </div>
          </div>

          {/* Search Bar and Dark Mode Toggle */}
          <div className="flex items-center gap-2.5">
            <div className="relative flex-1 md:w-72">
              <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder="Search companies..."
                value={filters.searchTerm}
                onChange={handleSearchChange}
                className="input-field pl-9 text-sm py-1.5"
              />
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-lg bg-gray-100 dark:bg-slate-900/50 hover:bg-gray-200 dark:hover:bg-slate-800/50 transition-all duration-300 border border-transparent dark:border-slate-800"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-4.5 h-4.5 text-primary-500" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
