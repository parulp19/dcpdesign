import { Edit2, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DataSourceCardProps {
  title: string;
  status: 'unapproved' | 'approved' | 'partially-approved';
  logo: React.ReactNode;
  logoBackground: string;
  endpoints: {
    selected: string;
    total: string;
    configured: number;
    approved: number | string;
    success: number | string;
    failed: number | string;
  };
}

const statusStyles = {
  'unapproved': 'bg-red-50 text-red-600',
  'approved': 'bg-green-50 text-green-700/60',
  'partially-approved': 'bg-orange-50 text-orange-600',
};

const statusLabels = {
  'unapproved': 'Unapproved',
  'approved': 'Approved',
  'partially-approved': 'Partially Approved',
};

export function DataSourceCard({ title, status, logo, logoBackground, endpoints }: DataSourceCardProps) {
  return (
    <div className="flex flex-col gap-4 p-3 rounded-[10px] border border-[#ECEFF3] bg-white shadow-[2px_4px_24px_0_rgba(0,0,0,0.05)]">
      {/* Header */}
      <div className="flex justify-between items-center h-[23px]">
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <span className={cn(
          "px-1.5 py-1 rounded-lg text-[10px] font-bold leading-[150%]",
          statusStyles[status]
        )}>
          {statusLabels[status]}
        </span>
      </div>

      {/* Logo */}
      <div className={cn(
        "w-full h-[137px] rounded-lg border border-[#EAECF1] flex items-center justify-center relative overflow-hidden",
        logoBackground
      )}>
        {logo}
      </div>

      {/* Stats */}
      <div className="flex flex-col gap-2 p-3 rounded-lg border border-[#E5DDF4] bg-[#FAF8FE]">
        <div className="flex justify-between items-center">
          <span className="text-xs text-[#4B5563]">Endpoints</span>
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-semibold text-[#4B5563]">Selected: </span>
            <div className="flex items-center gap-0.5">
              <span className="text-[10px] font-semibold text-[#4B5563]">{endpoints.selected}</span>
              <span className="text-[10px] font-bold text-[#4B5563]">/</span>
              <span className="text-[10px] font-semibold text-[#4B5563]">{endpoints.total}</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-[#E5DDF4]" />

        <div className="flex justify-between items-end">
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm text-[#272727]">{endpoints.configured}</span>
            <span className="text-xs text-[#272727]">Configured</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm text-[#272727]">{endpoints.approved}</span>
            <span className="text-xs text-[#272727]">Appproved</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm text-[#009951]">{endpoints.success}</span>
            <span className="text-xs text-[#009951]">Success</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm text-[#DC362E]">{endpoints.failed}</span>
            <span className="text-xs text-[#DC362E]">Failed</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 h-[34px]">
        <button className="flex p-2 justify-center items-center rounded-lg border border-[#6A41C3]/50 bg-[#FDFDFD] hover:bg-gray-50 transition-colors">
          <Edit2 className="w-[18px] h-[18px] text-[#6A41C3]" />
        </button>
        <button className="flex flex-1 px-2 py-2 justify-center items-center gap-1 rounded-lg bg-[#6A41C3] hover:bg-[#6A41C3]/90 transition-colors">
          <Plus className="w-[18px] h-[18px] text-white/70" />
          <span className="text-xs font-semibold text-white tracking-tight">New Endpoint(s)</span>
        </button>
      </div>
    </div>
  );
}
