export default function Contacts() {
  return (
    <main id="contacts" className="min-h-[100vh] pt-40 px-4 md:px-10 lg:px-20">
      <i className="text-4xl md:text-5xl text-accent-brown capitalize block mb-10 text-center">
        Contact Us
      </i>

      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Contact Info */}
        <div className="flex-1 grid gap-4">
          <p className="text-lg md:text-xl">Please contact us by phone or email</p>
          <div className="grid gap-2 text-base md:text-lg">
            <span>+254 712 345 678</span>
            <span>+254 700 123 456</span>
            <a href="mailto:sales@saganaridge.com" className="text-blue-600 underline">
              sales@saganaridge.com
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Message Us</h1>
          <p className="mb-4">Please fill out the form below to get in touch.</p>
          <form className="flex flex-col gap-4" action="#">
            <label className="grid gap-1" htmlFor="name">
              <span>Full Name</span>
              <input
                className="border-2 border-accent-gray w-full md:w-3/4 rounded-xl p-2"
                type="text"
                placeholder="Your full name"
                required
              />
            </label>

            <label className="grid gap-1" htmlFor="email">
              <span>Email</span>
              <input
                className="border-2 border-accent-gray w-full md:w-3/4 rounded-xl p-2"
                type="email"
                placeholder="Your email address"
                required
              />
            </label>

            <label className="grid gap-1" htmlFor="phone">
              <span>Phone Number</span>
              <input
                className="border-2 border-accent-gray w-full md:w-3/4 rounded-xl p-2"
                type="text"
                placeholder="(+)____"
                required
              />
            </label>

            <label className="grid gap-1" htmlFor="message">
              <span>Message</span>
              <textarea
                className="border-2 border-accent-gray w-full md:w-3/4 rounded-xl p-2"
                name="message"
                id="message"
                cols={30}
                rows={5}
                placeholder="Your message here..."
              ></textarea>
            </label>

            <button
              type="submit"
              className="w-full md:w-1/3 bg-brand-primary text-white rounded-xl p-3 mt-4 hover:bg-brand-secondary transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
