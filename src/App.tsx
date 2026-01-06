import { Phone, Mail, MessageCircle, CheckCircle, Star, Flame, Droplet, Wrench, Shield } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const projectImages = useMemo(
    () => [
      {
        src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop',
        alt: 'Boiler installation project',
      },
      {
        src: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1200&h=800&fit=crop',
        alt: 'Heating system repair',
      },
      {
        src: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=1200&h=800&fit=crop',
        alt: 'Bathroom plumbing work',
      },
    ],
    []
  );

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveProjectIndex((current) => (current + 1) % projectImages.length);
    }, 4500);

    return () => window.clearInterval(id);
  }, [projectImages.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry. We will contact you shortly.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const phoneNumberDisplay = '01 234 5678';
  const phoneNumberTel = '012345678';
  const facebookUrl = 'https://www.facebook.com/citywideheatingsolutions/';
  const whatsappNumber = '353123456789';
  const whatsappMessage = encodeURIComponent("Hi, I'm interested in heating or plumbing services.");

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-900 text-white py-4 sticky top-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Flame size={28} className="text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Citywide Heating & Plumbing</h1>
            </div>
            <a
              href={`tel:${phoneNumberTel}`}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors font-semibold text-sm sm:text-base"
            >
              <Phone size={18} />
              <span className="hidden sm:inline">Call Now</span>
            </a>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="max-w-2xl">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Professional Heating & Plumbing Services You Can Trust
              </h2>
              <p className="text-xl sm:text-2xl text-gray-300 mb-10 leading-relaxed">
                RGI registered installers providing expert heating, plumbing, and gas services for your home or business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors text-center shadow-xl"
                >
                  Get a Free Quote
                </a>
                <a
                  href={`tel:${phoneNumberTel}`}
                  className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors text-center shadow-xl"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/10 rounded-2xl blur-2xl" aria-hidden="true"></div>
              <div className="relative w-full max-w-2xl mx-auto rounded-2xl border border-white/10 shadow-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-16">
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 flex items-center justify-center">
                    <Flame size={80} className="text-white" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 flex items-center justify-center">
                    <Droplet size={80} className="text-white" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 flex items-center justify-center">
                    <Wrench size={80} className="text-white" />
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 flex items-center justify-center">
                    <Shield size={80} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Recent projects" className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 mb-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Recent Projects</h3>
              <p className="text-gray-600 mt-1">A quick look at work we’ve completed</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <div className="relative aspect-[3/2] sm:aspect-[16/7]">
              {projectImages.map((img, index) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    index === activeProjectIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              ))}
            </div>

            <div className="flex justify-center gap-2 py-3" aria-hidden="true">
              {projectImages.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full ${
                    index === activeProjectIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Service area" className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Local, reliable service</h3>
              <p className="text-gray-700 mt-3 leading-relaxed max-w-2xl">
                We provide heating and plumbing services for customers across the city and surrounding areas. Not sure if we cover your location? Give us a quick call and we'll confirm availability.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <a
                  href={`tel:${phoneNumberTel}`}
                  className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                >
                  <Phone size={18} />
                  <span>Call {phoneNumberDisplay}</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                >
                  Get a Free Quote
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-gray-900">What you can expect</h4>
                <ul className="mt-4 space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-blue-600 mt-0.5" />
                    <span>Clear, friendly communication from first call to completion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-blue-600 mt-0.5" />
                    <span>Tidy workmanship and respect for your property</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-blue-600 mt-0.5" />
                    <span>RGI registered and fully insured for your peace of mind</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center mb-14">
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl border border-gray-200 p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center gap-3">
                    <Flame size={48} className="text-blue-600" />
                    <span className="text-sm font-semibold text-gray-700">Heating</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center gap-3">
                    <Droplet size={48} className="text-blue-600" />
                    <span className="text-sm font-semibold text-gray-700">Plumbing</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center gap-3">
                    <Wrench size={48} className="text-blue-600" />
                    <span className="text-sm font-semibold text-gray-700">Repairs</span>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center gap-3">
                    <Shield size={48} className="text-blue-600" />
                    <span className="text-sm font-semibold text-gray-700">Gas Safety</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                From boiler installations and repairs to emergency plumbing and gas safety checks, we deliver professional, reliable service with clear communication and guaranteed quality.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Boiler Installation & Replacement
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Expert boiler installations and replacements by RGI registered engineers. We fit all major brands with full warranty and certification.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Heating System Repairs
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Fast and reliable heating repairs including boiler breakdowns, radiator issues, and system faults. Emergency callouts available.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Plumbing Services
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Complete plumbing solutions from leak repairs and pipe installations to bathroom fitting and water heater services.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Gas Safety & Servicing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Annual gas safety checks, boiler servicing, and gas appliance installations. All work certified and fully compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center mb-14">
            <div className="lg:col-span-7">
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                RGI registered installers with years of experience. We focus on quality workmanship, safety compliance, and reliable service you can trust. Clear quotes and professional results guaranteed.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl border border-gray-200 p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <Shield size={120} className="mx-auto mb-6" />
                  <p className="text-2xl font-bold">RGI Registered</p>
                  <p className="text-blue-100 mt-2">Professional & Certified</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-600 text-white p-4 rounded-full mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">RGI Registered</h3>
              <p className="text-gray-700">Fully qualified and certified gas installers</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-600 text-white p-4 rounded-full mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Brands</h3>
              <p className="text-gray-700">We install and service all major heating brands</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-600 text-white p-4 rounded-full mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Honest Pricing</h3>
              <p className="text-gray-700">Transparent quotes with no hidden costs</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-600 text-white p-4 rounded-full mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Emergency</h3>
              <p className="text-gray-700">Emergency callouts for heating and plumbing</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="How we work" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How We Work</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-700 mt-5 max-w-3xl mx-auto text-lg leading-relaxed">
              A simple, reliable process—so you know what’s happening at every step.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="bg-blue-600 text-white p-3 rounded-lg inline-flex mb-4">
                <CheckCircle size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">1) Quick details</h3>
              <p className="text-gray-700 leading-relaxed">Tell us what you need help with and share any photos if you have them.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="bg-blue-600 text-white p-3 rounded-lg inline-flex mb-4">
                <CheckCircle size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">2) Inspection</h3>
              <p className="text-gray-700 leading-relaxed">We assess the issue and recommend the most practical, lasting fix.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="bg-blue-600 text-white p-3 rounded-lg inline-flex mb-4">
                <CheckCircle size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3) Clear quote</h3>
              <p className="text-gray-700 leading-relaxed">You get a clear quote and timeline—no surprises.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <div className="bg-blue-600 text-white p-3 rounded-lg inline-flex mb-4">
                <CheckCircle size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">4) Complete & tidy</h3>
              <p className="text-gray-700 leading-relaxed">We complete the work, clean up, and make sure you’re happy with the finish.</p>
            </div>
          </div>

          <div className="mt-14 max-w-6xl mx-auto bg-gray-900 text-white rounded-2xl p-8 sm:p-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <h3 className="text-2xl font-bold">Need an emergency callout?</h3>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  For boiler breakdowns, heating failures, or plumbing emergencies, call us now for immediate assistance.
                </p>
              </div>
              <div className="md:col-span-4 flex md:justify-end">
                <a
                  href="#contact"
                  className="w-full md:w-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-xl"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Frequently asked questions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">FAQs</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you do small repairs as well as full replacements?</h3>
              <p className="text-gray-700 leading-relaxed">Yes—many jobs are simple repairs. We’ll recommend the most sensible option for your situation.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How quickly can you come out?</h3>
              <p className="text-gray-700 leading-relaxed">It depends on the job and current schedule. Call us and we’ll confirm the soonest available time.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How often should gutters be cleaned?</h3>
              <p className="text-gray-700 leading-relaxed">A good rule of thumb is at least once or twice per year, and more often if you have nearby trees.</p>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What details help you quote accurately?</h3>
              <p className="text-gray-700 leading-relaxed">Your location, a short description of the issue, and photos of the roofline/gutters (if possible).</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href={`tel:${phoneNumberTel}`}
              className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              <Phone size={18} />
              <span>Call {phoneNumberDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center mb-14">
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border border-gray-200 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex gap-2 justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={48} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-gray-900">5-Star Reviews</p>
                  <p className="text-gray-600 mt-2">Trusted by our customers</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                We pride ourselves on excellent customer service, professional workmanship, and reliable heating and plumbing solutions that stand the test of time.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Excellent service from start to finish. New boiler installed professionally with full certification. The engineer was knowledgeable and tidy. Highly recommended."
              </p>
              <p className="font-bold text-gray-900">Sarah M.</p>
              <p className="text-sm text-gray-500">Google Review</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Called them for an emergency heating breakdown. They arrived within 2 hours and had us up and running the same day. Fair pricing and excellent work."
              </p>
              <p className="font-bold text-gray-900">James T.</p>
              <p className="text-sm text-gray-500">Google Review</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Professional plumbing service for our bathroom renovation. Clean work, on time, and within budget. Will definitely use them again."
              </p>
              <p className="font-bold text-gray-900">Linda R.</p>
              <p className="text-sm text-gray-500">Google Review</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Request a Free Quote
            </h2>
            <p className="text-xl text-gray-300">Get in touch today for a no-obligation quote</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center mb-14">
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl border border-white/10 p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <Phone size={80} className="mx-auto mb-6" />
                  <p className="text-2xl font-bold">Get In Touch</p>
                  <p className="text-blue-100 mt-2">We're here to help</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg text-gray-200 leading-relaxed max-w-3xl">
                Whether it's a new boiler installation, heating repair, or plumbing work, get in touch and we'll provide a free, no-obligation quote.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href={`tel:${phoneNumberTel}`}
                  className="flex items-center gap-4 text-lg hover:text-blue-400 transition-colors"
                >
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-300">{phoneNumberDisplay}</p>
                  </div>
                </a>

                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:text-blue-400 transition-colors"
                >
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Facebook</p>
                    <p className="text-gray-300 break-all">{facebookUrl}</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-xl"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">Citywide Heating & Plumbing Solutions</h3>
            <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
              Your trusted RGI registered heating and plumbing specialists. Professional service, quality workmanship, and complete customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-gray-300 mb-4">
              <a
                href={`tel:${phoneNumberTel}`}
                className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Phone size={18} />
                <span>{phoneNumberDisplay}</span>
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail size={18} />
                <span className="break-all">{facebookUrl}</span>
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Citywide Heating & Plumbing Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}

export default App;
