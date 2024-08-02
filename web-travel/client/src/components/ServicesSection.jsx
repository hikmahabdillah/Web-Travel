const ServicesSection = () => {
  return (
    <section
      id="services"
      className="px7 sm:px-10 my-24 grid place-content-center"
    >
      <header className="text-left mb-8">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Our Services
        </h1>
        <p className="text-base md:text-lg font-semibold text-gray-600">
          Top Benefits when using our services
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-content-center w-full max-w-max">
        <div className="flex flex-col justify-center items-center text-center p-4 rounded-lg shadow w-full max-w-64">
          <div className="text-4xl mb-4">👤</div>
          <h2 className="text-xl font-semibold mb-2">Best Tour Guide</h2>
          <p>
            The best tour guides have an in-depth understanding of the mountain
            terrain, trekking trails, geography, and regulations that apply in
            national parks.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center p-4 rounded-lg shadow w-full max-w-64">
          <div className="text-4xl mb-4">📋</div>
          <h2 className="text-xl font-semibold mb-2">Lots of Choices</h2>
          <p>
            We offer a wide selection of destinations and travel packages to
            suit your preferences and needs.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-center p-4 rounded-lg shadow w-full max-w-64">
          <div className="text-4xl mb-4">❤️</div>
          <h2 className="text-xl font-semibold mb-2">Secure & Trusted</h2>
          <p>
            We put safety and trust in every detail of your trip. With proven
            and trusted services, you can explore the world with peace of mind.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-4 rounded-lg shadow w-full max-w-64">
          <div className="text-4xl mb-4">🗂</div>
          <h2 className="text-xl font-semibold mb-2">Easy Booking</h2>
          <p>
            Our easy and fast booking process ensures you can plan your vacation
            without a hitch. Discover an unforgettable adventure with our
            professional and reliable services!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
