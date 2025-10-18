import React from 'react';
import { CompanyProvider } from './context/CompanyContext';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import CompanyList from './components/CompanyList';
import Pagination from './components/Pagination';
import Loader from './components/Loader';
import Error from './components/Error';
import { useCompanyContext } from './context/CompanyContext';

const AppContent: React.FC = () => {
  const { loading, error, refetchCompanies } = useCompanyContext();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <Header />
      
      {/* Gradient overlay to fade content under FilterPanel */}
      <div className="fixed top-[56px] left-0 right-0 h-28 bg-gradient-to-b from-gray-50 dark:from-slate-950 via-gray-50/80 dark:via-slate-950/80 to-transparent pointer-events-none z-30"></div>
      
      <main className="container mx-auto px-4 py-4 relative">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error message={error} onRetry={refetchCompanies} />
        ) : (
          <>
            <FilterPanel />
            <CompanyList />
            <Pagination />
          </>
        )}
      </main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © 2025 Company Filtering App
          </p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <CompanyProvider>
      <AppContent />
    </CompanyProvider>
  );
}

export default App;
