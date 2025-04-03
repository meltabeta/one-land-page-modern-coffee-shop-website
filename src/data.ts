import { MenuItem, Testimonial } from './types';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Signature Espresso',
    description: 'Rich, bold espresso crafted from our house blend',
    price: 3.50,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    name: 'Artisan Croissant',
    description: 'Flaky, buttery croissant baked fresh daily',
    price: 4.00,
    category: 'pastry',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    name: 'Avocado Toast',
    description: 'Sourdough toast with smashed avocado and poached eggs',
    price: 12.00,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1603046891744-1f76eb10aec1?auto=format&fit=crop&q=80&w=400',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Local Artist',
    content: 'The perfect spot for my morning coffee and creative inspiration. The atmosphere is unmatched!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Food Critic',
    content: 'Their attention to detail in every cup of coffee is remarkable. A true gem in the city.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
];