import { ChevronLeft, Coins, BookMarked } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Sidebar() {
  return (
    <div className="w-[260px] h-screen bg-[#F9FAFB] border-r border-[#F3F4F6] flex-shrink-0">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-5 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-0">
            <svg width="45" height="31" viewBox="0 0 45 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.8896 0.400391C38.0351 0.400413 41.5662 1.52439 44.0293 3.79785L44.2422 3.99512L44.1221 4.25879L42.3848 8.05273L42.1455 8.57617L41.7383 8.16895C39.845 6.27567 37.7054 5.26953 34.6152 5.26953C29.0293 5.26955 24.501 9.79996 24.501 15.3379C24.501 20.9227 29.0304 25.4521 34.6152 25.4521C37.704 25.4521 39.84 24.447 41.7314 22.4678L42.1416 22.0391L42.3857 22.5791L44.123 26.4189L44.2412 26.6816L44.0293 26.8779C41.5688 29.149 38.0392 30.3203 34.8896 30.3203C26.4916 30.3203 19.6777 23.6102 19.6777 15.3379C19.6778 7.06401 26.4932 0.400391 34.8896 0.400391Z" fill="#6418C3" stroke="#6418C3" strokeWidth="0.8"/>
              <path d="M9.2998 0.720703C14.125 0.720719 17.8581 2.34416 20.3838 5.00586C22.9058 7.66376 24.1913 11.3223 24.1914 15.3379C24.1914 19.3806 22.8463 23.0503 20.2969 25.7119C17.7444 28.3766 14.0131 30.001 9.2998 30.001H0.396484V25.1328H10.3516C15.6223 25.1326 19.3223 20.8272 19.3223 15.3379C19.3221 9.8957 15.6233 5.59006 10.3516 5.58984H0.396484V0.720703H9.2998Z" fill="#280771" stroke="#280771" strokeWidth="0.8"/>
            </svg>
            <svg width="22" height="31" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-0.5">
              <path d="M9.57422 0.400391C13.3405 0.400425 16.1572 1.35466 18.0361 3.04688C19.9201 4.74384 20.8085 7.13563 20.8086 9.89746C20.8086 12.6606 19.886 15.1531 18.166 16.957C16.4433 18.7636 13.9467 19.8524 10.8545 19.8525H5.21973V29.6807H0.396484V14.9834H10.8994C12.3206 14.9834 13.5781 14.6117 14.4736 13.8457C15.3591 13.0882 15.9395 11.9037 15.9395 10.1719C15.9394 8.40573 15.2987 7.19931 14.3447 6.42578C13.378 5.64204 12.0471 5.26953 10.625 5.26953H0.396484V0.400391H9.57422Z" fill="#280771" stroke="#280771" strokeWidth="0.8"/>
            </svg>
          </div>

          {/* Collapse button */}
          <button className="p-3 rounded-lg hover:bg-gray-100 transition-colors">
            <ChevronLeft className="w-3.5 h-3.5 text-[#6B7280]" />
          </button>
        </div>

        {/* User Profile */}
        <div className="mx-5 mb-5">
          <div className="p-5 rounded-xl bg-[#F3F4F6] flex items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-white bg-[#DBD7D5] overflow-hidden flex items-center justify-center">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/bb3a04e63d5dac0c57aaf2f827dcb22a1508b768?width=64" 
                alt="User avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-medium text-[#1F2937]">Jai</span>
              <span className="text-sm text-[#4B5563]">User</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-0">
          <div className="space-y-5">
            {/* Data Source & Endpoint - Expanded */}
            <div>
              <button className="w-full px-4 py-3 flex items-center justify-between rounded-l-[40px] hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <Coins className="w-[18px] h-[18px] text-[#6A41C3]" />
                  <span className="text-sm text-[#272727]">Data Source & Endpoint</span>
                </div>
                <svg className="w-3.5 h-3.5 text-[#6B7280] rotate-180" viewBox="0 0 14 14" fill="none">
                  <path d="M12.2299 5.07942L7.86335 9.19029C7.73049 9.31597 7.55999 9.37879 7.38935 9.37879C7.2188 9.37879 7.04836 9.31594 6.91536 9.19029L2.54882 5.07942C2.27304 4.81743 2.26155 4.38107 2.52297 4.10471C2.7851 3.8264 3.22334 3.81658 3.49797 4.07778L7.3905 7.76635L11.283 4.07778C11.5577 3.81658 11.9929 3.82634 12.2569 4.10471C12.518 4.38107 12.5065 4.81743 12.2299 5.07942Z" fill="currentColor"/>
                </svg>
              </button>
              
              {/* Submenu */}
              <div className="ml-0 mt-1 rounded-2xl bg-[#F3F4F6] py-2">
                <button className="w-full px-3 py-2 flex items-center gap-4 text-sm">
                  <div className="w-[18px] h-[18px] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6418C3]"></div>
                  </div>
                  <span className="text-[#6418C3] font-medium">Data Sources</span>
                </button>
                <button className="w-full px-3 py-2 flex items-center gap-4 text-sm hover:bg-white/50 rounded-lg transition-colors">
                  <div className="w-[18px] h-[18px] flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-[#4B5563]"></div>
                  </div>
                  <span className="text-[#4B5563]">Data Endpoints</span>
                </button>
              </div>
            </div>

            {/* Drafts */}
            <button className="w-full px-4 py-3 flex items-center justify-between rounded-l-[40px] hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <BookMarked className="w-[18px] h-[18px] text-[#6B7280]" />
                <span className="text-sm text-[#4B5563]">Drafts</span>
              </div>
              <svg className="w-3.5 h-3.5 text-[#6B7280]" viewBox="0 0 14 14" fill="none">
                <path d="M12.2299 5.07942L7.86335 9.19029C7.73049 9.31597 7.55999 9.37879 7.38935 9.37879C7.2188 9.37879 7.04836 9.31594 6.91536 9.19029L2.54882 5.07942C2.27304 4.81743 2.26155 4.38107 2.52297 4.10471C2.7851 3.8264 3.22334 3.81658 3.49797 4.07778L7.3905 7.76635L11.283 4.07778C11.5577 3.81658 11.9929 3.82634 12.2569 4.10471C12.518 4.38107 12.5065 4.81743 12.2299 5.07942Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
