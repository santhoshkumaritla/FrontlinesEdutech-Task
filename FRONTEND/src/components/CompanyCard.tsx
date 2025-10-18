import React from 'react';
import { Building2, MapPin, Users, Calendar, ExternalLink } from 'lucide-react';
import type { Company } from '../services/api';

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <div className="card p-4 animate-slide-up group hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-2 border-blue-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-primary-500">
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-primary-400 transition-colors">
            {company.name}
          </h3>
          <div className="flex items-center gap-2 text-xs">
            <div className="p-1 rounded-lg bg-gradient-to-br from-primary-500 to-amber-500 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
              <Building2 className="w-3 h-3 text-slate-950" />
            </div>
            <span className="font-medium text-primary-600 dark:text-primary-400">{company.industry}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600 dark:text-slate-400 text-xs mb-3 line-clamp-2 group-hover:text-gray-800 dark:group-hover:text-slate-300 transition-colors">
        {company.description}
      </p>

      <div className="space-y-1.5 mb-3">
        <div className="flex items-center gap-2 text-xs text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-primary-400 transition-colors cursor-default">
          <MapPin className="w-3.5 h-3.5 text-blue-500 dark:text-slate-500" />
          <span>{company.location}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-primary-400 transition-colors cursor-default">
          <Users className="w-3.5 h-3.5 text-blue-500 dark:text-slate-500" />
          <span>{company.employees.toLocaleString()} employees</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-primary-400 transition-colors cursor-default">
          <Calendar className="w-3.5 h-3.5 text-blue-500 dark:text-slate-500" />
          <span>Founded in {company.founded}</span>
        </div>
      </div>

      <div className="pt-3 border-t border-blue-200 dark:border-slate-800">
        <a
          href={`https://${company.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 dark:bg-sky-400/30 dark:backdrop-blur-lg border-2 border-blue-600 dark:border-sky-500/40 text-white dark:text-white text-xs font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 dark:hover:bg-sky-400/50 dark:hover:border-sky-500/60"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Visit Website
        </a>
      </div>
    </div>
  );
};

export default CompanyCard;
