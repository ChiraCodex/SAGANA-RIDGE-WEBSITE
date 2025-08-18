export default function About() {
  return (
    <main
      id="about"
      className="py-10 relative scroll-mt-[180px] md:pt-40 px-4 md:px-10 lg:px-20 flex flex-col md:flex-row gap-8"
    >
      {/* Left Column */}
      <div className="flex-1 flex flex-col gap-6">
        <article>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-brand-primary font-bold capitalize mb-4">
            Why Choose Sagana Ridge
          </h1>
          <p className=" ml-0 md:ml-4">
            Discover the epitome of lifestyle living at Sagana Ridge, where modern amenities meet serene surroundings. Nestled within a gated community, our serviced plots offer easy access via well-maintained murram roads and essential utilities, including water from MUWASCO and power with a transformer conveniently located at the gate. Enjoy peace of mind with a dedicated management committee ensuring security and community engagement, including a church and vibrant social amenities like a kids&apos; play area, park, gazebo, and stunning water features.
          </p>

          <ul  className="list-disc list-inside text-base md:text-lg lg:text-xl ml-0 md:ml-4 mt-8">
            <li>Seamless title transfer process within just 30 days and flexible payment plans, owning your dream home has never been easier.</li>
            <li> Choose from our beautifully designed homes, including spacious 4-bedroom villas and charming 2 and 3-bedroom bungalows, all tailored to elevate your living experience.</li>
            <li> Residential plots are available in various sizes, starting at just KSh 750,000, with an attractive deposit of KSh 140,000 and the balance payable within 90 days.</li>
            <li> Phase 1 is currently selling. </li>
            <li>Embrace a lifestyle of comfort, security, and convenience at Sagana Ridge—where your dream home awaits!</li>
          </ul>
          
        </article>

        <button className="self-start group">
          <a href="#contacts">
            <span className="uppercase bg-accent-orange hover:bg-brand-primary border-2 rounded-xl p-2 font-semibold text-white border-brand-primary">
            <a href="#contacts">
              Request More Information
            </a>
          </span>
          </a>
        </button>
      </div>

      {/* Right Column */}
      <div className="flex-1">
        <div className=" mt-4 md:mt0 p-2 md:h-80 w-full mb-6">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/_yhE9Wo-OtQ"
                title="Sample for Sagana Ridge Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
        </div>
        {/* <div className="h-48">
          <h2 className="uppercase font-bold text-xl md:text-2xl text-brand-primary mb-2">
          Meet The Team
        </h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 -mt-16 md:-mt-0 ">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className=" p-4 shadow-md rounded-xl flex flex-col">
              <div className="bg-slate-400 rounded-xl h-48 md:h-40 mb-4 w-full"></div>
              <h3 className="font-bold mb-2">Name</h3>
              <h3 className="font-bold mb-2">Title</h3>
              <button className="bg-brand-primary w-full py-2 rounded-lg hover:bg-brand-secondary transition">
                <p className="text-white font-semibold text-center">See Details</p>
              </button>
            </div>
          ))}
        </div>
        </div> */}
      </div>
    </main>
  );
}
