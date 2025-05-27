export interface IAnalyzeImageRequest {
  imageUrl: string;
}

export interface IIngredient {
  name: string;
  quantity: string;
  unit: string;
}

export interface IAnalyzeImageResponse {
  ingredients: IIngredient[];
}
