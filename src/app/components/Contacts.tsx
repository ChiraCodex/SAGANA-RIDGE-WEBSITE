export default function Contacts() {
  return (
    <main id="contacts" className="min-h-[100vh] scroll-mt-[200px] px-4 md:px-10 lg:px-20 mb-4">
      <h2 className="uppercase font-bold text-2xl md:text-3xl mb-6 text-brand-primary text-left">
        contact us
      </h2>

      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Contact Info */}
        <div className="flex-1 grid gap-2">
          <p className="text-xl">We  are here to help you with any questions or inquiries you may have about Sagana Ridge.<br/> Please feel free to reach out to us using the information below:</p>
          <div className="grid gap-2 text-base md:text-lg">
            <p className="font-bold text-xl text-brand-primary">General Inquiries</p>
            <span className="-mb-4 font-bold">Email</span>
             <a href="mailto:saganaridgelimited@gmail.com" className="hover:text-brand-secondary">
              <i>saganaridgelimited@gmail.com</i>
            </a>
            <div className="grid">
              <p className="font-bold">Phone</p>
            <span>+254 706 380 244</span>
            </div>
            <hr/>
            <div className="grid">
              <p className="font-bold">Office Hours</p>
            <span>Monday to Friday: 8:30 AM - 5:00 PM</span>
            <span>Saturday: 9:00 AM - 1:00 PM</span>
            <span>Sunday: Closed</span>
            </div>
            <hr/>
            <div className="grid">
              <p className="font-bold">Write to Us</p>              
            <span>Sagana Ridge Development Office
</span>
            <span>P.O BOX 2078 - 10400,<br/>Nanyuki</span>
            
            </div>
           
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <h1 className=" text-brand-primary text-2xl md:text-3xl font-bold mb-2">Message Us</h1>
          <p className="mb-4">Please fill out the form below to get in touch.</p>
          <form className="flex flex-col gap-4" action="POST">
            <label className="grid gap-1" id="name">
              <span>Full Name</span>
              <input
                className="border-2 border-accent-gray w-full md:w-3/4 rounded-xl p-2"
                type="text"
                placeholder="Your full name"
                required
              />
            </label>

            <label className="grid gap-1" id="email">
              <span>Email</span>
              <input
                className="border-2 border-accent-gray w-full md:w-3/4 rounded-xl p-2"
                type="email"
                placeholder="Your email address"
                required
              />
            </label>

            <label className="grid gap-1"  id="phone">
              <span>Phone Number</span>
              <input
                className="border-2 border-accent-gray w-full md:w-3/4 rounded-xl p-2"
                type="text"
                placeholder="(+)____"
                required
              />
            </label>

            <label className="grid gap-1" id="message">
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
            </form>
            <button
              type="submit"
              className="w-full md:w-1/3 bg-brand-primary text-white rounded-xl p-3 mt-4 hover:bg-brand-secondary transition"
            >
              Send Message
            </button>
          
        </div>
      </div>
    </main>
  );
}
