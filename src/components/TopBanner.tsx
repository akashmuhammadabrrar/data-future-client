import { Search } from "lucide-react";
import bannerA from "../assets/banner1.jpg";
import bannerB from "../assets/images/banner2.jpg";
import bannerC from "../assets/images/banner3.jpg";

const TopBanner = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Top Text */}
      <div className="text-center mb-6">
        <p className="text-[#1C1C1C] text-sm sm:text-base">WELCOME TO FDI</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1C1C1C] leading-snug">
          Powering Decisions with Accurate
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#005FBD]">Market Insights</h2>
      </div>

      {/* Text + Search Field (shown above images on small screens) */}
      <div className="lg:hidden text-center mb-4">
        <p className="text-[#1C1C1C] text-sm sm:text-base leading-snug px-2">
          Global market research, industry forecasts, and custom consulting to fuel your business strategy
        </p>
        <div className="flex justify-center mt-3 px-2">
          <div className="flex items-center border border-blue-500 rounded-xl overflow-hidden w-full max-w-md">
            <input
              type="text"
              placeholder="Search Reports"
              className="flex-grow px-4 py-2 text-sm focus:outline-none text-black"
            />
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors">
              <Search size={16} />
              Search Now
            </button>
          </div>
        </div>
      </div>

      {/* Images + Center Text & Input for Large Screens */}
      <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start">
        {/* Left Image */}
        <img
          className="w-full md:w-[460px] max-h-[250px] border-4 rounded-2xl border-[#DEEFFF] object-cover"
          src={bannerA}
          alt="banner-img-1"
        />

        {/* Center Column (Text + Search + Center Image) */}
        <div className="flex flex-col items-center w-full">
          {/* For large devices only: Text + Search */}
          <div className="hidden lg:block text-center mb-4">
            <p className="text-[#1C1C1C] text-sm md:text-base leading-snug">
              Global market research, industry forecasts, and custom consulting to fuel your business strategy
            </p>
            <div className="flex justify-center mt-3">
              <div className="flex items-center border border-blue-500 rounded-xl overflow-hidden w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search Reports"
                  className="flex-grow px-4 py-2 text-sm focus:outline-none text-black"
                />
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors">
                  <Search size={16} />
                  Search Now
                </button>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <img
            className="w-full md:w-[659px] border-4 rounded-2xl border-[#DEEFFF] object-cover"
            src={bannerB}
            alt="banner-img-2"
          />
        </div>

        {/* Right Image */}
        <img
          className="w-full md:w-[460px] max-h-[250px] border-4 rounded-2xl border-[#DEEFFF] object-cover"
          src={bannerC}
          alt="banner-img-3"
        />
      </div>
    </div>
  );
};

export default TopBanner;
