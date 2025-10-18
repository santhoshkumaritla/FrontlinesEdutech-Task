import React from 'react';
import { Building2, MapPin, Users, Calendar, ExternalLink } from 'lucide-react';
import type { Company } from '../services/api';

interface CompanyTableProps {
  companies: Company[];
}

const CompanyTable: React.FC<CompanyTableProps> = ({ companies }) => {
  return (
    <div className="overflow-x-auto rounded-xl border-2 border-blue-200 dark:border-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <table className="min-w-full bg-white dark:bg-slate-950 rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-50 to-sky-50 dark:from-slate-900/50 dark:to-slate-900/50 border-b-2 border-blue-200 dark:border-slate-800">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-bold text-blue-700 dark:text-slate-300 uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-4 text-left text-xs font-bold text-blue-700 dark:text-slate-300 uppercase tracking-wider">
              Industry
            </th>
            <th className="px-6 py-4 text-left text-xs font-bold text-blue-700 dark:text-slate-300 uppercase tracking-wider">
              Location
            </th>
            <th className="px-6 py-4 text-left text-xs font-bold text-blue-700 dark:text-slate-300 uppercase tracking-wider">
              Employees
            </th>
            <th className="px-6 py-4 text-left text-xs font-bold text-blue-700 dark:text-slate-300 uppercase tracking-wider">
              Founded
            </th>
            <th className="px-6 py-4 text-left text-xs font-bold text-blue-700 dark:text-slate-300 uppercase tracking-wider">
              Website
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-blue-100 dark:divide-slate-800">
          {companies.map((company, index) => (
            <tr
              key={company.id}
              className="hover:bg-blue-50 dark:hover:bg-slate-900/50 transition-all duration-300 group cursor-pointer border-l-4 border-transparent hover:border-blue-500 dark:hover:border-primary-500"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-primary-500 to-amber-500 p-2 rounded-lg shadow-lg group-hover:shadow-xl group-hover:shadow-primary-500/50 group-hover:scale-110 transition-all duration-300">
                    <Building2 className="w-5 h-5 text-slate-950" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-primary-400 transition-colors">
                      {company.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-slate-400 line-clamp-1 group-hover:text-gray-700 dark:group-hover:text-slate-300">
                      {company.description}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-primary-900/20 text-blue-700 dark:text-primary-400 border-2 border-blue-300 dark:border-primary-700/30 group-hover:scale-105 transition-transform duration-300">
                  {company.industry}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-primary-400 transition-colors">
                  <MapPin className="w-4 h-4 text-blue-500 dark:text-slate-500" />
                  {company.location}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-primary-400 transition-colors">
                  <Users className="w-4 h-4 text-blue-500 dark:text-slate-500" />
                  {company.employees.toLocaleString()}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-primary-400 transition-colors">
                  <Calendar className="w-4 h-4 text-blue-500 dark:text-slate-500" />
                  {company.founded}
                </div>
              </td>
              <td className="px-6 py-4">
                <a
                  href={`https://${company.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 dark:bg-sky-400/30 dark:backdrop-blur-lg border-2 border-blue-600 dark:border-sky-500/40 text-white dark:text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 dark:hover:bg-sky-400/50 dark:hover:border-sky-500/60"
                >
                  <ExternalLink className="w-3 h-3" />
                  Visit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyTable;
