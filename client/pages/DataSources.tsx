import { Search, Filter, Plus, Grid3x3, List } from 'lucide-react';
import { Sidebar } from '@/components/Sidebar';
import { DataSourceCard } from '@/components/DataSourceCard';

export default function DataSources() {
  const dataSources = [
    {
      title: 'MyScheme',
      status: 'unapproved' as const,
      logoBackground: 'bg-gradient-to-br from-white via-[#D5F2E0] to-[#D5F2E0]',
      logo: (
        <svg width="143" height="26" viewBox="0 0 143 26" fill="none">
          <path d="M17.7196 4.42578C19.43 4.42578 20.7866 4.94969 21.7897 5.99748C22.8095 7.04529 23.3191 8.50057 23.3191 10.3633V18.4963H19.1256V10.9371C19.1256 10.039 18.8872 9.34879 18.4103 8.86647C17.9499 8.36752 17.3085 8.11804 16.4862 8.11804C15.6639 8.11804 15.0144 8.36752 14.5375 8.86647C14.077 9.34879 13.8468 10.039 13.8468 10.9371V18.4963H9.65327V10.9371C9.65327 10.039 9.41482 9.34879 8.93791 8.86647C8.47746 8.36752 7.83609 8.11804 7.01384 8.11804C6.19157 8.11804 5.54201 8.36752 5.0651 8.86647C4.60465 9.34879 4.37441 10.039 4.37441 10.9371V18.4963H0.15625V4.57547H4.37441V6.32181C4.80199 5.73969 5.36111 5.28233 6.0518 4.94969C6.7425 4.60042 7.52363 4.42578 8.39523 4.42578C9.43127 4.42578 10.3522 4.65032 11.158 5.09936C11.9803 5.54843 12.6216 6.18876 13.0821 7.02034C13.559 6.25529 14.2086 5.63159 15.0308 5.14926C15.8531 4.66693 16.7493 4.42578 17.7196 4.42578ZM40.3297 4.57547L31.6961 25.1074H27.1573L30.3146 18.0223L24.7151 4.57547H29.4266L32.6088 13.2822L35.7663 4.57547H40.3297Z" fill="#16A34A"/>
          <path d="M48.1262 18.6672C46.86 18.6672 45.7253 18.4592 44.722 18.0435C43.719 17.6278 42.9132 17.0123 42.3046 16.1974C41.7125 15.3824 41.4002 14.4011 41.3672 13.2535H45.8567C45.9226 13.9022 46.1446 14.4011 46.5228 14.7504C46.901 15.083 47.3944 15.2493 48.0029 15.2493C48.6279 15.2493 49.121 15.108 49.4828 14.8252C49.8448 14.5259 50.0256 14.1184 50.0256 13.6028C50.0256 13.1704 49.8776 12.8128 49.5816 12.53C49.3021 12.2473 48.9485 12.0145 48.5208 11.8315C48.1098 11.6485 47.5177 11.4407 46.7447 11.2078C45.6266 10.8585 44.7138 10.5093 44.0068 10.16C43.2997 9.81074 42.6911 9.29516 42.1813 8.61325C41.6716 7.93135 41.4167 7.04155 41.4167 5.94384C41.4167 4.31394 42.0005 3.0416 43.1681 2.12686C44.3357 1.19548 45.8567 0.729785 47.7314 0.729785C49.6391 0.729785 51.1768 1.19548 52.3444 2.12686C53.512 3.0416 54.137 4.32225 54.2191 5.96879H49.6556C49.6227 5.40333 49.4171 4.96257 49.0389 4.64658C48.6607 4.31394 48.1755 4.14761 47.5834 4.14761C47.0738 4.14761 46.6627 4.28899 46.3501 4.57173C46.0378 4.83783 45.8814 5.22869 45.8814 5.74428C45.8814 6.30974 46.1446 6.7505 46.6709 7.0665C47.1971 7.38249 48.0193 7.72346 49.1375 8.08935C50.2558 8.47189 51.1602 8.83778 51.851 9.18706C52.5581 9.53631 53.1667 10.0436 53.6763 10.7089C54.1862 11.3741 54.4411 12.2307 54.4411 13.2785C54.4411 14.2764 54.1862 15.1828 53.6763 15.9978C53.1831 16.8127 52.4596 17.4613 51.5055 17.9437C50.5518 18.4261 49.4254 18.6672 48.1262 18.6672Z" fill="#2F2B45"/>
        </svg>
      ),
      endpoints: {
        selected: '20',
        total: '40',
        configured: 12,
        approved: '-',
        success: '-',
        failed: '-',
      },
    },
    {
      title: 'MyGov',
      status: 'approved' as const,
      logoBackground: 'bg-white',
      logo: (
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/0e55033935e97dbad5896e916b0495cdb1ca461a?width=508" 
          alt="MyGov" 
          className="w-full h-full object-contain"
        />
      ),
      endpoints: {
        selected: '20',
        total: '40',
        configured: 12,
        approved: 12,
        success: 10,
        failed: 4,
      },
    },
    {
      title: 'S3waas',
      status: 'partially-approved' as const,
      logoBackground: 'bg-[#64318E]',
      logo: (
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/1fe964321f8ee619fe38266d4c7beea9ac74504a?width=265" 
          alt="S3WaaS" 
          className="w-[132px] h-[48px]"
        />
      ),
      endpoints: {
        selected: '20',
        total: '40',
        configured: 12,
        approved: 10,
        success: 10,
        failed: 2,
      },
    },
    {
      title: 'IGOD',
      status: 'partially-approved' as const,
      logoBackground: 'bg-[#FDFDFD]',
      logo: (
        <svg width="254" height="137" viewBox="0 0 254 137" fill="none" className="w-full h-full">
          <path d="M67.4287 47.1426H57.5078V97.7441H67.4287V47.1426Z" fill="#2877C3" stroke="#2584C6" strokeWidth="0.00333584"/>
          <path d="M62.4402 46.0063C65.4448 46.0063 67.8805 43.511 67.8805 40.4328C67.8805 37.3547 65.4448 34.8594 62.4402 34.8594C59.4357 34.8594 57 37.3547 57 40.4328C57 43.511 59.4357 46.0063 62.4402 46.0063Z" fill="#2584C6"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M108.131 51.4394C103.629 47.8362 98.0805 45.8789 92.3685 45.8789C78.2378 45.8789 66.7656 57.6315 66.7656 72.1082C66.7656 86.5848 78.2378 98.3382 92.3685 98.3382C102.48 98.3382 111.645 92.2406 115.758 82.7768L106.87 78.7233C104.32 84.5903 98.6374 88.3711 92.3685 88.3711C83.6075 88.3711 76.4944 81.0837 76.4944 72.1082C76.4944 63.1326 83.6075 55.846 92.3685 55.846C95.91 55.846 99.3502 57.0594 102.141 59.2932L108.131 51.4394Z" fill="#2584C6"/>
        </svg>
      ),
      endpoints: {
        selected: '20',
        total: '40',
        configured: 12,
        approved: 10,
        success: 10,
        failed: 2,
      },
    },
    {
      title: 'DD News',
      status: 'partially-approved' as const,
      logoBackground: 'bg-[#FDF5EE]',
      logo: (
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/3f53cb9864e267f48664bf7ed0b13ec6fade0194?width=152" 
          alt="DD News" 
          className="w-[76px] h-[77px]"
        />
      ),
      endpoints: {
        selected: '20',
        total: '40',
        configured: 12,
        approved: 10,
        success: 10,
        failed: 2,
      },
    },
    {
      title: 'News on Air',
      status: 'partially-approved' as const,
      logoBackground: 'bg-gradient-to-br from-[#FDFDFD] via-[#E3E6F8] to-[#E3E6F8]',
      logo: (
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/4ab9b10be5abb1d6a99faf7e5cfbafc33912c6d2?width=192" 
          alt="News on Air" 
          className="w-[96px] h-[85px]"
        />
      ),
      endpoints: {
        selected: '20',
        total: '40',
        configured: 12,
        approved: 10,
        success: 10,
        failed: 2,
      },
    },
    {
      title: 'PIB',
      status: 'partially-approved' as const,
      logoBackground: 'bg-white',
      logo: (
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/661a7e6ada9f7d844092dc94f01713314ca16ccc?width=512" 
          alt="PIB" 
          className="w-full h-full object-cover"
        />
      ),
      endpoints: {
        selected: '20',
        total: '40',
        configured: 12,
        approved: 10,
        success: 10,
        failed: 2,
      },
    },
    {
      title: 'Neva',
      status: 'partially-approved' as const,
      logoBackground: 'bg-gradient-to-br from-[#FDFDFD] via-[#FEF9F6] to-[#FEF9F6]',
      logo: (
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/c3c5c41893e8e292dc954dfd4dd3322535987c6f?width=340" 
          alt="Neva" 
          className="w-[170px] h-[96px]"
        />
      ),
      endpoints: {
        selected: '20',
        total: '40',
        configured: 12,
        approved: 10,
        success: 10,
        failed: 2,
      },
    },
    {
      title: 'India Code',
      status: 'partially-approved' as const,
      logoBackground: 'bg-[#FDFDFD]',
      logo: (
        <div className="flex flex-col items-center gap-0.5">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/6c2b9bd7edeb8e412727e0cefe010aaed930d90e?width=310" 
            alt="India Code" 
            className="h-[35px]"
          />
          <span className="text-[10px] text-[#5714EF] opacity-83">Digital Repository of All Central and State Acts</span>
        </div>
      ),
      endpoints: {
        selected: '20',
        total: '40',
        configured: 12,
        approved: 10,
        success: 10,
        failed: 2,
      },
    },
    {
      title: 'Digital Sansad',
      status: 'partially-approved' as const,
      logoBackground: 'bg-[#243E79]',
      logo: (
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/c8784927e91a08f22099d7e6af6bf95632c6c5a4?width=204" 
          alt="Digital Sansad" 
          className="w-[102px] h-[95px]"
        />
      ),
      endpoints: {
        selected: '20',
        total: '40',
        configured: 12,
        approved: 10,
        success: 10,
        failed: 2,
      },
    },
    {
      title: 'Datagov',
      status: 'partially-approved' as const,
      logoBackground: 'bg-[#FEF7EF]',
      logo: (
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/324baf99ffe3da41b27fe51427c0bd4f2782ecbf?width=292" 
          alt="Datagov" 
          className="w-[146px] h-[48px]"
        />
      ),
      endpoints: {
        selected: '20',
        total: '40',
        configured: 12,
        approved: 10,
        success: 10,
        failed: 2,
      },
    },
  ];

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header Bar */}
        <div className="h-20 bg-[#F9FAFB] border-b border-[#F3F4F6] px-7 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Placeholder for user/notifications */}
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-white px-7 py-6 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-[#1F2937]">Data Sources</h1>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-[#6A41C3] hover:bg-[#6A41C3]/90 text-white rounded-lg font-semibold text-sm transition-colors">
              <Plus className="w-[18px] h-[18px] opacity-70" />
              New Data Source
            </button>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white px-7 py-6 border-b border-gray-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-4 px-3 py-1.5 rounded-lg border border-[#E6E9F0] bg-[#F1F2F6]/50 w-[357px]">
                <Search className="w-4 h-4 text-[#A4ACCB]" />
                <span className="text-sm text-[#A8B0CD]">Search</span>
              </div>
              <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#E6E9F0] hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4 text-[#A4ACCB]" />
                <span className="text-sm text-gray-700">Filter</span>
              </button>
            </div>

            <div className="flex items-center rounded-[37px] overflow-hidden border border-[#919191]">
              <button className="p-1.5 px-3 hover:bg-gray-50 transition-colors">
                <List className="w-6 h-6 text-[#272727]/60" />
              </button>
              <button className="p-1.5 px-3 bg-[#E8DEF8] border-l border-[#A78FDC]">
                <Grid3x3 className="w-6 h-6 text-[#8260CD]" />
              </button>
            </div>
          </div>
        </div>

        {/* Data Sources Grid */}
        <div className="flex-1 overflow-y-auto bg-white">
          <div className="p-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {dataSources.map((source) => (
                <DataSourceCard
                  key={source.title}
                  title={source.title}
                  status={source.status}
                  logo={source.logo}
                  logoBackground={source.logoBackground}
                  endpoints={source.endpoints}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
