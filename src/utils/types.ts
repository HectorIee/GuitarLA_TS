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
  
  //Using utility types   
  //https://www.typescriptlang.org/docs/handbook/utility-types.html   PICK add properties to a type and with Omit remove properties from a type
  
  // type CartItemT = Pick<GuitarT, 'id'> & { count: number }
  
  // type CartItemT = Omit<GuitarT, 'id'> & { count: number }