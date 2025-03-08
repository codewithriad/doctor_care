import Link from "next/link";

const FindADoctor = () => {
  return (
    <div className="bg-white mt-5 shadow-md rounded-md pl-8 pr-8 py-8">
      <h1 className="text-4xl leading-12 font-bold">Find A Doctor</h1>
      <form action="/" className="flex lg:flex-row flex-col justify-between items-center mt-4 overflow-hidden lg:space-y-0 space-y-4">
    
        <input
          type="text"
          name="name"
          id="name"
          className="border-[#007E85] border-2 rounded-md text-xl p-3"
          placeholder="Name"
        />
        <input
          type="text"
          name="specialty"
          className="border-[#007E85] border-2 rounded-md text-xl p-3"
          id="specialty"
          placeholder="Specialty"
        />
        <label className="flex items-center space-x-2 cursor-pointer">
          <span className="text-lg font-medium">Available:</span>
          <input
            type="checkbox"
            className="checkbox w-5 h-5 rounded-md border-2 border-[#007E85] text-[#007E85] focus:ring-2 focus:ring-[#007E85] checked:bg-[#007E85] checked:border-[#007E85]"
          />
        </label>

        <Link href="/search">
          <button className="bg-[#007E85] text-white text-xl font-medium px-8 py-4 rounded-2xl cursor-pointer">
            Search
          </button>
        </Link>
      </form>
    </div>
  );
};

export default FindADoctor;
