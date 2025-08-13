export default function Features() {
  return (
    <main
      id="features"
      className="relative min-h-[100vh] flex flex-col lg:flex-row gap-8 lg:gap-10 pt-32 px-4 md:px-10 lg:px-20 z-10"
    >
      {/* Why Choose Sagana Ridge */}
      <div className="flex-1 lg:w-1/4 flex flex-col gap-4 px-4 py-6 bg-accent-brown text-white rounded-lg">
        <p className="text-3xl md:text-4xl lg:text-5xl mb-2 font-bold">
          Why Choose Sagana Ridge
        </p>
        <div>
          <h1 className="text-lg md:text-xl font-bold mb-2">Features</h1>
          <ul className="list-disc list-inside text-sm md:text-base">
            <li>Located 10Km from Murang&apos;a Town</li>
            <li>Affordable Prices from KSh 750,000 per plot</li>
            <li>Ready title deeds</li>
            <li>Flexible payment plans</li>
          </ul>
        </div>
      </div>

      {/* Amenities */}
      <div className="flex-1 lg:w-1/4 px-4 py-6 bg-accent-gray rounded-lg">
        <h1 className="text-lg md:text-xl font-bold mb-2">Amenities</h1>
        <ul className="list-disc list-inside text-sm md:text-base">
          <li>Secure area</li>
          <li>Kids&apos; Playground</li>
          <li>Landscaping</li>
          <li>Access to Water & Electricity</li>
          <li>Well Maintained Murram Road</li>
        </ul>
      </div>

      {/* Feature Highlight Section */}
      <div className="flex-1 lg:w-1/2 bg-accent-orange rounded-lg relative h-64 md:h-80 lg:h-auto lg:min-h-[90vh]">
        {/* Decorative Box */}
        <div className="bg-yellow-300 w-full h-48 md:h-64 lg:w-2/3 lg:h-2/3 absolute bottom-4 left-0 lg:left-16 rounded-lg opacity-80"></div>
      </div>
    </main>
  );
}
