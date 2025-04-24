import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { fallbackImage } from '@/lib/unsplash';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={fallbackImage.urls.regular}
            alt="Sewing workshop with various supplies" 
            fill
            priority
            className="object-cover brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight mb-4">
              Master Sewing Workshops
            </h1>
            <h2 className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Elevate your crafting skills with our expert-led sewing classes designed for all levels
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/workshops">
                <Button variant="coral" size="lg" className="font-medium">
                  Explore Workshops
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="mustard" size="lg" className="text-white border-white hover:bg-white/10">
                  About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold text-neutral-900 mb-4">
              Why Choose Our Workshops?
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our workshops provide a unique and enriching experience for sewing enthusiasts of all skill levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-100 shadow-sm">
              <div className="w-12 h-12 bg-coral-100 text-coral-600 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 5H5l7 7Z"/><path d="M5 19h14"/></svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-neutral-900 mb-3">
                Expert Instruction
              </h3>
              <p className="text-neutral-600">
                Learn from professional tailors and fashion designers with years of industry experience.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-100 shadow-sm">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-neutral-900 mb-3">
                Small Class Sizes
              </h3>
              <p className="text-neutral-600">
                Enjoy personalized attention with our small group workshops limited to 6-12 participants.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-100 shadow-sm">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m16 8-4 4-4-4"/><path d="M16 18a4 4 0 0 0-8 0"/></svg>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-neutral-900 mb-3">
                All Materials Provided
              </h3>
              <p className="text-neutral-600">
                We supply all the fabrics, tools, and materials needed for your workshop projects.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Workshops */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold text-neutral-900 mb-4">
              Featured Workshops
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Take a look at some of our most popular sewing workshops designed for all skill levels.
            </p>
          </div>
          
          {/* Workshop Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Workshop 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-neutral-100 flex flex-col md:flex-row">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image 
                  src="https://images.pexels.com/photos/4792078/pexels-photo-4792078.jpeg"
                  alt="Basic Sewing Techniques workshop" 
                  className="object-cover"
                  fill
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col">
                <h3 className="text-xl font-playfair font-semibold text-neutral-900 mb-2">
                  Basic Sewing Techniques
                </h3>
                <p className="text-neutral-600 mb-4 flex-grow">
                  Learn the fundamentals of sewing, from threading a needle to basic stitches.
                </p>
                <div className="mt-auto">
                  <Link href="/workshops/basic-sewing-techniques">
                    <Button variant="coral" className="w-full">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Workshop 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-neutral-100 flex flex-col md:flex-row">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image 
                  src="https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg"
                  alt="Pattern Making Masterclass workshop" 
                  className="object-cover"
                  fill
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col">
                <h3 className="text-xl font-playfair font-semibold text-neutral-900 mb-2">
                  Pattern Making Masterclass
                </h3>
                <p className="text-neutral-600 mb-4 flex-grow">
                  Create custom clothing patterns tailored to your measurements.
                </p>
                <div className="mt-auto">
                  <Link href="/workshops/pattern-making-masterclass">
                    <Button variant="coral" className="w-full">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/workshops">
              <Button variant="outline" className="border-coral-300 text-coral-600 hover:bg-coral-50">
                View All Workshops
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-coral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-playfair font-bold text-neutral-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Hear from the people who have experienced our workshops firsthand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <p className="text-neutral-600 italic mb-6">
                "The Basic Sewing workshop was perfect for a beginner like me. The instructor was patient and provided step-by-step guidance. I'm now confidently working on my own projects!"
              </p>
              <div className="font-medium">
                <p className="text-neutral-900">Sarah Johnson</p>
                <p className="text-neutral-500 text-sm">Attended Basic Sewing Techniques</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <p className="text-neutral-600 italic mb-6">
                "The Pattern Making Masterclass revolutionized how I approach sewing projects. Creating custom-fitted patterns has made such a difference in the quality of my garments."
              </p>
              <div className="font-medium">
                <p className="text-neutral-900">Michael Chen</p>
                <p className="text-neutral-500 text-sm">Attended Pattern Making Masterclass</p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <p className="text-neutral-600 italic mb-6">
                "I loved the Sustainable Fashion Workshop! It gave me so many creative ideas for repurposing old clothes. The techniques I learned are both environmentally friendly and budget-conscious."
              </p>
              <div className="font-medium">
                <p className="text-neutral-900">Olivia Martinez</p>
                <p className="text-neutral-500 text-sm">Attended Sustainable Fashion Workshop</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Ready to Start Your Sewing Journey?
          </h2>
          <p className="text-teal-100 max-w-2xl mx-auto mb-8">
            Join our community of passionate creators and learn skills that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/workshops">
              <Button variant="mustard" size="lg" className="font-medium">
                Browse Workshops
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="coral" size="lg" className="text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}