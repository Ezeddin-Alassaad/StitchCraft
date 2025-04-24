import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { Workshop } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface WorkshopCardProps {
  workshop: Workshop;
  image: {
    src: string;
    alt: string;
  };
}

export function WorkshopCard({ workshop, image }: WorkshopCardProps) {
  const { title, description, date, level, price, slug } = workshop;
  
  return (
    <div className="group flex flex-col h-full overflow-hidden rounded-lg shadow-md border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="flex flex-col flex-grow p-5 bg-white dark:bg-neutral-800">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline" className="bg-coral-50 text-coral-700 border-coral-200">
            {level}
          </Badge>
          <span className="text-lg font-semibold text-coral-600">${price}</span>
        </div>
        
        <h3 className="text-xl font-playfair font-semibold mt-2 mb-2 text-neutral-900 dark:text-neutral-50">
          {title}
        </h3>
        
        <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4 flex-grow">
          {description}
        </p>
        
        <div className="mt-auto">
          <div className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
            {formatDate(date)}
          </div>
          
          <Link href={`/workshops/${slug}`} className="block">
            <Button variant="coral" className="w-full group-hover:bg-coral-600 transition-colors">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}