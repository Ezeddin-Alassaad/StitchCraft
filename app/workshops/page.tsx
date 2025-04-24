import { Suspense } from 'react';
import { workshops } from '@/lib/data';
import { fallbackImages } from '@/lib/unsplash';
import { WorkshopCard } from '@/components/workshop-card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Workshops | StitchCraft',
  description: 'Browse our selection of expert-led sewing workshops for all skill levels',
};

export default function WorkshopsPage() {
  return (
    <>
      {/* Header Section */}
      <section className="bg-coral-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-neutral-900 mb-4">
              Our Sewing Workshops
            </h1>
            <p className="text-neutral-600 text-lg mb-8">
              Discover our range of expert-led workshops designed for all skill levels, from complete beginners to advanced sewers.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2">
              <Button variant="outline" className="bg-white">All Workshops</Button>
              <Button variant="outline" className="bg-white">Beginner</Button>
              <Button variant="outline" className="bg-white">Intermediate</Button>
              <Button variant="outline" className="bg-white">Advanced</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Workshops Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Suspense fallback={<WorkshopsLoading />}>
              {workshops.map((workshop, index) => (
                <WorkshopCard 
                  key={workshop.id} 
                  workshop={workshop} 
                  image={{
                    src: fallbackImages[index % fallbackImages.length].urls.regular,
                    alt: workshop.title
                  }}
                />
              ))}
            </Suspense>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-neutral-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  Do I need to bring my own sewing machine?
                </h3>
                <p className="text-neutral-600">
                  No, we provide all the equipment you'll need for the workshop, including sewing machines. However, if you prefer to use your own machine, you're welcome to bring it.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  What skill level is required for each workshop?
                </h3>
                <p className="text-neutral-600">
                  Each workshop is clearly marked with a skill level: Beginner, Intermediate, or Advanced. Beginner workshops assume no prior experience, while Intermediate and Advanced workshops build on fundamental skills.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  What is your cancellation policy?
                </h3>
                <p className="text-neutral-600">
                  We offer full refunds for cancellations made at least 7 days before the workshop date. Cancellations within 7 days may receive a partial refund or workshop credit, depending on the circumstances.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  How many participants are in each workshop?
                </h3>
                <p className="text-neutral-600">
                  To ensure personalized attention, our workshops typically have 6-12 participants, depending on the complexity of the techniques being taught.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function WorkshopsLoading() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div 
          key={item} 
          className="h-96 rounded-lg bg-neutral-100 animate-pulse"
        />
      ))}
    </>
  );
}