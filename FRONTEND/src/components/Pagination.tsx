import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCompanyContext } from '../context/CompanyContext';

const Pagination: React.FC = () => {
  const { 
    filteredCompanies, 
    currentPage, 
    itemsPerPage, 
    setCurrentPage, 
    setItemsPerPage 
  } = useCompanyContext();

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredCompanies.length);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-slate-950 rounded-xl shadow-md dark:shadow-2xl dark:shadow-blue-500/10 p-4 mt-6 border border-gray-200 dark:border-slate-800">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Items per page */}
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-700 dark:text-slate-300">
            Items per page:
          </label>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="select-field w-20"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>

        {/* Page info */}
        <div className="text-sm text-gray-700 dark:text-slate-300">
          Showing {startIndex + 1} to {endIndex} of {filteredCompanies.length} results
        </div>

        {/* Pagination controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-gray-100 dark:bg-slate-900/50 hover:bg-gray-200 dark:hover:bg-slate-800/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 border border-transparent dark:border-slate-800"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1">
            {getPageNumbers().map((page, index) => (
              <React.Fragment key={index}>
                {page === '...' ? (
                  <span className="px-3 py-1 text-gray-500 dark:text-slate-400">...</span>
                ) : (
                  <button
                    onClick={() => handlePageChange(page as number)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/50'
                        : 'bg-gray-100 dark:bg-slate-900/50 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-800/50 border border-transparent dark:border-slate-800'
                    }`}
                  >
                    {page}
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-gray-100 dark:bg-slate-900/50 hover:bg-gray-200 dark:hover:bg-slate-800/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 border border-transparent dark:border-slate-800"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
