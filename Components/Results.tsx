const Results = () => {
  return (
    <>
      <div className="container mx-auto mt-36">
        <h2 className="text-center text-4xl leading-12 text-[#007e85] font-bold mb-8">
          Our Results in numbers
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-8">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl font-bold leading-12 text-[#007E85]">
              99%
            </h2>
            <p className="text-base font-medium">Customer satisfaction</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl font-bold leading-12 text-[#007E85]">
              15K
            </h2>
            <p className="text-base font-medium">Online Patients</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl font-bold leading-12 text-[#007E85]">
              12K
            </h2>
            <p className="text-base font-medium">Patients Recovered</p>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl font-bold leading-12 text-[#007E85]">
              240%
            </h2>
            <p className="text-base font-medium">Company growth</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
