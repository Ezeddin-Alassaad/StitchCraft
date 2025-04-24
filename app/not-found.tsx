import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-neutral-50">
      <div className="text-center px-4">
        <h1 className="text-5xl font-playfair font-bold text-neutral-900 mb-4">404</h1>
        <h2 className="text-2xl font-medium text-neutral-800 mb-6">Page Not Found</h2>
        <p className="text-neutral-600 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back to the workshops.
        </p>
        <Link href="/">
          <Button variant="coral">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}