import { Edit2, Plus, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DataSource {
  name: string;
  total: number;
  selected: number;
  configured: number;
  approved: number | string;
  success: number | string;
  failed: number | string;
  status: 'approved' | 'partially-approved' | 'unapproved';
}

interface DataSourcesTableProps {
  dataSources: DataSource[];
}

const statusStyles = {
  'approved': 'bg-green-50 text-green-600',
  'partially-approved': 'bg-orange-50 text-orange-600',
  'unapproved': 'bg-red-50 text-red-600',
};

const statusLabels = {
  'approved': 'Approved',
  'partially-approved': 'Partially Approved',
  'unapproved': 'Unapproved',
};

export function DataSourcesTable({ dataSources }: DataSourcesTableProps) {
  return (
    <div className="w-full rounded-lg border border-[#E1E1E2] overflow-hidden">
      {/* Table Header */}
      <div className="grid grid-cols-[200px_80px_80px_1fr_120px_100px] gap-4 bg-[#F9FAFB] px-6 py-4 border-b border-[#E1E1E2] text-sm font-medium text-[#4B5563]">
        <div>Data Source</div>
        <div className="text-center">Total</div>
        <div className="text-center">Selected</div>
        <div className="grid grid-cols-4 gap-2 text-center">
          <div>Endpoints</div>
          <div className="col-span-3 grid grid-cols-4 gap-2 text-xs">
            <div>Configured</div>
            <div>Approved</div>
            <div>Success</div>
            <div>Failure</div>
          </div>
        </div>
        <div className="text-center">Status</div>
        <div className="text-center">Action</div>
      </div>

      {/* Table Body */}
      <div className="bg-white">
        {dataSources.map((source, index) => (
          <div
            key={source.name}
            className={cn(
              "grid grid-cols-[200px_80px_80px_1fr_120px_100px] gap-4 px-6 py-4 items-center",
              index !== dataSources.length - 1 && "border-b border-[#F3F4F6]"
            )}
          >
            {/* Data Source Name */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-[#272727]">{source.name}</span>
              <button className="text-[#625B71] hover:text-[#625B71]/80">
                <Info className="w-4 h-4" />
              </button>
            </div>

            {/* Total */}
            <div className="text-center text-sm text-[#272727]">{source.total}</div>

            {/* Selected */}
            <div className="text-center text-sm text-[#272727]">{source.selected}</div>

            {/* Endpoints Stats */}
            <div className="grid grid-cols-4 gap-2">
              <div className="text-center text-sm text-[#272727]">{source.configured}</div>
              <div className="text-center text-sm text-[#272727]">{source.approved}</div>
              <div className="text-center text-sm text-[#009951]">{source.success}</div>
              <div className="text-center text-sm text-[#DC362E]">{source.failed}</div>
            </div>

            {/* Status */}
            <div className="flex justify-center">
              <span className={cn(
                "px-2 py-1 rounded-lg text-xs font-bold",
                statusStyles[source.status]
              )}>
                {statusLabels[source.status]}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center gap-2">
              <button className="p-2 rounded-lg border border-[#6A41C3]/50 hover:bg-gray-50 transition-colors">
                <Edit2 className="w-4 h-4 text-[#6A41C3]" />
              </button>
              <button className="p-2 rounded-lg border border-[#6A41C3]/50 hover:bg-gray-50 transition-colors">
                <Plus className="w-4 h-4 text-[#6A41C3]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
