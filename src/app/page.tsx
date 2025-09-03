export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight">
            Maatworks Insight
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We help businesses optimize processes and bridge the gap between IT and management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
              Get Started
            </button>
            <button className="border border-gray-300 text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-8 text-center">
            About Maatworks
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
            Maatworks is a leading consultancy firm specializing in digital transformation and process optimization. 
            Our team of experienced professionals works closely with organizations to identify inefficiencies, 
            implement cutting-edge solutions, and create sustainable growth strategies that align technology 
            with business objectives.
          </p>
        </div>
      </section>

      {/* Success Cases Section */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-16 text-center">
            Success Cases
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Digital Transformation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Helped a Fortune 500 company modernize their legacy systems and reduce operational costs by 40%.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                Implemented cloud-based solutions that improved team collaboration and data accessibility.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                Process Optimization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Streamlined workflow processes for a manufacturing company, resulting in 60% faster delivery times.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                Automated manual tasks and integrated real-time monitoring systems for better visibility.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                IT Strategy Consulting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Developed comprehensive IT roadmap for a growing startup, enabling scalable infrastructure.
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">
                Aligned technology investments with business goals and established governance frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 sm:px-8 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600">
            © Maatworks 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
