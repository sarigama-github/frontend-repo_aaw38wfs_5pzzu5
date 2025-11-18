import { Beaker, Boxes, ClipboardCheck, Cog } from 'lucide-react'

export default function WhiteLabel(){
  return (
    <section id="white-label" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">White-label Manufacturing</h2>
            <p className="mt-4 text-slate-700">From concept to shelf-ready products. We develop formulas, source raw materials, and manufacture client-branded detergents and chemical products at scale.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
              <div className="p-5 bg-white rounded-xl border border-slate-200 flex items-start gap-3"><Beaker className="w-5 h-5 text-blue-600"/> R&D and formula development</div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 flex items-start gap-3"><Boxes className="w-5 h-5 text-blue-600"/> Client-specific packaging & labeling</div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 flex items-start gap-3"><Cog className="w-5 h-5 text-blue-600"/> Automated filling and batching</div>
              <div className="p-5 bg-white rounded-xl border border-slate-200 flex items-start gap-3"><ClipboardCheck className="w-5 h-5 text-blue-600"/> Regulatory & documentation support</div>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        </div>
      </div>
    </section>
  )
}
