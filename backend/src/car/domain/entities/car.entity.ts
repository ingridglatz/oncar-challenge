import { Features } from '../enums/features.enum';

type CarConstructor = {
  id?: number;
  model: string;
  make: string;
  color: string;
  price: number;
  features?: Features[];
  image?: string;
};

export class Car {
  id?: number;
  model: string;
  make: string;
  color: string;
  price: number;
  features?: Features[];
  image?: string;

  constructor({
    id,
    model,
    make,
    color,
    price,
    features,
    image,
  }: CarConstructor) {
    this.id = id;
    this.model = model;
    this.make = make;
    this.color = color;
    this.price = price;
    this.features = features;
    this.image = image;
  }
}
