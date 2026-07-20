export interface SliderItem {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundColor?: string;
}

export const MAIN_SLIDES_LIST: SliderItem[] = [
  {
    image: 'slide1.jpg',
    title: 'New Collection',
    description: 'Handmade jewelry made from natural stones',
    buttonText: 'New Collection',
    buttonLink: '/catalog',
    backgroundColor: '#EDF5FF',
  },
  {
    image: 'slide2.JPG',
    title: 'Второй слайд',
    description: 'Описание',
    buttonText: 'Подробнее',
    buttonLink: '/about',
    backgroundColor: '#F8F5F2',
  },
  {
    image: 'n3.jpg',
    title: '3 слайд',
    description: 'Описание',
    buttonText: 'Подробнее',
    buttonLink: '/about',
    backgroundColor: '#f19131',
  },
];
