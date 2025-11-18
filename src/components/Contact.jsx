import { useState } from 'react'

export default function Contact(){
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone'),
      company: form.get('company'),
      message: form.get('message'),
      source: form.get('source') || 'contact',
    }

    try {
      setStatus('Sending...')
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus('Thank you! We\'ll get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus(`Error: ${err.message}`)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Contact Us</h2>
            <p className="mt-4 text-slate-600">Tell us about your needs for professional vacuum bags, detergents, or white-label chemical products. We respond within 1 business day.</p>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p><strong>Headquarters:</strong> European Union</p>
              <p><strong>Experience:</strong> 17 years in manufacturing</p>
              <p><strong>Specialization:</strong> Inorganic chemistry, automated production</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Company</label>
                <input name="company" className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows="4" required className="mt-1 w-full rounded-md border-slate-300 focus:ring-blue-500 focus:border-blue-500" />
              </div>
              <input type="hidden" name="source" value="contact" />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow">Send Message</button>
            {status && <p className="mt-3 text-sm text-slate-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
