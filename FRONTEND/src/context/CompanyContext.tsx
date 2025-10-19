import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Company } from '../services/api';
import { companyApi } from '../services/api';

export interface FilterState {
  industry: string;
  location: string;
  searchTerm: string;
}

export interface SortState {
  field: 'name' | 'industry';
  order: 'asc' | 'desc';
}

interface CompanyContextType {
  // State
  companies: Company[];
  filteredCompanies: Company[];
  loading: boolean;
  error: string | null;
  filters: FilterState;
  sortBy: SortState;
  currentPage: number;
  itemsPerPage: number;
  darkMode: boolean;

  // Actions
  setFilters: (filters: FilterState) => void;
  setSortBy: (sort: SortState) => void;
  setCurrentPage: (page: number) => void;
  setItemsPerPage: (items: number) => void;
  resetFilters: () => void;
  toggleDarkMode: () => void;
  refetchCompanies: () => void;
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export const useCompanyContext = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useCompanyContext must be used within CompanyProvider');
  }
  return context;
};

const initialFilters: FilterState = {
  industry: '',
  location: '',
  searchTerm: '',
};

const initialSort: SortState = {
  field: 'name',
  order: 'asc',
};

interface CompanyProviderProps {
  children: ReactNode;
}

export const CompanyProvider: React.FC<CompanyProviderProps> = ({ children }) => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [sortBy, setSortBy] = useState<SortState>(initialSort);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  // Fetch companies
  const fetchCompanies = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await companyApi.getAllCompanies();
      setCompanies(data);
      setFilteredCompanies(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchCompanies();
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...companies];

    // Apply filters
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      result = result.filter((company) =>
        company.name.toLowerCase().includes(searchLower)
      );
    }

    if (filters.industry) {
      result = result.filter((company) => company.industry === filters.industry);
    }

    if (filters.location) {
      result = result.filter((company) => company.location === filters.location);
    }

    // Apply sorting
    result.sort((a, b) => {
      const aValue = a[sortBy.field].toLowerCase();
      const bValue = b[sortBy.field].toLowerCase();

      if (sortBy.order === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    setFilteredCompanies(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [companies, filters, sortBy]);

  // Dark mode effect
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const resetFilters = () => {
    setFilters(initialFilters);
    setSortBy(initialSort);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const refetchCompanies = () => {
    fetchCompanies();
  };

  const value: CompanyContextType = {
    companies,
    filteredCompanies,
    loading,
    error,
    filters,
    sortBy,
    currentPage,
    itemsPerPage,
    darkMode,
    setFilters,
    setSortBy,
    setCurrentPage,
    setItemsPerPage,
    resetFilters,
    toggleDarkMode,
    refetchCompanies,
  };

  return <CompanyContext.Provider value={value}>{children}</CompanyContext.Provider>;
};
