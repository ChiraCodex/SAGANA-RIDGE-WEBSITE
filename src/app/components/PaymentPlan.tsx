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
          {/* Steps 1-8 */}
          {[
            {
              title: "1. Initial Agreement",
              desc: "Upon selecting your plot, sign a purchase agreement outlining the terms and conditions."
            },
            {
              title: "2. Deposit Payment",
              desc: "Make the initial deposit (e.g., KSh 140,000) as specified in the payment plan to secure your plot."
            },
            {
              title: "3. Document Submission",
              desc: "Provide necessary documents, including:",
              list: ["A copy of ID or passport", "KRA PIN certificate", "Proof of deposit payment"]
            },
            {
              title: "4. Verification Process",
              desc: "Make the initial deposit of 20% as specified in the payment plan to secure your plot."
            },
            {
              title: "5. Submission to Land Registry",
              desc: "We will submit the signed title deed and all required documents to the local land registry for processing."
            },
            {
              title: "6. Title Registration",
              desc: "The land registry will process the title transfer, which typically takes up to 30 days. You will receive updates during this period."
            },
            {
              title: "7. Receive Your Title Deed",
              desc: "Upon successful registration, you will receive your official title deed, confirming your ownership of the plot."
            },
            {
              title: "8. Welcome to the Community",
              desc: "Once you have your title deed, you&apos;re officially a part of the Sagana Ridge community. Enjoy your new lifestyle!"
            }
          ].map((step, idx) => (
            <div key={idx} className="bg-accent-gray rounded-xl p-4">
              <p className="text-xl font-bold mb-2">{step.title}</p>
              <span>{step.desc}</span>
              {step.list && (
                <ul className="list-disc list-inside mt-2">
                  {step.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
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
