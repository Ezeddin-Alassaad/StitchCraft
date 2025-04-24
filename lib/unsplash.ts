type UnsplashImage = {
  id: string;
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
};

export async function getUnsplashImage(query: string): Promise<UnsplashImage | null> {
  try {
    const url = `https://api.unsplash.com/photos/random?query=${query}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch image from Unsplash');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching Unsplash image:', error);
    return null;
  }
}

export async function getUnsplashImages(query: string, count: number = 3): Promise<UnsplashImage[]> {
  try {
    const url = `https://api.unsplash.com/photos/random?query=${query}&count=${count}&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch images from Unsplash');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching Unsplash images:', error);
    return [];
  }
}

// Fallback image in case Unsplash API fails or is not configured
export const fallbackImage = {
  id: 'fallback',
  urls: {
    regular: 'https://images.pexels.com/photos/4792078/pexels-photo-4792078.jpeg',
    small: 'https://images.pexels.com/photos/4792078/pexels-photo-4792078.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  alt_description: 'Sewing workshop with various supplies',
  user: {
    name: 'Pexels',
  },
};

export const fallbackImages = [
  {
    id: 'fallback1',
    urls: {
      regular: 'https://images.pexels.com/photos/4792078/pexels-photo-4792078.jpeg',
      small: 'https://images.pexels.com/photos/4792078/pexels-photo-4792078.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    alt_description: 'Sewing workshop with colorful threads',
    user: {
      name: 'Pexels',
    },
  },
  {
    id: 'fallback2',
    urls: {
      regular: 'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg',
      small: 'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    alt_description: 'Person sewing with a machine',
    user: {
      name: 'Pexels',
    },
  },
  {
    id: 'fallback3',
    urls: {
      regular: 'https://images.pexels.com/photos/4620624/pexels-photo-4620624.jpeg',
      small: 'https://images.pexels.com/photos/4620624/pexels-photo-4620624.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    alt_description: 'Sewing supplies and patterns',
    user: {
      name: 'Pexels',
    },
  },
];