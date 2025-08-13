import InteractiveMap from "./InteractiveMap";

export default function Plots() {
  // Example featured plots (coordinates are just relative percentages for demo)
  

  return (
    <main
      id="plots"
      className="relative flex flex-col lg:flex-row gap-8 min-h-[80vh] px-4 md:px-10 lg:px-20 pt-20"
    >
      {/* Plot Listings */}
      <div className="flex-1 flex flex-col gap-8">
        <h2 className="uppercase font-bold text-xl md:text-2xl mb-2 text-brand-primary">
          Available Plots
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Listings */}
          <div className="flex-1">
            <p className="mb-2">Listings of residential and commercial plots:</p>
            <ul className="list-disc list-inside">
              <li>1/8-Acre Residential Plots @ KSh.750,000</li>
              <li>6 Commercial Plots @ KSh.900,000</li>
            </ul>
          </div>

          {/* Payment Plans */}
          <div className="flex-1">
            <h3 className="uppercase font-bold text-lg md:text-xl mb-2 text-brand-primary">
              Payment Plans
            </h3>
            <p className="mb-2">
              Sagana Ridge offers aspiring homeowners a flexible payment plan
            </p>
            <p className="mb-2">Residential Plots Payment Plans:</p>
            <ul className="list-disc list-inside">
              <li>
                Limited Time Offer @ KSh.700,000 with KSh.140,000 deposit with a
                balance payment period of <strong>90 days</strong>
              </li>
              <li>1/8 Acre serviced plots @ KSh.750,000</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 mt-8 lg:mt-0 relative">
        <h2 className="uppercase font-bold text-xl md:text-2xl mb-2 text-brand-primary">
          Plot Locations and Sizes
        </h2>
        <div className="w-full h-68 md:h-80 lg:h-[600px] bg-accent-gray shadow-sm relative z-10 rounded-lg overflow-hidden">
          <InteractiveMap />
        </div>
      </div>
    </main>
  );
}
