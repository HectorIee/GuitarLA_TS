type GuitarT = {
  id: string;
  image: string;
  name: string;
  content: string;
  price: number;
};


// Use &  to extends the type CardItems with GuitarT
type CartItemT = GuitarT & {
  count: number;
};

export type { GuitarT, CartItemT };
