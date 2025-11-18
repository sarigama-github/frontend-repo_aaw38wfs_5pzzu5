export default function About(){
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Family-Owned. European Quality.</h2>
            <p className="mt-4 text-slate-700">For 17 years we have manufactured, imported and distributed professional cleaning consumables and equipment. Our approach blends rigorous inorganic chemistry with a hands-on commitment to service.</p>
            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• Automated production line for consistent quality</li>
              <li>• EU modernization projects completed</li>
              <li>• Trusted by hotels, distributors and industrial clients</li>
            </ul>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        </div>
      </div>
    </section>
  )
}
