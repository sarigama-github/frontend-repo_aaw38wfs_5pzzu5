export default function Testimonials(){
  const items = [
    { quote: 'Reliable partner with consistent product quality and on-time deliveries across multiple European markets.', client: 'Procurement Lead, Hotel Group' },
    { quote: 'Custom detergent line exceeded performance specs. Great documentation and regulatory support.', client: 'COO, Retail Brand' },
    { quote: 'Vacbag professional series improved cleaning efficiency for our facilities team.', client: 'Facilities Manager, Industrial Plant' },
  ]

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Client Testimonials</h2>
          <p className="mt-4 text-slate-600">Trusted by hotels, distributors, and industrial partners.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <p className="text-slate-700">“{t.quote}”</p>
              <p className="mt-4 text-sm text-slate-500">{t.client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
