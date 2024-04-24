export interface ApiResult {
    page: number;
    results: any[];
    total_pages: number;
    total_results: number;
  }


  export interface DrinkResult {
    id: string;
    title: string;
    imgUrl: string;
    difficulty: string;
  }