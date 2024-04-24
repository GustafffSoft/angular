export interface ColorDetail {
  color: string;
  image_url: string;
}

export interface Product {
  id?: number;
  Image: string;
  Image1: string;
  Content: string;
  Keywords: string;
  Name: string;
  Category: string;
  Colors: string;
  Price: string;
  Promo_apply: string;
  Reviews: {
    votes: number;
    rating: number;
  };
  Description_title: string;
  Description_content: string;
  Details: string;
  Care: {
    title: string;
    content: string[];
  };
  Color_detail: ColorDetail[]; // Agregado para representar los detalles de color
}
