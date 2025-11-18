import { Wrench, Gauge, Cpu, Rocket } from 'lucide-react'

export default function Capacity(){
  return (
    <section id="capacity" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Manufacturing Capacity & Technology</h2>
          <p className="mt-4 text-slate-600">Automated production lines with consistent quality and throughput to serve European partners at scale.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl border border-slate-200">
            <Gauge className="w-6 h-6 text-blue-600"/>
            <h3 className="mt-3 font-semibold text-slate-900">High Throughput</h3>
            <p className="text-sm text-slate-600">Large batch reactors and high-speed filling lines.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-200">
            <Cpu className="w-6 h-6 text-blue-600"/>
            <h3 className="mt-3 font-semibold text-slate-900">Process Automation</h3>
            <p className="text-sm text-slate-600">PLC-controlled dosing, mixing, and quality checks.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-200">
            <Wrench className="w-6 h-6 text-blue-600"/>
            <h3 className="mt-3 font-semibold text-slate-900">Flexible Tooling</h3>
            <p className="text-sm text-slate-600">From small pilot to industrial scale with quick changeovers.</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-200">
            <Rocket className="w-6 h-6 text-blue-600"/>
            <h3 className="mt-3 font-semibold text-slate-900">EU Modernization</h3>
            <p className="text-sm text-slate-600">Recent projects upgraded energy efficiency and safety.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
