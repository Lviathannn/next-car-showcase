export interface carType {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface getCarType {
  manufacturer: string;
  model: string;
  year: number;
  fuel: string;
  limit: number;
}
export interface OptionsType {
  title: string;
  value: string;
}
export interface CustomFilterType {
  title: string;
  options: OptionsType[];
}

export interface ShowMoreType {
  pageNumber: number;
  isNext: boolean;
}
