import tour1 from '../images/tour-1.jpeg';
import tour2 from '../images/tour-2.jpeg';
import tour3 from '../images/tour-3.jpeg';
import tour4 from '../images/tour-4.jpeg';

export const navLinks = [
  { title: 'home', url: '#home' },
  { title: 'about', url: '#about' },
  { title: 'services', url: '#services' },
  { title: 'tours', url: '#tours' },
];

export const navIcons = [
  { url: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { url: 'https://www.facebook.com', icon: 'fab fa-twitter' },
  { url: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
];

export const serviceData = [
  {
    title: 'Saving money',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia',
    icon: 'fas fa-wallet fa-fw',
  },
  {
    title: 'Endless hiking',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia',
    icon: 'fas fa-hiking',
  },
  {
    title: 'Amazing comfort',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia',
    icon: 'fas fa-couch',
  },
];

export const tourData = [
  {
    title: 'Tihbet Adventure',
    date: 'August 26th, 2020',
    img: tour1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitaetempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'China',
    duration: '6 days',
    price: 'from 2100$',
  },
  {
    title: 'Best of java',
    date: 'August 26th, 2020',
    img: tour2,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitaetempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Japan',
    duration: '11 days',
    price: 'from 1400$',
  },
  {
    title: 'Explore hong kong',
    date: 'August 26th, 2020',
    img: tour3,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitaetempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'China',
    duration: '19 days',
    price: 'from 400$',
  },
  {
    title: 'Kenya highlights',
    date: 'August 26th, 2020',
    img: tour4,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitaetempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    country: 'Kenya',
    duration: '22 days',
    price: 'from 1500$',
  },
];
