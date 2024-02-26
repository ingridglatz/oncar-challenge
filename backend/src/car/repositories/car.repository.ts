import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Car } from '../domain/entities';
import { Features } from '../domain/enums/features.enum';

@Injectable()
export class CarRepository {
  constructor(private prisma: PrismaService) {}

  async list(): Promise<Car[]> {
    const cars = await this.prisma.car.findMany({ orderBy: { id: 'asc' } });
    return cars.map((car) => {
      const { features, ...rest } = car;
      return new Car({ ...rest, features: features as Features[] });
    });
  }

  async getUnique(id: number): Promise<Car | null> {
    const car = await this.prisma.car.findUnique({ where: { id } });

    return car
      ? new Car({ ...car, features: car.features as Features[] })
      : null;
  }

  async create(car: Car): Promise<Car> {
    const created = await this.prisma.car.create({ data: car });
    return new Car({ ...created, features: created.features as Features[] });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.car.delete({ where: { id } });
  }

  async update(car: Car): Promise<Car> {
    const updated = await this.prisma.car.update({
      where: { id: car.id },
      data: car,
    });
    return new Car({ ...updated, features: updated.features as Features[] });
  }
}
