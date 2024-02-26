export type Product = {
  id: string,
  title: string,
  thumbnail: string,
  price: number,
  condition?: string,
  availablityQuantity?: number,
  shipping: { free_shipping: boolean },
  quantity: number,
};

export type ProductListProp = {
  id: string,
  title: string,
  thumbnail: string,
  price: number,
  availablityQuantity?: number,
  shipping: { free_shipping: boolean },
  shoppingList: Product[];
  setShoppingList: React.Dispatch<React.SetStateAction<Product[]>>
};

export type ParamIdProp = {
  paramId: string;
  productList: Product[];
  setProductList: (arg: []) => void;
  shoppingList: Product[];
  setShoppingList: React.Dispatch<React.SetStateAction<Product[]>>
};

export type ProductTypeInfo = {
  title: string,
  id: string,
  price: string,
  thumbnail: string,
  condition: string,
};

export type ShoppingCartProp = {
  shoppingList: Product[];
  setShoppingList: React.Dispatch<React.SetStateAction<Product[]>>
};

export type ShowShoppingCartProp = {
  shoppingList: Product;
  setShoppingList: React.Dispatch<React.SetStateAction<Product[]>>
};

export type HeaderProps = {
  setInputValue: (value: string) => void;
  inputValue: string;
  setProductList: (arg: []) => void;
  setMessage: (message: boolean) => void;
};

export type HomeProps = {
  setProductList: (arg: []) => void;
  productList: Product[];
  showMessage: boolean;
  shoppingList: Product[];
  setShoppingList: React.Dispatch<React.SetStateAction<Product[]>>
};

export type CategoriesProp = {
  productList: Product[];
  setProductList: (arg: []) => void;
  shoppingList: Product[];
  setShoppingList: React.Dispatch<React.SetStateAction<Product[]>>
};
