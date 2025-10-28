import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  onPageChange,
  onItemsPerPageChange,
}: PaginationProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex justify-between items-start">
      {/* Left side - showing info and dropdown */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-[#67729D]">
          Showing {endItem} of {totalItems}
        </span>
        <button className="flex items-center gap-2 px-4 py-1.5 border border-[#E8EAF2] rounded-lg bg-[#FDFDFD] hover:bg-gray-50 transition-colors">
          <span className="text-sm text-[#112221]">{itemsPerPage.toString().padStart(2, '0')}</span>
          <ChevronDown className="w-[18px] h-[18px] opacity-90" />
        </button>
      </div>

      {/* Right side - page navigation */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={cn(
            "flex items-center justify-center w-[38px] h-[33px] rounded-lg border border-[#E8EAF2] bg-[#FDFDFD] transition-colors",
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
          )}
        >
          <ChevronLeft className="w-5 h-5 opacity-50" />
        </button>

        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={cn(
                "flex items-center justify-center w-[38px] h-[33px] rounded-lg border transition-colors text-sm font-medium",
                currentPage === page
                  ? "border-[#6A41C3]/20 bg-[#EDE8F8] text-[#6A41C3]"
                  : "border-[#E8EAF2] bg-[#FDFDFD] text-black hover:bg-gray-50"
              )}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={cn(
            "flex items-center justify-center w-[38px] h-[33px] rounded-lg border border-[#E8EAF2] bg-[#FDFDFD] transition-colors",
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"
          )}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
