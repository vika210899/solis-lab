export type Product = {
  id: string;
  name: string;
  picture: string;
  categoryTypeId: string;
  inStock: boolean;
  isNew: boolean;
};

export type NewProduct = {
  name: string;
  picture: string;
  categoryTypeId: string;
  inStock: boolean;
  isNew: boolean;
};
