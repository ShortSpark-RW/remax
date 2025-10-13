import homeImg from '../assets/images/home.jpg';
import villaImg from '../assets/images/villa.jpg';
import aptImg from '../assets/images/apartment.jpg';
import condoImg from '../assets/images/condo.jpg';
import familyImg from '../assets/images/family.jpg';
import townhouseImg from '../assets/images/townhouse.jpg';

export const properties = [
  {
    id: 1,
    image: homeImg,
    title: 'Home in Merrick Way',
    location: 'Merrick Way, Miami, FL',
    rating: 4.8,
    reviews: 12,
    description: 'Beautiful modern home with stunning ocean views and contemporary design.',
    bedrooms: 3,
    bathrooms: 3,
    area: 4300,
    price: 540000,
    status: 'For Sale',
    agent: {
      name: 'Maria Wilson',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
    badges: ['Featured']
  },
  {
    id: 2,
    image: villaImg,
    title: 'Villa on Hollywood Boulevard',
    location: 'Hollywood Boulevard, FL',
    rating: 4.9,
    reviews: 8,
    description: 'Luxury villa with private pool and tropical garden.',
    bedrooms: 4,
    bathrooms: 4,
    area: 5200,
    price: 740000,
    originalPrice: 790000,
    status: 'For Sale',
    agent: {
      name: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    badges: ['Hot']
  },
  {
    id: 3,
    image: aptImg,
    title: 'Modern Apartment Downtown',
    location: 'Downtown Miami, FL',
    rating: 4.7,
    reviews: 15,
    description: 'Stylish apartment in the heart of downtown with city views.',
    bedrooms: 2,
    bathrooms: 2,
    area: 1800,
    price: 3200,
    status: 'For Rent',
    agent: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    badges: ['Trendy']
  },
  {
    id: 4,
    image: condoImg,
    title: 'Luxury Condo with Ocean View',
    location: 'South Beach, Miami, FL',
    rating: 5.0,
    reviews: 6,
    description: 'Premium condo with panoramic ocean views and resort amenities.',
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    price: 850000,
    status: 'For Sale',
    agent: {
      name: 'Michael Brown',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    badges: ['Featured']
  },
  {
    id: 5,
    image: familyImg,
    title: 'Family Home in Coral Gables',
    location: 'Coral Gables, FL',
    rating: 4.6,
    reviews: 10,
    description: 'Perfect family home with large backyard and excellent schools nearby.',
    bedrooms: 4,
    bathrooms: 3,
    area: 3600,
    price: 650000,
    status: 'For Sale',
    agent: {
      name: 'Lisa Davis',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
    }
  },
  {
    id: 6,
    image: townhouseImg,
    title: 'Contemporary Townhouse',
    location: 'Brickell, Miami, FL',
    rating: 4.8,
    reviews: 7,
    description: 'Modern townhouse with rooftop terrace and smart home features.',
    bedrooms: 3,
    bathrooms: 2,
    area: 2200,
    price: 4800,
    status: 'For Rent',
    agent: {
      name: 'David Wilson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    }
  }
];

export const agents = [
  {
    id: 1,
    name: 'Nathan James',
    title: 'Real Estate Agent',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    phone: '+1-555-0123',
    email: 'nathan@realhomes.com',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    },
    verified: true,
    properties: 25
  },
  {
    id: 2,
    name: 'Maria Wilson',
    title: 'Senior Real Estate Agent',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    phone: '+1-555-0124',
    email: 'maria@realhomes.com',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    },
    verified: true,
    properties: 42
  },
  {
    id: 3,
    name: 'John Smith',
    title: 'Real Estate Consultant',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    phone: '+1-555-0125',
    email: 'john@realhomes.com',
    socialLinks: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
      instagram: '#'
    },
    verified: true,
    properties: 38
  }
];

export const propertyTypes = [
  { name: 'Commercial', count: 45 },
  { name: 'Office', count: 32 },
  { name: 'Shop', count: 28 },
  { name: 'Residential', count: 156, subTypes: ['Apartment', 'Apartment Building', 'Condominium', 'Single Family', 'Villa'] },
  { name: 'Apartment', count: 67 },
  { name: 'Apartment Building', count: 23 },
  { name: 'Condominium', count: 89 },
  { name: 'Single Family', count: 134 },
  { name: 'Villa', count: 45 }
];

export const testimonials = [
  {
    id: 1,
    text: "I have been looking at this theme for a long time so I decided to check it out and I am so happy I did its great. The quality of the work is exceptional. I have decided I am going to use it on multiple projects and cant wait to get them up and running. It just works.",
    author: "Nathan",
    title: "CEO, ThemeZaa"
  }
];

export const newsArticles = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop',
    date: 'Dec 17, 2018',
    category: 'Admin',
    title: 'Classic Text Format',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    readMore: '#'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop',
    date: 'Dec 15, 2018',
    category: 'News',
    title: 'Modern Living Room Design',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    readMore: '#'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop',
    date: 'Dec 12, 2018',
    category: 'Tips',
    title: 'Minimalist Home Decor',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    readMore: '#'
  }
];

export const features = [
  {
    id: 1,
    icon: '⚙️',
    title: 'Customizable',
    description: 'Fully customizable theme with multiple layout options and color schemes.'
  },
  {
    id: 2,
    icon: '👁️',
    title: 'Beautiful Design',
    description: 'Modern and clean design that works perfectly for real estate websites.'
  },
  {
    id: 3,
    icon: '🔍',
    title: 'Advanced Search',
    description: 'Powerful search functionality with filters and location-based results.'
  },
  {
    id: 4,
    icon: '📍',
    title: 'Location Maps',
    description: 'Interactive maps with property markers and neighborhood information.'
  },
  {
    id: 5,
    icon: '👤',
    title: 'Agent Profiles',
    description: 'Detailed agent profiles with contact information and social links.'
  },
  {
    id: 6,
    icon: '⚓',
    title: 'Mobile Responsive',
    description: 'Fully responsive design that works perfectly on all devices.'
  }
];
