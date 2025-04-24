import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getWorkshopBySlug, getAllWorkshopSlugs } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import { fallbackImages } from '@/lib/unsplash';
import { BookingForm } from './booking-form';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock, Users, ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  const slugs = getAllWorkshopSlugs();
  
  return slugs.map(slug => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const workshop = getWorkshopBySlug(params.slug);
  
  if (!workshop) {
    return {
      title: 'Workshop Not Found',
    };
  }
  
  return {
    title: `${workshop.title} | StitchCraft Workshops`,
    description: workshop.description,
  };
}

export default function WorkshopPage({ params }: { params: { slug: string } }) {
  const workshop = getWorkshopBySlug(params.slug);
  
  if (!workshop) {
    notFound();
  }
  
  return (
    <>
      {/* Workshop Header */}
      <section className="bg-coral-50 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/workshops" 
            className="inline-flex items-center text-coral-600 hover:text-coral-800 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Workshops
          </Link>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="coral" className="mb-4">
                {workshop.level}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-playfair font-bold text-neutral-900 mb-4">
                {workshop.title}
              </h1>
              <p className="text-neutral-600 text-lg mb-6">
                {workshop.description}
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 text-coral-500 mr-3" />
                  <span>{formatDate(workshop.date)}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-coral-500 mr-3" />
                  <span>{workshop.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-coral-500 mr-3" />
                  <span>Limited to {workshop.capacity} participants</span>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="text-2xl font-semibold text-coral-600 mb-4">
                  ${workshop.price}
                </div>
                <BookingForm workshop={workshop} />
              </div>
            </div>
            
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={fallbackImages[0].urls.regular}
                alt={workshop.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Workshop Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-playfair font-semibold text-neutral-900 mb-6">
              About This Workshop
            </h2>
            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {workshop.longDescription}
              </p>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-playfair font-semibold text-neutral-900 mb-4">
                Workshop Schedule
              </h3>
              <div className="bg-neutral-50 rounded-lg p-6">
                <ul className="space-y-4">
                  {workshop.schedule.map((item, index) => (
                    <li key={index} className="flex flex-col sm:flex-row sm:items-start">
                      <div className="font-medium text-neutral-900 sm:w-48">
                        {item.day}, {item.time}
                      </div>
                      <div className="text-neutral-600">{item.activity}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-playfair font-semibold text-neutral-900 mb-4">
                Meet Your Instructor
              </h3>
              <div className="flex flex-col sm:flex-row items-start bg-white rounded-lg shadow-sm p-6 border border-neutral-100">
                <div className="sm:w-24 sm:h-24 w-20 h-20 relative rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                  <Image
                    src={workshop.instructor.image}
                    alt={workshop.instructor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                    {workshop.instructor.name}
                  </h4>
                  <p className="text-neutral-600">
                    {workshop.instructor.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Photo Gallery */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-playfair font-semibold text-neutral-900 mb-8 text-center">
              Workshop Gallery
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {fallbackImages.map((image, index) => (
                <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src={image.urls.small}
                    alt={`Workshop gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Workshops */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-playfair font-semibold text-neutral-900 mb-8 text-center">
            You Might Also Be Interested In
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/workshops/pattern-making-masterclass">
              <Button variant="outline" className="bg-white">
                Pattern Making Masterclass
              </Button>
            </Link>
            <Link href="/workshops/sustainable-fashion-workshop">
              <Button variant="outline" className="bg-white">
                Sustainable Fashion Workshop
              </Button>
            </Link>
            <Link href="/workshops/couture-hand-sewing">
              <Button variant="outline" className="bg-white">
                Couture Hand Sewing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}