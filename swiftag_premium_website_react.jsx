export default function SwiftagWebsite() {
  return (
    <div className="min-h-screen bg-white text-[#0E1B15] font-sans overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-green-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-emerald-300/20 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F6B3E] via-[#1FA971] to-[#7ED957]" />
            <span className="text-2xl font-bold tracking-tight">Swiftag</span>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-700">
            <a href="#home" className="hover:text-[#0F6B3E] transition">Home</a>
            <a href="#about" className="hover:text-[#0F6B3E] transition">About</a>
            <a href="#services" className="hover:text-[#0F6B3E] transition">Services</a>
            <a href="#faq" className="hover:text-[#0F6B3E] transition">FAQ</a>
            <a href="#contact" className="hover:text-[#0F6B3E] transition">Contact</a>
          </nav>

          <button className="hidden md:block px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[#0F6B3E] via-[#1FA971] to-[#7ED957] hover:scale-105 transition-all duration-300 shadow-lg shadow-green-200">
            Start a Project
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative max-w-7xl mx-auto px-6 pt-28 pb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#1FA971] mb-6">
            Africa’s Next Premium Software Company
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8">
            Building Digital Systems That Scale Businesses Into The Future
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-10">
            Swiftag develops enterprise-grade mobile applications, web platforms,
            automation systems, and scalable digital solutions for startups,
            mining companies, fintech brands, and modern businesses.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-[#0F6B3E] via-[#1FA971] to-[#7ED957] hover:scale-105 transition-all duration-300 shadow-xl shadow-green-200">
              Start Your Project
            </button>

            <button className="px-8 py-4 rounded-full border border-[#0F6B3E] text-[#0F6B3E] font-semibold hover:bg-[#0F6B3E] hover:text-white transition-all duration-300">
              Explore Services
            </button>
          </div>
        </div>

        {/* Floating Mockups */}
        <div className="relative h-[600px] flex items-center justify-center">
          <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#7ED957]/30 to-[#0F6B3E]/20 blur-3xl animate-pulse" />

          <div className="relative w-[500px] h-[500px]">
            <div className="absolute top-0 left-10 w-72 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-2xl p-6 hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500">Analytics</p>
                  <h3 className="text-2xl font-bold">+84%</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0F6B3E] to-[#7ED957]" />
              </div>
              <div className="space-y-3">
                <div className="h-3 rounded-full bg-green-100" />
                <div className="h-3 rounded-full bg-green-200 w-5/6" />
                <div className="h-3 rounded-full bg-green-300 w-3/4" />
              </div>
            </div>

            <div className="absolute bottom-10 right-0 w-80 rounded-3xl bg-white/80 backdrop-blur-xl border border-white shadow-2xl p-6 hover:translate-y-2 transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500">Automation</p>
                  <h3 className="text-2xl font-bold">Enterprise AI</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1FA971] to-[#7ED957]" />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="h-20 rounded-2xl bg-green-100" />
                <div className="h-20 rounded-2xl bg-green-200" />
                <div className="h-20 rounded-2xl bg-green-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Industries We Build For</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We create scalable systems tailored for modern African industries and future-focused businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Startups",
            "Mining",
            "Fintech",
            "Enterprise Businesses",
          ].map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl mb-6 bg-gradient-to-br from-[#0F6B3E] via-[#1FA971] to-[#7ED957]" />
              <h3 className="text-2xl font-bold mb-3">{item}</h3>
              <p className="text-gray-600">
                Powerful digital infrastructure engineered for growth and productivity.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-[#F6F9F7] py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#1FA971] mb-4">
              About Swiftag
            </p>

            <h2 className="text-5xl font-black leading-tight mb-8">
              More Than Development — We Build Long-Term Digital Ecosystems
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Swiftag is a black-owned technology company focused on building scalable systems that empower businesses across Africa.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We don’t just create apps and websites. We engineer digital ecosystems designed to improve operations, increase productivity, and scale with your business long-term.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <h3 className="text-3xl font-bold text-[#0F6B3E] mb-2">10+</h3>
                <p className="text-gray-600">Digital Solutions</p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-lg">
                <h3 className="text-3xl font-bold text-[#0F6B3E] mb-2">100%</h3>
                <p className="text-gray-600">Custom Built Systems</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7ED957]/20 to-[#0F6B3E]/10 blur-3xl rounded-full" />
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl bg-white p-8 border border-white">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
                alt="Tech Team"
                className="rounded-3xl object-cover h-[500px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#1FA971] mb-4">
            Services
          </p>

          <h2 className="text-5xl font-black mb-6">
            Premium Digital Solutions
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We build future-ready software systems designed for scale, efficiency, and long-term business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Mobile App Development",
            "Web Development",
            "UI/UX Design",
            "SaaS Platforms",
            "Automation Systems",
            "API Integrations",
          ].map((service, index) => (
            <div
              key={index}
              className="group rounded-[32px] bg-white border border-gray-100 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl mb-8 bg-gradient-to-br from-[#0F6B3E] via-[#1FA971] to-[#7ED957] group-hover:scale-110 transition-all duration-300" />

              <h3 className="text-2xl font-bold mb-4">{service}</h3>

              <p className="text-gray-600 leading-relaxed">
                Enterprise-grade solutions engineered for scalability, performance, and long-term digital transformation.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#F6F9F7] py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#1FA971] mb-4">
              FAQ
            </p>

            <h2 className="text-5xl font-black mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              "How long does development take?",
              "Do you build fully custom systems?",
              "Can Swiftag modernize existing platforms?",
              "Do you offer support after launch?",
            ].map((question, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white border border-gray-100 p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{question}</h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes. Swiftag builds scalable, enterprise-grade systems tailored to your business needs with long-term growth and performance in mind.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-28">
        <div className="rounded-[40px] overflow-hidden bg-gradient-to-r from-[#0F6B3E] via-[#1FA971] to-[#7ED957] p-[1px] shadow-2xl">
          <div className="bg-white rounded-[40px] p-10 lg:p-20 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm font-semibold text-[#1FA971] mb-4">
                Contact
              </p>

              <h2 className="text-5xl font-black leading-tight mb-8">
                Let’s Build Something Powerful.
              </h2>

              <div className="space-y-6 text-lg">
                <div>
                  <p className="text-gray-500 mb-1">Email</p>
                  <p className="font-semibold">info@swiftag.co.za</p>
                </div>

                <div>
                  <p className="text-gray-500 mb-1">Phone</p>
                  <p className="font-semibold">0726559998</p>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none focus:border-[#1FA971]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none focus:border-[#1FA971]"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your project"
                className="w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none focus:border-[#1FA971]"
              />

              <button className="w-full py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-[#0F6B3E] via-[#1FA971] to-[#7ED957] hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-green-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold mb-2">Swiftag</h3>
            <p className="text-gray-500">Africa’s Next Premium Software Company</p>
          </div>

          <p className="text-gray-500 text-sm">
            © 2024 Swiftag. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
