import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import WhiteLabel from './components/WhiteLabel'
import Capacity from './components/Capacity'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhiteLabel />
      <Capacity />
      <Testimonials />
      <Contact />
      <footer className="py-10 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Vacbag • WTF Manufacturing Group. All rights reserved.</p>
          <div className="text-xs text-slate-500">SEO: professional vacuum bags, detergents, white-label chemical products</div>
        </div>
      </footer>
    </div>
  )
}

export default App
