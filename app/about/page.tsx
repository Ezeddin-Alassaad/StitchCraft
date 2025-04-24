
export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-100 py-16 transition-all duration-500 ease-in-out">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-4 text-blue-800 animate-fade-in-down">About Master Sewing Workshops</h1>
            <p className="text-xl text-blue-600 max-w-2xl mx-auto">Elevate your crafting skills with our expert-led sewing classes, crafted for all levels—from novices to seasoned stitchers.</p>
          </div>
        </section>

        {/* Workshops Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Workshops</h2>
            <div className="max-w-3xl mx-auto text-gray-700">
              <p className="mb-4">Dive into a world of creativity with workshops tailored for every skill level. From mastering basic stitches to designing intricate garments, our classes inspire and empower.</p>
              <p>Join a vibrant community where learning meets passion in a supportive, hands-on environment.</p>
            </div>
          </div>
        </section>

        {/* Instructors Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Meet Our Instructors</h2>
            <p className="max-w-3xl mx-auto text-gray-700 mb-4">Our team of seasoned professionals brings decades of sewing expertise and a contagious enthusiasm to every class, ensuring you leave with newfound skills and confidence.</p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-white shadow-md rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <p className="text-gray-600 italic">These workshops turned my sewing dreams into reality—I am now crafting my own wardrobe!</p>
                <p className="mt-4 font-semibold text-blue-600">- Jane Doe</p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <p className="text-gray-600 italic">Incredible instructors and a joyful experience—I have learned more than I ever imagined!</p>
                <p className="mt-4 font-semibold text-blue-600">- John Smith</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-500 text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Thread Your Journey?</h2>
            <p className="mb-8 max-w-xl mx-auto">Discover the perfect class to unleash your creativity and master the art of sewing.</p>
            <a href="/workshops" className="inline-block bg-white text-blue-500 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">Explore Workshops</a>
          </div>
        </section>
      </main>
    </div>
  );
}