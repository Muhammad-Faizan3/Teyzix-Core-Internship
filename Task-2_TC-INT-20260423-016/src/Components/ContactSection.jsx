function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#020817] text-white py-20 px-4 sm:px-6 lg:px-16">
      
      <div className="absolute inset-0 opacity-[0.07]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full border border-green-500/10" />
        <div className="absolute w-[90vw] h-[90vw] max-w-[900px] max-h-[900px] rounded-full border border-green-500/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Let&apos;s Build Something{" "}
            <span className="text-[#00e676]">Together</span>
          </h2>

          <p className="mt-5 text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to start your project? Reach out and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-start">
          
          <div className="space-y-6">
            
            <div className="rounded-2xl border border-[#0b3b33] bg-[#071225]/90 p-6 shadow-lg cursor-pointer hover:border-[#00e676] transition">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                Email
              </p>
              <h3 className="mt-2 text-lg md:text-xl font-semibold">
                contact@teyzixcore.com
              </h3>
            </div>

            <div className="rounded-2xl border border-[#0b3b33] bg-[#071225]/90 p-6 shadow-lg cursor-pointer hover:border-[#00e676] transition">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                WhatsApp
              </p>
              <h3 className="mt-2 text-lg md:text-xl font-semibold">
                +92 371 469 9788
              </h3>
            </div>

            <div className="rounded-2xl border border-[#0b3b33] bg-[#071225]/90 p-6 shadow-lg">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-5">
                Follow Us
              </p>

              <div className="flex flex-wrap gap-3">
                <button className="rounded-xl border border-[#12443a] bg-[#030712] px-5 py-3 cursor-pointer transition hover:border-[#00e676]">
                  LinkedIn
                </button>

                <button className="rounded-xl border border-[#12443a] bg-[#030712] px-5 py-3 cursor-pointer transition hover:border-[#00e676]">
                  Instagram
                </button>

                <button className="rounded-xl border border-[#12443a] bg-[#030712] px-5 py-3 cursor-pointer transition hover:border-[#00e676]">
                  Threads
                </button>

                <button className="rounded-xl border border-[#12443a] bg-[#030712] px-5 py-3 cursor-pointer transition hover:border-[#00e676]">
                  Facebook
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-[#0b3b33] bg-[#071225]/90 p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-3">Response Time</h3>

              <p className="text-gray-400 leading-8 text-sm md:text-base">
                We respond to all inquiries within{" "}
                <span className="font-semibold text-[#00e676]">24 hours</span>.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#0b3b33] bg-[#071225]/95 p-6 md:p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-gray-400">
                    First Name
                  </label>

                  <input className="w-full rounded-xl border border-[#12443a] bg-[#020617] px-4 py-4 outline-none focus:border-[#00e676] cursor-text" />
                </div>

                <div>
                  <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-gray-400">
                    Last Name
                  </label>

                  <input className="w-full rounded-xl border border-[#12443a] bg-[#020617] px-4 py-4 outline-none focus:border-[#00e676] cursor-text" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-gray-400">
                  Email
                </label>

                <input
                  type="email"
                  className="w-full rounded-xl border border-[#12443a] bg-[#020617] px-4 py-4 outline-none focus:border-[#00e676] cursor-text"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-gray-400">
                  Service Needed
                </label>

                <select className="w-full rounded-xl border border-[#12443a] bg-[#020617] px-4 py-4 outline-none focus:border-[#00e676] cursor-pointer">
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>UI/UX Design</option>
                  <option>SEO Optimization</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-gray-400">
                  Budget Range
                </label>

                <select className="w-full rounded-xl border border-[#12443a] bg-[#020617] px-4 py-4 outline-none focus:border-[#00e676] cursor-pointer">
                  <option>Under $1,000</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm uppercase tracking-[0.2em] text-gray-400">
                  Project Details
                </label>

                <textarea
                  rows={5}
                  className="w-full resize-none rounded-xl border border-[#12443a] bg-[#020617] px-4 py-4 outline-none focus:border-[#00e676] cursor-text"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#00d84f] py-4 text-lg font-bold text-black cursor-pointer transition hover:bg-[#00ff66]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
}

export default ContactSection;