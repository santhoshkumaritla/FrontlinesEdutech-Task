import React from 'react';
import { Filter, ArrowUpDown, RotateCcw } from 'lucide-react';
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
    resetFilters 
  } = useCompanyContext();

  // Extract unique values for dropdowns
  const industries = Array.from(new Set(companies.map((c: Company) => c.industry))).sort();
  const locations = Array.from(new Set(companies.map((c: Company) => c.location))).sort();

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

  return (
    <div className="bg-white dark:bg-slate-950 rounded-xl shadow-md dark:shadow-2xl dark:shadow-blue-500/10 p-4 mb-4 sticky top-16 z-40 animate-fade-in border border-gray-200 dark:border-slate-800">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
            <Filter className="w-3.5 h-3.5 text-white" />
          </div>
          <h2 className="text-base font-semibold text-gray-900 dark:text-white">
            Filters & Sorting
          </h2>
        </div>
        <button
          onClick={resetFilters}
          className="flex items-center gap-1.5 text-xs btn-secondary px-2.5 py-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Industry Filter */}
        <div>
          <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            Industry
          </label>
          <select
            value={filters.industry}
            onChange={handleIndustryChange}
            className="select-field"
          >
            <option value="">All Industries</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
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

      {/* Results Count */}
      <div className="mt-3 pt-3 border-t border-gray-200 dark:border-slate-800">
        <p className="text-xs text-gray-600 dark:text-slate-400">
          Showing <span className="font-semibold text-blue-600 dark:text-blue-400">
            {filteredCompanies.length}
          </span> of <span className="font-semibold">{companies.length}</span> companies
        </p>
      </div>
    </div>
  );
};

export default FilterPanel;
