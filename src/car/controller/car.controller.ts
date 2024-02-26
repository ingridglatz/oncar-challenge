import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CarService } from '../services/car.service';
import { CarDto } from './car.dto';

@Controller('/cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  async list() {
    const car = await this.carService.list();
    return car;
  }

  @Get('/:id')
  async getUnique(@Param('id') id: string) {
    const car = await this.carService.getUnique(Number(id));

    if (!car) {
      throw new NotFoundException('Not found');
    }

    return car;
  }

  @Post()
  async create(@Body() body: CarDto) {
    const { model, make, color, features, price } = body;
    const car = await this.carService.create({
      model,
      make,
      color,
      price,
      features,
    });
    return car;
  }

  @Delete('/:id')
  @HttpCode(204)
  async delete(@Param('id') id: string) {
    const car = await this.carService.delete(Number(id));

    if (!car) {
      throw new NotFoundException('Not found');
    }
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() body: CarDto) {
    const { model, make, color, features, price } = body;
    const car = await this.carService.update(Number(id), {
      model,
      make,
      color,
      price,
      features,
    });

    if (!car) {
      throw new NotFoundException('Not found');
    }

    return car;
  }
}
