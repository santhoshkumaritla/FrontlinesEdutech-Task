import axios from 'axios';

const API_URL = 'http://localhost:3001/companies';

export interface Company {
  id: number;
  name: string;
  industry: string;
  location: string;
  description: string;
  employees: number;
  founded: number;
  website: string;
}

export const companyApi = {
  // Fetch all companies
  getAllCompanies: async (): Promise<Company[]> => {
    try {
      const response = await axios.get<Company[]>(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching companies:', error);
      throw new Error('Failed to fetch companies. Please try again later.');
    }
  },

  // Fetch companies with pagination
  getCompanies: async (page: number = 1, limit: number = 10): Promise<{ data: Company[]; total: number }> => {
    try {
      const response = await axios.get<Company[]>(API_URL, {
        params: {
          _page: page,
          _limit: limit,
        },
      });
      
      const total = parseInt(response.headers['x-total-count'] || '0');
      return {
        data: response.data,
        total,
      };
    } catch (error) {
      console.error('Error fetching paginated companies:', error);
      throw new Error('Failed to fetch companies. Please try again later.');
    }
  },

  // Search companies
  searchCompanies: async (query: string): Promise<Company[]> => {
    try {
      const response = await axios.get<Company[]>(API_URL, {
        params: {
          q: query,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error searching companies:', error);
      throw new Error('Failed to search companies. Please try again later.');
    }
  },
};
