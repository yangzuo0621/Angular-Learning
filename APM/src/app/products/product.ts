export interface IProduct {
  id: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  tags?: string[];
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}
