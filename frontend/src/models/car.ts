import { featuresLabels } from '@/constants/features-options';
import { Features } from './features';

type CarConstructor = {
  id: number;
  model: string;
  make: string;
  color: string;
  features: string[];
  price: number;
  image: string;
};

export class Car {
  id: number;
  model: string;
  make: string;
  color: string;
  private _features: Features[];
  private _price: number;
  private _image: string;

  constructor(params: CarConstructor | Record<string, any>) {
    this.id = params.id;
    this.model = params.model;
    this.make = params.make;
    this.color = params.color;
    this._features = params.features;
    this._price = params.price;
    this._image = params.image;
  }

  toJSON() {
    return {
      id: this.id,
      model: this.model,
      make: this.make,
      color: this.color,
      features: this._features,
      price: this._price,
      image: this._image,
    };
  }

  get features() {
    return this._features.map((feature) => featuresLabels[feature]).join(', ');
  }

  get image() {
    if (!this._image) return;

    return `${process.env.NEXT_PUBLIC_BASE_URL_API}/${this._image}`;
  }

  get price() {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(this._price / 100);
  }
}
