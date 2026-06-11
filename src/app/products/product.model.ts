export interface Product {
  id: string;
  name: string;
  picture: string;
  price: number;
  categoryTypeId: string;
  inStock: boolean;
  isNew: boolean;
}

export interface NewProduct {
  name: string;
  picture: string;
  price: number;
  categoryTypeId: string;
  inStock: boolean;
  isNew: boolean;
}

export const PRODUCT_LIST: Product[] = [
  {
    id: 'n1',
    name: 'necklace with pearls',
    picture: 'n1.jpg',
    price: 6599,
    categoryTypeId: 'n',
    inStock: true,
    isNew: false,
  },
  {
    id: 'n2',
    name: 'beads necklace',
    picture: 'IMG_9466.jpg',
    price: 5299,
    categoryTypeId: 'n',
    inStock: true,
    isNew: true,
  },
  {
    id: 'n3',
    name: 'tiger eye necklace',
    picture: 'IMG_9466.jpg',
    price: 4599,
    categoryTypeId: 'n',
    inStock: true,
    isNew: false,
  },
  {
    id: 'e1',
    name: 'tiger eye earrings',
    picture: 'IMG_9466.jpg',
    price: 4599,
    categoryTypeId: 'e',
    inStock: true,
    isNew: true,
  },
  {
    id: 'e2',
    name: 'classic earings',
    picture: 'IMG_9466.jpg',
    price: 3999,
    categoryTypeId: 'e',
    inStock: true,
    isNew: false,
  },
  {
    id: 'b1',
    name: 'pearl bracelet',
    picture: 'IMG_9466.jpg',
    price: 3599,
    categoryTypeId: 'b',
    inStock: true,
    isNew: true,
  },
];
