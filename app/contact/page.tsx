
export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-12 text-center text-gray-800 animate-fade-in">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Details */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">Get in Touch</h2>
              <p className="mb-4 text-gray-700"><span className="text-blue-500 text-lg mr-2">📧</span> <strong>Email:</strong> info@mastersewingworkshops.com</p>
              <p className="mb-4 text-gray-700"><span className="text-blue-500 text-lg mr-2">📞</span> <strong>Phone:</strong> (123) 456-7890</p>
              <p className="text-gray-700"><span className="text-blue-500 text-lg mr-2">🏠</span> <strong>Address:</strong> 123 Sewing Lane, Craft City, USA</p>
            </div>
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-2">Send Us a Message</h2>
              <div>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea id="message" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200" rows={4}></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}