import house1 from '../assets/house1.jpg';
import house2 from '../assets/house2.webp';

export const properties = [
  {
    slug: 'seaside-villa',
    title: 'Seaside Villa',
    description: 'A beautiful villa by the sea.',
    image: house1,
    isPrivate: false,
    isFrozen: false,
  },
  {
    slug: 'secret-mountain-cabin',
    title: 'Secret Mountain Cabin',
    description: 'Hidden gem in the mountains.',
    image: house2,
    isPrivate: true,
    isFrozen: true,
  },
];

export function getProps(){
    return properties;
};
export function getProperty(slug: string) {
  return properties.find((p) => p.slug === slug) || null;
}
