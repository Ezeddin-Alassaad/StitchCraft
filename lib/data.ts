export type Workshop = {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  date: string;
  price: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  capacity: number;
  instructor: {
    name: string;
    bio: string;
    image: string;
  };
  category: string;
  imageQuery: string;
  schedule: {
    day: string;
    time: string;
    activity: string;
  }[];
};

export const workshops: Workshop[] = [
  {
    id: '1',
    title: 'Basic Sewing Techniques',
    slug: 'basic-sewing-techniques',
    description: 'Learn the fundamentals of sewing, from threading a needle to basic stitches.',
    longDescription: 'This workshop is perfect for absolute beginners who want to learn the basics of sewing. We\'ll cover everything from threading a needle and selecting the right fabrics to mastering essential hand stitches and using a sewing machine confidently. By the end of this workshop, you\'ll have completed a simple tote bag project and gained the skills to tackle basic sewing projects on your own. All materials are provided, and you\'ll take home your finished creation along with a beginner\'s sewing kit.',
    date: '2025-04-15',
    price: 85,
    duration: '3 hours',
    level: 'Beginner',
    capacity: 10,
    instructor: {
      name: 'Emily Chen',
      bio: 'Emily has been teaching sewing for over 15 years and is passionate about helping beginners discover the joy of creating with fabric. Her patient teaching style ensures everyone feels comfortable, regardless of experience level.',
      image: 'https://images.pexels.com/photos/5853462/pexels-photo-5853462.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    category: 'Basics',
    imageQuery: 'sewing beginner',
    schedule: [
      { day: 'Day 1', time: '10:00 AM - 11:30 AM', activity: 'Introduction to sewing tools and materials' },
      { day: 'Day 1', time: '11:30 AM - 1:00 PM', activity: 'Hand stitching techniques and practice' }
    ]
  },
  {
    id: '2',
    title: 'Pattern Making Masterclass',
    slug: 'pattern-making-masterclass',
    description: 'Create custom clothing patterns tailored to your measurements.',
    longDescription: 'Take your sewing to the next level with this comprehensive pattern-making workshop. You\'ll learn how to take accurate body measurements, draft basic pattern blocks, and modify existing patterns to achieve the perfect fit. We\'ll cover dart manipulation, adding design details, and techniques for different fabric types. Each participant will create a custom-fitted bodice pattern that can be used as the foundation for countless future projects. This workshop is ideal for those who have basic sewing experience and want to create truly custom garments.',
    date: '2025-04-22',
    price: 120,
    duration: '6 hours',
    level: 'Intermediate',
    capacity: 8,
    instructor: {
      name: 'Marcus Williams',
      bio: 'Marcus worked as a pattern maker for luxury fashion brands before starting his teaching career. His technical expertise combined with a creative approach makes complex pattern-making accessible and enjoyable for students of all levels.',
      image: 'https://images.pexels.com/photos/5332974/pexels-photo-5332974.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    category: 'Patterns',
    imageQuery: 'sewing pattern',
    schedule: [
      { day: 'Day 1', time: '9:00 AM - 12:00 PM', activity: 'Body measurements and pattern drafting basics' },
      { day: 'Day 1', time: '1:00 PM - 4:00 PM', activity: 'Pattern customization and fitting' }
    ]
  },
  {
    id: '3',
    title: 'Sustainable Fashion Workshop',
    slug: 'sustainable-fashion-workshop',
    description: 'Learn to upcycle old garments into fashionable new pieces.',
    longDescription: 'Join us for an inspiring workshop on sustainable fashion and upcycling. You\'ll learn techniques for transforming outdated or worn garments into stylish, contemporary pieces while reducing textile waste. We\'ll cover creative reconstruction methods, fabric painting, embellishment, and zero-waste design principles. Bring two items from your closet that you\'d like to transform, and we\'ll guide you through the process of giving them new life. This workshop is suitable for sewers with basic machine skills who want to add an eco-friendly dimension to their crafting.',
    date: '2025-05-05',
    price: 95,
    duration: '4 hours',
    level: 'Intermediate',
    capacity: 12,
    instructor: {
      name: 'Zoe Rodriguez',
      bio: 'Zoe is an environmental activist and fashion designer specializing in zero-waste and upcycled fashion. Her work has been featured in sustainable fashion shows across the country, and she brings both creativity and environmental consciousness to her teaching.',
      image: 'https://images.pexels.com/photos/3727474/pexels-photo-3727474.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    category: 'Sustainable',
    imageQuery: 'sustainable fashion sewing',
    schedule: [
      { day: 'Day 1', time: '10:00 AM - 12:00 PM', activity: 'Sustainable fashion principles and garment assessment' },
      { day: 'Day 1', time: '1:00 PM - 3:00 PM', activity: 'Upcycling techniques and project work' }
    ]
  },
  {
    id: '4',
    title: 'Couture Hand Sewing',
    slug: 'couture-hand-sewing',
    description: 'Master the exquisite hand-sewing techniques used in high fashion.',
    longDescription: 'Discover the refined techniques that define true couture sewing in this specialized workshop. You\'ll learn the meticulous hand-stitching methods used by high fashion houses to create garments of exceptional quality. The class covers couture seam finishes, hand-picked zippers, delicate lace application, beading, and the famous Chanel hand-quilting technique. This intimate, intensive workshop focuses on precision and craftsmanship, with plenty of one-on-one guidance. You\'ll complete a couture sampler with multiple techniques that can be applied to future projects. This class is ideal for experienced sewers looking to elevate their craftsmanship.',
    date: '2025-05-15',
    price: 180,
    duration: '8 hours',
    level: 'Advanced',
    capacity: 6,
    instructor: {
      name: 'Isabelle Laurent',
      bio: 'Isabelle trained with master tailors in Paris before establishing her career in couture techniques. With over 25 years of experience working with couture fashion houses, she brings unparalleled expertise and attention to detail to her workshops.',
      image: 'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    category: 'Couture',
    imageQuery: 'couture sewing',
    schedule: [
      { day: 'Day 1', time: '9:00 AM - 12:00 PM', activity: 'Couture hand stitches and seam finishes' },
      { day: 'Day 1', time: '1:00 PM - 5:00 PM', activity: 'Advanced techniques: lace application and beading' }
    ]
  },
  {
    id: '5',
    title: 'Children\'s Clothing Workshop',
    slug: 'childrens-clothing-workshop',
    description: 'Create adorable, comfortable clothes for children with playful details.',
    longDescription: 'This fun workshop focuses on creating charming, durable clothing for children. You\'ll learn techniques specific to children\'s wear, including comfortable seam finishes, growth adjustments, and playful embellishments. The class includes a pattern for a child\'s romper or dress (size 2T-6) that can be customized with various details. We\'ll cover fabric selection for children\'s activities, safety considerations, and how to add features that make dressing easier for both children and parents. Each participant will complete one garment during the workshop, with guidance for creating additional sizes at home.',
    date: '2025-05-25',
    price: 110,
    duration: '5 hours',
    level: 'Intermediate',
    capacity: 8,
    instructor: {
      name: 'Thomas Park',
      bio: 'Thomas worked as a designer for several children\'s clothing brands before starting his own label specializing in gender-neutral, adaptable kids\' wear. He brings both technical knowledge and a playful approach to creating clothes children love to wear.',
      image: 'https://images.pexels.com/photos/6551796/pexels-photo-6551796.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    category: 'Specialty',
    imageQuery: 'children clothing sewing',
    schedule: [
      { day: 'Day 1', time: '10:00 AM - 12:30 PM', activity: 'Pattern adjustments and fabric cutting' },
      { day: 'Day 1', time: '1:30 PM - 4:00 PM', activity: 'Construction and special techniques for children\'s wear' }
    ]
  },
  {
    id: '6',
    title: 'Denim Repair & Customization',
    slug: 'denim-repair-customization',
    description: 'Extend the life of your favorite jeans with professional repair techniques.',
    longDescription: 'Give your beloved denim pieces new life with this specialized workshop on denim repair and customization. You\'ll learn professional techniques for patching, darning, reinforcing, and decorative mending of jeans and other denim items. The workshop also covers creative customization methods including distressing, embroidery, fabric additions, and creating the perfect worn-in look. Bring one or two denim pieces that need repair or refreshing, and we\'ll guide you through the process of transforming them. All participants will also receive a denim repair kit to take home.',
    date: '2025-06-05',
    price: 90,
    duration: '4 hours',
    level: 'Beginner',
    capacity: 10,
    instructor: {
      name: 'Jamie Wilson',
      bio: 'Jamie specializes in denim work and visible mending techniques. With a background in sustainable fashion and textile arts, they bring both practical repair skills and artistic flair to the process of extending the life of beloved garments.',
      image: 'https://images.pexels.com/photos/3760814/pexels-photo-3760814.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    category: 'Specialty',
    imageQuery: 'denim repair sewing',
    schedule: [
      { day: 'Day 1', time: '1:00 PM - 3:00 PM', activity: 'Repair techniques: patching, darning, reinforcement' },
      { day: 'Day 1', time: '3:00 PM - 5:00 PM', activity: 'Creative customization: distressing, embroidery, embellishment' }
    ]
  }
];

export function getWorkshopBySlug(slug: string): Workshop | undefined {
  return workshops.find(workshop => workshop.slug === slug);
}

export function getAllWorkshopSlugs(): string[] {
  return workshops.map(workshop => workshop.slug);
}