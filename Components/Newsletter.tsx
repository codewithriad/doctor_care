const Newsletter = () => {
  return (
    <>
      <section className="p-20">
        <header>
          <article className="mb-4">
            <h2 className="text-3xl font-bold text-[#007e85] text-center">
              Subscribe to our newsletter
            </h2>
          </article>
        </header>
        <div className="flex justify-between items-center max-w-[560px] gap-6">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email address"
            className="w-[420px] h-[54px] px-6 py-[14px] rounded-3xl bg-white focus:outline-none cursor-auto"
          />
          <button
            type="submit"
            className="px-6 py-[14px] rounded-3xl bg-[#007e85] text-white text-base cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
