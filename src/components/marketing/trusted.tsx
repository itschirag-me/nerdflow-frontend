const MarketingTrusted = () => {
  return (
    <div className="flex flex-col gap-10 my-20 container">
      <h1 className="text-center text-lg font-medium text-gray-500">
        Trusted by big companies over 10+ countries
      </h1>
      <div className="flex flex-row items-center flex-wrap justify-around gap-14">
        <img src="/logo-1.svg" className="w-1/4 lg:w-[calc(100%/9)]" alt="Logo-1" />
        <img src="/logo-3.svg" className="w-1/4 lg:w-[calc(100%/9)]" alt="Logo-3" />
        <img src="/logo-2.svg" className="w-1/4 lg:w-[calc(100%/9)]" alt="Logo-2" />
        <img src="/logo-4.svg" className="w-1/4 lg:w-[calc(100%/9)]" alt="Logo-4" />
      </div>
    </div>
  );
};

export default MarketingTrusted;
