import React, { useState } from 'react';
import { useCompanyContext } from '../context/CompanyContext';
import CompanyCard from './CompanyCard';
import CompanyTable from './CompanyTable';
import { LayoutGrid, Table } from 'lucide-react';

const CompanyList: React.FC = () => {
  const { filteredCompanies, currentPage, itemsPerPage } = useCompanyContext();
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCompanies = filteredCompanies.slice(startIndex, endIndex);

  if (filteredCompanies.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
          <LayoutGrid className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          No companies found
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Try adjusting your filters or search term
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* View Mode Toggle */}
      <div className="flex justify-end mb-4">
        <div className="inline-flex rounded-lg bg-gray-100 dark:bg-slate-900/50 p-1 border border-gray-200 dark:border-slate-800">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              viewMode === 'grid'
                ? 'bg-sky-400/30 backdrop-blur-lg border border-sky-500/40 text-slate-900 dark:text-white'
                : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span className="hidden sm:inline">Grid</span>
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
              viewMode === 'table'
                ? 'bg-sky-400/30 backdrop-blur-lg border border-sky-500/40 text-slate-900 dark:text-white'
                : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <Table className="w-4 h-4" />
            <span className="hidden sm:inline">Table</span>
          </button>
        </div>
      </div>

      {/* Company Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      ) : (
        <div className="hidden md:block">
          <CompanyTable companies={paginatedCompanies} />
        </div>
      )}

      {/* Mobile Table Fallback */}
      {viewMode === 'table' && (
        <div className="md:hidden">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              Table view is optimized for larger screens. Showing grid view instead.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {paginatedCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyList;
