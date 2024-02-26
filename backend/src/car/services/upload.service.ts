import { Injectable } from '@nestjs/common';
import { CarRepository } from '../repositories';
import * as fs from 'fs/promises';

@Injectable()
export class UploadService {
  constructor(private readonly carRepository: CarRepository) {}

  async uploadFile(file: any, id: number) {
    const car = await this.carRepository.getUnique(id);

    if (!car) {
      await fs.rm(file.path);
      return null;
    }

    if (car.image) {
      await fs.rm(`./public/${car.image}`);
    }

    car.image = file.filename;
    await this.carRepository.update(car);
    return car;
  }
}
