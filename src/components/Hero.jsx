import { ArrowRight, ShieldCheck, Factory, Award } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 opacity-30" style={{backgroundImage:'radial-gradient(circle at 20% 10%, #3b82f6 0, transparent 30%), radial-gradient(circle at 80% 20%, #22d3ee 0, transparent 30%), radial-gradient(circle at 50% 80%, #8b5cf6 0, transparent 30%)'}}></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-sm text-blue-200 mb-4">
              <ShieldCheck className="w-4 h-4" /> 17 years of trusted manufacturing
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Professional Cleaning Consumables & Equipment
            </h1>
            <p className="mt-6 text-lg text-blue-100 max-w-xl">
              Family-owned European manufacturer, importer and distributor. Automated production, inorganic chemistry expertise, and modernized facilities under EU projects.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#products" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md">
                Explore Products
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-2"><Factory className="w-5 h-5"/> Automated line</div>
              <div className="flex items-center gap-2"><Award className="w-5 h-5"/> EU modernization</div>
              <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5"/> ISO mindset</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur rounded-xl p-4 ring-1 ring-white/20">
              <p className="text-sm">Modern mixing & filling equipment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
