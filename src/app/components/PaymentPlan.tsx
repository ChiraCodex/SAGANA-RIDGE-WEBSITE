import FAQ from "./FAQ";

export default function PaymentPlan() {
  return (
    <main className="px-4 md:px-10 lg:px-20 my-20 flex flex-col gap-12">
      {/* Transfer Process */}
      <div className="w-full">
        <h2 className="uppercase font-bold text-2xl md:text-3xl mb-4 text-brand-primary">
          Step-by-Step Guide on the Title Transfer Process
        </h2>
        <p className="mb-6 text-base md:text-lg">
          This straightforward process ensures that you can confidently secure
          your property with minimal hassle, allowing you to focus on building
          your dream home at Sagana Ridge.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-accent-gray rounded-xl p-4">
            <p className="text-xl font-bold mb-2">1. Initial Agreement</p>
            <span>
              Upon selecting your plot, sign a purchase agreement outlining
              the terms and conditions.
            </span>
          </div>

          {/* Step 2 */}
          <div className="bg-accent-gray rounded-xl p-4">
            <p className="text-xl font-bold mb-2">2. Deposit Payment</p>
            <span>
              Make the initial deposit (e.g., KSh 140,000) as specified in the
              payment plan to secure your plot.
            </span>
          </div>

          {/* Step 3 */}
          <div className="bg-accent-gray rounded-xl p-4">
            <p className="text-xl font-bold mb-2">3. Document Submission</p>
            <span>Provide necessary documents, including:</span>
            <ul className="list-disc list-inside mt-2">
              <li>A copy of ID or passport</li>
              <li>KRA PIN certificate</li>
              <li>Proof of deposit payment</li>
            </ul>
          </div>

          {/* Step 4 */}
          <div className="bg-accent-gray rounded-xl p-4">
            <p className="text-xl font-bold mb-2">4. Verification Process</p>
            <span>
              Make the initial deposit of 20% as specified in the payment plan
              to secure your plot.
            </span>
          </div>

          {/* Step 5 */}
          <div className="bg-accent-gray rounded-xl p-4">
            <p className="text-xl font-bold mb-2">5. Submission to Land Registry</p>
            <span>
              We will submit the signed title deed and all required documents
              to the local land registry for processing.
            </span>
          </div>

          {/* Step 6 */}
          <div className="bg-accent-gray rounded-xl p-4">
            <p className="text-xl font-bold mb-2">6. Title Registration</p>
            <span>
              The land registry will process the title transfer, which typically
              takes up to 30 days. You will receive updates during this period.
            </span>
          </div>

          {/* Step 7 */}
          <div className="bg-accent-gray rounded-xl p-4">
            <p className="text-xl font-bold mb-2">7. Receive Your Title Deed</p>
            <span>
              Upon successful registration, you will receive your official title
              deed, confirming your ownership of the plot.
            </span>
          </div>

          {/* Step 8 */}
          <div className="bg-accent-gray rounded-xl p-4">
            <p className="text-xl font-bold mb-2">8. Welcome to the Community</p>
            <span>
              Once you have your title deed, you're officially a part of the
              Sagana Ridge community. Enjoy your new lifestyle!
            </span>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="w-full">
        <h2 className="uppercase font-bold text-2xl md:text-3xl mb-4 text-brand-primary">
          Frequently Asked Questions
        </h2>
        <FAQ />
      </div>
    </main>
  );
}
