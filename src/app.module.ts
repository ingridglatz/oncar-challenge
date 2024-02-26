import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { CustomerModule } from './customer/customer.module';

@Module({ imports: [CarModule, CustomerModule] })
export class AppModule {}
