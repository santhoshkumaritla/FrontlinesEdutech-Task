import React, { useState, useEffect, useRef } from 'react';
import { Filter, ArrowUpDown, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';
import { useCompanyContext } from '../context/CompanyContext';
import type { Company } from '../services/api';

const FilterPanel: React.FC = () => {
  const {
    companies,
    filteredCompanies,
    filters,
    setFilters,
    sortBy,
    setSortBy,
    resetFilters,
  } = useCompanyContext();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [hasAutoCollapsed, setHasAutoCollapsed] = useState(false);

  // Extract unique values
  const industries = Array.from(new Set(companies.map((c: Company) => c.industry))).sort();
  const locations = Array.from(new Set(companies.map((c: Company) => c.location))).sort();

  // 🧠 Auto-collapse once when content touches (no reopen on scroll up)
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAutoCollapsed) {
          // Collapse only once when cards reach panel
          setIsCollapsed(true);
          setHasAutoCollapsed(true);
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '-80px',
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasAutoCollapsed]);

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, industry: e.target.value });
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, location: e.target.value });
  };

  const handleSortFieldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy({ ...sortBy, field: e.target.value as 'name' | 'industry' });
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy({ ...sortBy, order: e.target.value as 'asc' | 'desc' });
  };

  // 🖱️ Manual toggle only
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* Filter Panel */}
      <div
        id="filter-panel"
        className="bg-white dark:bg-slate-950 rounded-xl shadow-md dark:shadow-2xl dark:shadow-blue-500/10 mb-4 sticky top-16 z-40 border border-gray-200 dark:border-slate-800 transform-gpu transition-all duration-500"
      >
        <div
          className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-900/30 transition-colors rounded-t-xl"
          onClick={toggleCollapse}
        >
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
              <Filter className="w-3.5 h-3.5 text-white" />
            </div>
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">
              Filters & Sorting
            </h2>
            <span className="text-xs text-gray-500 dark:text-slate-400 ml-2">
              ({filteredCompanies.length} results)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                resetFilters();
              }}
              className="flex items-center gap-1.5 text-xs btn-secondary px-2.5 py-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
            <button className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
              {isCollapsed ? (
                <ChevronDown className="w-4 h-4 text-gray-600 dark:text-slate-400" />
              ) : (
                <ChevronUp className="w-4 h-4 text-gray-600 dark:text-slate-400" />
              )}
            </button>
          </div>
        </div>

        {/* Collapsible Content */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden transform-gpu ${
            isCollapsed ? 'max-h-0 opacity-0' : 'max-h-[600px] opacity-100'
          }`}
        >
          <div className="px-4 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Industry */}
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Industry
                </label>
                <select
                  value={filters.industry}
                  onChange={handleIndustryChange}
                  className="select-field text-sm py-1.5"
                >
                  <option value="">All Industries</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Location
                </label>
                <select
                  value={filters.location}
                  onChange={handleLocationChange}
                  className="select-field text-sm py-1.5"
                >
                  <option value="">All Locations</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  <ArrowUpDown className="w-3.5 h-3.5 inline mr-1" />
                  Sort By
                </label>
                <select
                  value={sortBy.field}
                  onChange={handleSortFieldChange}
                  className="select-field text-sm py-1.5"
                >
                  <option value="name">Company Name</option>
                  <option value="industry">Industry</option>
                </select>
              </div>

              {/* Sort Order */}
              <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Order
                </label>
                <select
                  value={sortBy.order}
                  onChange={handleSortOrderChange}
                  className="select-field text-sm py-1.5"
                >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>
            </div>

            {/* Count */}
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-slate-800">
              <p className="text-xs text-gray-600 dark:text-slate-400">
                Showing{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {filteredCompanies.length}
                </span>{' '}
                of{' '}
                <span className="font-semibold">{companies.length}</span> companies
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Invisible observer below the panel */}
      <div ref={sentinelRef} style={{ height: '1px' }} />
    </>
  );
};

export default FilterPanel;
