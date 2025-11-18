import { FlaskConical, Droplets, Package, Shield, Wind, Hotel } from 'lucide-react'

export default function Products(){
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Key Products</h2>
          <p className="mt-4 text-slate-600">Engineered for performance across household, hospitality and industrial applications.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <Wind className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">Vacbag – Vacuum Cleaner Bags</h3>
            </div>
            <p className="mt-3 text-slate-600">Durable, high air-permeability materials for strong suction and longer motor life. Streamlined range: 16 home models + professional line for hotels and industry.</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-blue-600"/> Tear-resistant multilayer</li>
              <li className="flex items-center gap-2"><Droplets className="w-4 h-4 text-blue-600"/> Optimized air flow</li>
              <li className="flex items-center gap-2"><Package className="w-4 h-4 text-blue-600"/> Simplified SKU system</li>
              <li className="flex items-center gap-2"><Hotel className="w-4 h-4 text-blue-600"/> Hotel & industrial series</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3">
              <FlaskConical className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">WTF – Professional Detergents</h3>
            </div>
            <p className="mt-3 text-slate-600">Custom formulations backed by inorganic chemistry expertise. Scalable production capacity for retail, hospitality and industrial partners.</p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-blue-600"/> EU-compliant quality</li>
              <li className="flex items-center gap-2"><Package className="w-4 h-4 text-blue-600"/> Flexible packaging</li>
              <li className="flex items-center gap-2"><Droplets className="w-4 h-4 text-blue-600"/> Concentrates & ready-to-use</li>
              <li className="flex items-center gap-2"><FlaskConical className="w-4 h-4 text-blue-600"/> R&D support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
