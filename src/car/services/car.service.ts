import { Injectable } from '@nestjs/common';
import { Car } from 'src/car/domain/entities';
import { CarRepository } from 'src/car/repositories';
import { Features } from '../domain/enums/features.enum';

type CarParams = {
  model: string;
  make: string;
  color: string;
  price: number;
  features: Features[];
};

@Injectable()
export class CarService {
  constructor(private readonly carRepository: CarRepository) {}

  async list() {
    const car = await this.carRepository.list();
    return car;
  }

  async getUnique(id: number) {
    const car = await this.carRepository.getUnique(id);
    return car;
  }

  async create(params: CarParams) {
    let car = new Car({ ...params });
    car = await this.carRepository.create(car);
    return car;
  }

  async delete(id: number) {
    const car = await this.carRepository.getUnique(id);

    if (!car) {
      return false;
    }

    await this.carRepository.delete(id);
    return true;
  }

  async update(id: number, { model, make, color, price, features }: CarParams) {
    let car = await this.carRepository.getUnique(id);

    if (!car) {
      return null;
    }

    car.model = model;
    car.make = make;
    car.color = color;
    car.price = price;
    car.features = features;

    car = await this.carRepository.update(car);
    return car;
  }
}
